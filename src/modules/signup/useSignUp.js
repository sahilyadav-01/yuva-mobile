import {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {apiError, apiErrorMessage} = useSelector(state => state.auth);
  const {smsVerified, emailVerified} = useSelector(
    state => state.auth.verified,
  );
  const {loading} = useSelector(state => state.auth);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [signupFlag, setSignupFlag] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const [signupMessage, setSignupMessage] = useState();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkConfirmPassowrd, setCheckConfirmPassword] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const {verifySms, verifyEmail} = useSelector(state => state.auth.signUp);
  const [numberOtp, setNumberOtp] = useState();
  const [emailOtp, setEmailOtp] = useState();
  const [fetchNumberCheck, setFetchNumberCheck] = useState(false);
  const [fetchEmailCheck, setFetchEmailCheck] = useState(false);
 

  useEffect(() => {
    if(route?.params?.resendVar=="email"){
      const OtpEmail=route?.params?.Otp;
      setEmailOtp(OtpEmail);
    }
    else if(route?.params?.resendVar=="phone"){
      const OtpMobile=route?.params?.Otp;
      setNumberOtp(OtpMobile);
    }

  }, [route?.params?.resendVar]);

  useEffect(() => {
    verifySms && navigation.navigate('EnterOTP', {
      emailOrNumber: number,
      attributeName: 'Phone Number',
      var: 'phone',
    });
  }, [verifySms]);

  useEffect(() => {
    verifyEmail && navigation.navigate('EnterOTP', {
      emailOrNumber: email,
      attributeName: 'Email',
      var: 'email',
  });
  }, [verifyEmail]);

  const onVerify = phoneOrEmail => {
    if (phoneOrEmail === 'phoneNumber' && number && !checkNumber) {
      dispatch(verifySmsThunk({number}));
    } else if (phoneOrEmail === 'email' && email && !checkEmail) {
      dispatch(verifyEmailOtpThunk({email}));
    }
  };

  const goBack = () => {
    navigation.navigate('Login');
  };
  const signup = () => {
    //dispatch  thunk
    if (
      checkEmail === false &&
      checkNumber === false &&
      checkPassword === false &&
      number !== undefined &&
      email !== undefined &&
      password !== undefined &&
      smsVerified &&
      emailVerified && 
      numberOtp !== undefined &&
      emailOtp !== undefined 
    ) {
      dispatch(signupThunk({email,emailOtp,name,number,numberOtp,password}))
        .then(() => {
          setSignupMessage('Succesfully Signed up!');
          setSignupFlag(true);
          setErrorFlag(true);
        })
        .catch(e => {
          setSignupMessage('Registration Failed!');
          setSignupFlag(false);
          setErrorFlag(true);
        });
    } else {
      onSetErrorMsg();
      setSignupFlag(false);
      setErrorFlag(true);
    }
  };

  const onSetErrorMsg = () => {
    if (!name) {
      setSignupMessage('Enter Name!');
    } else if (!number || checkNumber) {
      setSignupMessage('Enter Valid Number!');
    } else if (!verifySms) {
      setSignupMessage('Please Verify Number!');
    } else if (!email || checkEmail) {
      setSignupMessage('Enter Valid Email!');
    } else if (!verifyEmail) {
      setSignupMessage('Please Verify Email!');
    } else if (!password || checkPassword) {
      setSignupMessage('Enter Valid Password!');
    } else if (!confirmPassword || checkConfirmPassowrd) {
      setSignupMessage('Enter Valid Re-Password!');
    } else {
      setSignupMessage('Something Went wrong!');
    }
  };

  const onChangeName = e => {
    setName(e);
  };
  const onChangeNumber = e => {
    if (verifySms) {
      resetVerifySms();
    }
    setNumber(e);
  };
  const onChangeEmail = e => {
    if (verifyEmail) {
      resetVerifyEmail();
    }
    setEmail(e);
  };
  const onChangePassword = e => {
    setPassword(e);
  };
  const onChangeConfirmPassword = e => {
    setConfirmPassword(e);
  };
  const closeMessageBox = () => {
    setErrorFlag(false);
    if (signupFlag) {
      navigation.navigate('Login');
    }
  };
  const checkEmailText = () => {
    if (!email.includes('@')) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
      setFetchEmailCheck(true);
      console.log('Call verify API if user exists or not')
    }
  };

  const checkNumberText = () => {
    const reg = /^\d+$/;
    console.log(number.toString().length)
    console.log(reg.test(number.toString()) && number.toString().length === 10)
    if (reg.test(number.toString()) && number.toString().length === 10) {
      setCheckNumber(false);
      setFetchNumberCheck(true);
      console.log('Call verification API here')
    } else {
      setCheckNumber(true);
    }
  };

  return {
    onChangeName,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeNumber,
    onChangeEmail,
    checkNumberText,
    checkEmailText,
    name,
    number,
    email,
    password,
    confirmPassword,
    checkNumber,
    checkEmail
  };
};
