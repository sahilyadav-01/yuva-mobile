import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from '../../modules/login';
import {styles} from './style';

const LoginScreen = ({route}) => {
  const {container} = styles();
  const from = route?.params?.from ?? null;
  const data = route?.params?.data ?? null;
  const reset = route?.params?.reset ?? null;
  return (
    <SafeAreaView style={container}>
      <Login from={from} data={data} reset={reset} />
    </SafeAreaView>
  );
};
export default LoginScreen;
