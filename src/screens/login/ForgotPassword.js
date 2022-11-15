import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Backbutton from '../../components/Backbutton';
import Header from '../../components/Header';
const ForgotPassword = () => {
  const [email, onChangeEmail] = useState('Email');
  const navigation = useNavigation();

  const verifyOTP = () => {
    navigation.navigate('Login');
  };

  const login = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView className="flex h-full">
      <Backbutton onPress={login} />

      {/* Top Section */}
      <Header name="FORGOT" />

      {/* Login Screen */}
      <View className="flex h-[260px] mt-[60px]">
        <TextInput
          style={{backgroundColor: '#f5f9fa'}}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl border-b-2 pl-2"
          placeholder="Email"
        />

        <TouchableOpacity
          style={{backgroundColor: '#52608E'}}
          className="mt-[45px] mr-[30px] ml-[30px] rounded">
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text className="text-center pt-[15px] pb-[15px] text-white">
            Send OTP
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text style={{color: '#52608E'}} className="text-center mt-[20px]">
            Verify OTP
          </Text>
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
