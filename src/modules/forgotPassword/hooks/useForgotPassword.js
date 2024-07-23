import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {forgotPassword} from '../../../store/reducers/AuthSlice';

export const useForgotPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {forgotPasswordLoading, forgotPasswordSuccess} = useSelector(
    state => state.auth,
  );
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [enableNavigation, setEnableNavigation] = useState(false);
  const [from, setFrom] = useState(null);

  useEffect(() => {
    if (!forgotPasswordLoading && forgotPasswordSuccess && enableNavigation) {
      navigation.navigate('EnterOTP', {
        from,
        resetPassword: true,
        number: text,
        verificationType: 'number',
        signUp: false,
      });
    }
  }, [forgotPasswordLoading, enableNavigation, from]);

  const onChangeText = text => setText(text.toString());

  const getInputType = text => {
    const reg = /^\d+$/;
    if (text.toString().length === 10 && reg.test(text.toString())) {
      return 'number';
    } else if (text.toString().split('@').length === 2) {
      return 'email';
    }
    return null;
  };
  const onContinue = from => {
    const inputType = getInputType(text);
    if (!inputType) {
      setErrorText('Please enter a valid phone number or email');
    } else {
      setFrom(from ?? undefined);
      setErrorText('');
      dispatch(forgotPassword({emailOrNumber: text, inputType}));
      inputType === 'number' && setEnableNavigation(true);
    }
  };

  const onLoginPress = from => navigation.navigate('Login', {from});

  const onSignUpPress = from => navigation.navigate('SignUp', {from});
  return {
    text,
    onChangeText,
    onContinue,
    errorText,
    onLoginPress,
    onSignUpPress,
  };
};
