import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../../store/reducers/AuthSlice';

export const useChangePassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {changePasswordLoading, changePasswordSuccess} = useSelector(
    state => state.auth,
  );
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePasswordText, setSecurePasswordText] = useState(true);
  const [secureConfirmPasswordText, setSecureConfirmPasswordText] =
    useState(true);
  const [enableNavigation, setEnableNavigation] = useState(false);
  const [from, setFrom] = useState();

  useEffect(() => {
    if (!changePasswordLoading && changePasswordSuccess && enableNavigation) {
      if (from === 'Profile') navigation.navigate('Home');
      else navigation.navigate('HomeService');
    }
  }, [changePasswordLoading, enableNavigation, from]);

  const onPasswordChange = text => setPassword(text.toString());
  const onConfirmPasswordChange = text => setConfirmPassword(text.toString());
  const onPasswordIconPress = secureTextEntry =>
    setSecurePasswordText(secureTextEntry);
  const onConfirmPasswordIconPress = secureTextEntry =>
    setSecureConfirmPasswordText(secureTextEntry);
  const onLoginPress = (from, number, hash) => {
    setFrom(from);
    if (password && password === confirmPassword)
      dispatch(resetPassword({emailOrNumber: number, hash, password}));
    setEnableNavigation(true);
  };
  const onForgotPasswordPress = from =>
    navigation.navigate('ForgotPassword', {from});

  const onSignUpPress = from => navigation.navigate('SignUp', {from});

  return {
    password,
    confirmPassword,
    securePasswordText,
    secureConfirmPasswordText,
    onPasswordChange,
    onConfirmPasswordChange,
    onPasswordIconPress,
    onConfirmPasswordIconPress,
    onLoginPress,
    onForgotPasswordPress,
    onSignUpPress,
  };
};
