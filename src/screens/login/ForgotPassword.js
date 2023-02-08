import React from 'react';
import {SafeAreaView} from 'react-native';
import ForgotPasswordScreen from '../../modules/forgotPassword/index';
import {styles} from './style';

const ForgotPassword = ({route}) => {
  const {container} = styles();
  return (
    <SafeAreaView style={container}>
      <ForgotPasswordScreen from={route?.params?.from} />
    </SafeAreaView>
  );
};
export default ForgotPassword;
