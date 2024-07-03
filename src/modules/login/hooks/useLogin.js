import {useNavigation} from '@react-navigation/native';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [from, setFrom] = useState(null);
  const {loggedIn} = useSelector(state => state.auth);
  const {
    user: {status},
    navigateToRegister,
    type
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
      dispatch(loginThunk({email, password, type: reg.test(email.toString()) && email.toString().length === 10 ? 'number' : 'email'}));
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
        verificationType: type,
        from,
        signUp:false
      });
    } else {
      if (loggedIn == 'loggedIn' && status) {
        dispatch(profileThunk());
        if(from?.reset) navigation.reset({index:0,routes:[{name:'HomeScreen'}]})
        else if (from?.from == 'OurPlanDetails') navigation.navigate('HomeService',{navigateToDetails:true,screenParams:{data:from?.data}});
        else if(from?.from === 'MentalWellness') navigation.navigate('MentalWellness')
        else if (from?.from === 'CartScreen') navigation.navigate('HomeDrawer',{screen:'Cart',params:{screen:'Cart'}});
        else if (from?.from !== 'Home') navigation.navigate('Home',{screen:'HomeService'});
        else navigation.navigate('HomeService');
      }
    }
  }, [status,navigateToRegister]);

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
