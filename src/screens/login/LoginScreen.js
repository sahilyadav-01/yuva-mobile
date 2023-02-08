import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from '../../modules/login';
import { FLASH_WHITE } from '../../styles/colors';

const LoginScreen = ({route}) => {
  const from = route?.params?.from ?? null;
  return (
    <SafeAreaView style={{flex:1,backgroundColor:FLASH_WHITE}}>
      <Login from={from}/>
    </SafeAreaView>
  );
};
export default LoginScreen;