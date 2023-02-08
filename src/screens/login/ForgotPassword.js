import React from 'react';
import {SafeAreaView} from 'react-native';
import ForgotPasswordScreen from '../../modules/forgotPassword/index';
import { FLASH_WHITE } from '../../styles/colors';

const ForgotPassword = ({route}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:FLASH_WHITE}}>
      <ForgotPasswordScreen from={route?.params?.from} />
    </SafeAreaView>
  );
};
export default ForgotPassword;