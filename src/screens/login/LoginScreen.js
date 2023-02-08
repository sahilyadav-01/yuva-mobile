import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from '../../modules/login';
import {styles} from './style';

const LoginScreen = ({route}) => {
  const {container} = styles();
  const from = route?.params?.from ?? null;
  return (
    <SafeAreaView style={container}>
      <Login from={from} />
    </SafeAreaView>
  );
};
export default LoginScreen;
