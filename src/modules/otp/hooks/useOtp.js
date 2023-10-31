import {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {
  loginThunk,
  resetHash,
  resetOtpMessage,
  signupThunk,
  verifyChangeThunk,
  verifyOtp,
  verifySmsThunk,
  verifyThunk,
} from '../../../store/reducers/AuthSlice';
import { setNewEmail, setNewNumber } from '../../../store/reducers/ProfileSlice';
import { Alert } from 'react-native';

export const useOtp = (otpProps) => {
  const {email, verificationType} = otpProps;
  let otpRef = useRef();
  const dispatch = useDispatch();
  const {
    signUpLoading,
    apiError,
    verifyLinkLoading,
    loggedIn,
    status,
    verifyLinkSuccessOtp,
    numberVerified,
    emailVerified,
    otpErrorMessage,
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
      if (from !== 'Home') navigation.navigate('Home',{screen:'HomeService'});
      else navigation.navigate('HomeService');
    }
    else if(!signUpLoading && loggedIn==='loggedIn' && status) {
     if (from !== 'Home') navigation.navigate('Home',{screen:'HomeService'});
      else navigation.navigate('HomeService');
    }
  }, [signUpLoading]);

  useEffect(() => {
    if(numberVerified && verificationType === 'number') {
      dispatch(setNewNumber(email));
      navigation.goBack();
    }
  }, [numberVerified]);

  useEffect(() => {
    if(emailVerified && verificationType === 'email') {
      dispatch(setNewEmail(email));
      navigation.goBack();
    }
  }, [emailVerified]);

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

  useEffect(()=>{
    if(otpErrorMessage) {
      Alert.alert('Alert',otpErrorMessage);
      dispatch(resetOtpMessage());
    }
  },[otpErrorMessage])
  const onVerify = (params, from, resetPassword) => {
    setFrom(from);
    if (resetPassword) {
      dispatch(verifyOtp({emailOrNumber: params?.number, otp}));
      setEnableNavigation(true);
      setNumber(params?.number.toString());
    } else if (params?.verificationType === 'number' && params?.signUp) {
      const {number, email, name, password} = params;
      dispatch(signupThunk({email, name, number, numberOtp: otp, password}));
    } else if (from === 'Profile'  && ((params?.verificationType === 'number' && !params?.signUp) || params?.verificationType === 'email')){
      const isValid =  ((otp).length === 4) && (/^\d+$/).test(otp);
      isValid ? dispatch(verifyChangeThunk({emailOrNumber: params?.email, otp, verificationType: params?.verificationType})) : Alert.alert('Alert', 'Invalid otp')
    } else if ((params?.verificationType === 'number' && !params?.signUp) || params?.verificationType === 'email') {
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
