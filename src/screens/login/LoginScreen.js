import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AlertBox from '../../components/AlertBox';
import {ActivityIndicator} from 'react-native-paper';
import Header from '../../components/Header';
import {
  isEmail,
  EMAIL_VALIDATION,
  isEmpty,
  PASSWORD_VALIDATION,
} from '../../utils/utils';
import {useDispatch, useSelector} from 'react-redux';
import {loginThunk, hideErrorBox} from '../../store/reducers/AuthSlice';
// import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
  /**
   * Hooks
   */
  const dispatch = useDispatch();
  const navigation = useNavigation();

  /**
   * State
   */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {loggedIn, loading, apiError, apiErrorMessage} = useSelector(
    state => state.auth,
  );

  /**
   * Routes
   */

  // Handle login button
  const login = () => {
    if (!isEmail(email)) {
      setError(true);
      setErrorMessage(EMAIL_VALIDATION);
    } else if (isEmpty(password)) {
      setError(true);
      setErrorMessage(PASSWORD_VALIDATION);
    } else {
      dispatch(loginThunk({email, password}));
    }
  };

  const forgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const signUp = () => {
    navigation.navigate('SignUp');
  };

  /**
   * Internal functions
   */
  //Disable Alert
  const disbaleAlert = () => {
    setError(false);
  };

  const closeErrorBox = () => {
    dispatch(hideErrorBox());
  };

  const onChangeEmail = e => {
    setEmail(e);
  };

  const onChangePassword = e => {
    setPassword(e);
  };

  /**
   * React hooks
   */
  useEffect(() => {
    if (loggedIn == 'loggedIn') {
      navigation.navigate('HomeScreen');
    }
  }, [loggedIn]);

  return (
    <SafeAreaView className="flex h-full">
      <StatusBar backgroundColor="#1D2334" style="light" />
      {/* Top Section */}
      <Header name="LOGIN" />

      {/* Login Screen */}
      <View className="flex mt-[60px]">
        <TextInput
          style={{backgroundColor: '#f5f9fa'}}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl border-b-2 pl-2 mb-[40px]"
          placeholder="Email / Phone Number"
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={{backgroundColor: '#f5f9fa'}}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl mt-{40px} border-b-2 pl-2 "
          placeholder="Password"
          type="password"
          onChangeText={onChangePassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={login}
          style={{backgroundColor: '#E68D36'}}
          className="mt-[40px] mr-[30px] ml-[30px] rounded">
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text className="text-center pt-[15px] pb-[15px] text-white">
            Login
          </Text>
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={forgotPassword}>
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text style={{color: '#52608E'}} className="text-center mt-[20px]">
            Forgot Password ? <Text className="font-bold">Click Here</Text>
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={signUp}>
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text style={{color: '#52608E'}} className="text-center mt-[20px]">
            <Text className="font-bold">New to Yuva Health,</Text> Sign Up Here
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <ActivityIndicator animating={loading} />
        <AlertBox
          showDialog={error}
          hideDialog={disbaleAlert}
          message={errorMessage}
        />
        <AlertBox
          showDialog={apiError}
          hideDialog={closeErrorBox}
          message={apiErrorMessage}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
