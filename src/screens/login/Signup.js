import React from 'react';
import {SafeAreaView} from 'react-native';
import Signup from '../../modules/signup/index';
import {styles} from './style';

const SignUp = ({route}) => {
  const {container} = styles();
  return (
    <SafeAreaView style={container}>
      <Signup from={route?.params?.from} />
    </SafeAreaView>
  );
};
export default SignUp;
