import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginThunk} from '../../../store/reducers/AuthSlice';
import {profileThunk} from '../../../store/reducers/ProfileSlice';
import {
  isEmpty,
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
} from '../../../utils/utils';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const focused = useIsFocused();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [from, setFrom] = useState(null);
  const {loggedIn} = useSelector(state => state.auth);
  const {
    user: {jwt, status},
    navigateToRegister,
  } = useSelector(state => state.auth);

  const onLoginPress = from => {
    const reg = /^\d+$/;
    if (reg.test(email.toString()) && email.toString().length !== 10)
      Alert.alert('Alert', EMAIL_VALIDATION);
    else if (!reg.test(email.toString()) && email.split('@').length !== 2)
      Alert.alert('Alert', EMAIL_VALIDATION);
    else if (isEmpty(password)) {
      Alert.alert('Alert', PASSWORD_VALIDATION);
    } else {
      setFrom(from);
      dispatch(loginThunk({email, password}));
    }
  };

  const onForgotPasswordPress = from => {
    navigation.navigate('ForgotPassword', {from});
  };

  const onSignUpPress = from => {
    navigation.navigate('SignUp', {from});
  };

  const onChangeEmail = e => {
    setEmail(e);
  };

  const onChangePassword = e => {
    setPassword(e);
  };

  const onPasswordIconPress = secureTextEntry =>
    setSecureEntry(secureTextEntry);

  useEffect(() => {
    if (navigateToRegister && status) {
      navigation.navigate('EnterOTP', {
        email,
        password,
        verificationType: 'email',
        from,
      });
    } else {
      if (loggedIn == 'loggedIn' && jwt && status) {
        dispatch(profileThunk());
        if (from === 'Profile') navigation.navigate('Home');
        else navigation.navigate('HomeService');
      }
    }
  }, [status]);

  return {
    email,
    password,
    secureEntry,
    onChangeEmail,
    onChangePassword,
    onPasswordIconPress,
    onForgotPasswordPress,
    onSignUpPress,
    onLoginPress,
  };
};
