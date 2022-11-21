import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Backbutton from '../../components/Backbutton';
import Header from '../../components/Header';
import { Login } from '@mui/icons-material';
import { forgotPassword ,resetForgotPassword} from '../../store/reducers/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import AlertBox from '../../components/AlertBox';
import { hideErrorBox } from '../../store/reducers/AuthSlice';

const ForgotPassword = () => {
  // const [email, onChangeEmail] = useState('Email');
  const { apiError, apiErrorMessage,forgotStatus } = useSelector(
    state => state.auth,
  );


  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [email, setEmail] = useState('');


useEffect(()=> {
if (forgotStatus ){
  navigation.navigate('Login');
  dispatch(resetForgotPassword());
}
},[forgotStatus])

  const onForgotPassword = () => {
    dispatch(forgotPassword({ email }))
  
    // if (!apiError) {
    //   navigation.navigate('Login');
    // } 
  };
  const closeErrorBox = () => {
    dispatch(hideErrorBox());
  };
  const login = () => {
    navigation.navigate('Login');
  };
  const signUp = () => {
    navigation.navigate('SignUp');
  };
  const onChangeEmail = e => {
    setEmail(e);
  };
  return (
    <SafeAreaView className="flex h-full">
      <Backbutton onPress={login} />

      {/* Top Section */}
      <Header name="FORGOT" />

      {/* Login Screen */}
      <View className="flex h-[260px] mt-[60px]">
        <TextInput
          // handleChange={email => setEmail(email)}
          onChangeText={onChangeEmail}
          value={email}
          style={{ backgroundColor: '#f5f9fa' }}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl border-b-2 pl-2"
          placeholder="Email"
        />

        <TouchableOpacity
          // style={{backgroundColor: '#52608E'}}
          // className="mt-[45px] mr-[30px] ml-[30px] rounded">
          // {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          // <Text className="text-center pt-[15px] pb-[15px] text-white">
          //   Send OTP
          // </Text>
          onPress={onForgotPassword}
          style={{ backgroundColor: '#E68D36' }}
          className="mt-[40px] mr-[30px] ml-[30px] rounded">
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text className="text-center pt-[15px] pb-[15px] text-white">
            Continue
          </Text>
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={login}>
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text style={{ color: '#52608E' }} className="text-center mt-[20px]">
            <Text className="font-bold">Already a member,</Text> Login Here
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={signUp}>
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text style={{ color: '#52608E' }} className="text-center mt-[20px]">
            <Text className="font-bold">New to Yuva Health,</Text> Sign Up Here
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <AlertBox
          showDialog={apiError}
          hideDialog={closeErrorBox}
          message={apiErrorMessage}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
