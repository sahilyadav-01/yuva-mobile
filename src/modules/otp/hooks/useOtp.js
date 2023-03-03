import {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {
  loginThunk,
  resetHash,
  signupThunk,
  verifyOtp,
  verifySmsThunk,
  verifyThunk,
} from '../../../store/reducers/AuthSlice';

export const useOtp = () => {
  let otpRef = useRef();
  const dispatch = useDispatch();
  const {
    signUpLoading,
    apiError,
    verifyLinkLoading,
    verifyLinkApiError,
    verifyLinkApiErrorMessage,
    verifyLinkSuccessOtp,
  } = useSelector(state => state.auth);
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [from, setFrom] = useState(null);
  const [key, setKey] = useState(0);
  const [enableNavigation, setEnableNavigation] = useState(false);
  const [number, setNumber] = useState('');
  const [enableResendOtp, setEnableResendOtp] = useState(false);

  useEffect(() => {
    if (!signUpLoading && !apiError && otp) {
      if (from === 'Profile') navigation.navigate('Home');
      else navigation.navigate('HomeService');
    }
  }, [signUpLoading]);

  useEffect(() => {
    if (!verifyLinkLoading && verifyLinkSuccessOtp && enableNavigation) {
      dispatch(resetHash());
      navigation.navigate('ChangePassword', {
        from,
        hash: verifyLinkSuccessOtp,
        number,
      });
    }
  }, [enableNavigation, from, verifyLinkLoading, number]);

  const onVerify = (params, from, resetPassword) => {
    setFrom(from);
    if (resetPassword) {
      dispatch(verifyOtp({emailOrNumber: params?.number, otp}));
      setEnableNavigation(true);
      setNumber(params?.number.toString());
    } else if (params?.verificationType === 'number') {
      const {number, email, name, password} = params;
      dispatch(signupThunk({email, name, number, numberOtp: otp, password}));
    } else if (params?.verificationType === 'email') {
      dispatch(verifyThunk({emailOrNumber: params?.email, otp}));
    }
  };

  const setOTP = otp => setOtp(otp);

  const onResend = (email, number, verificationType, password) => {
    if (enableResendOtp) {
      setEnableResendOtp(false);
      setKey(key + 1);
      setOTP('');
      otpRef.current.reset();
      if (verificationType === 'number') {
        dispatch(verifySmsThunk({number}));
      } else {
        dispatch(loginThunk({email, password}));
      }
    }
  };

  const getHeaderText = type => {
    if (type === 'number') return 'Verify Phone Number';
    else return 'Verify Email';
  };
  const onEnableResend = (reset) => reset && setEnableResendOtp(reset);

  return {
    getHeaderText,
    setOTP,
    onVerify,
    onResend,
    onEnableResend,
    key,
    otpRef,
    enableResendOtp,
  };
};
