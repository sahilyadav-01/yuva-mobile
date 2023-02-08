import React from 'react';
import {SafeAreaView} from 'react-native';
import Signup from '../../modules/signup/index';
import { FLASH_WHITE } from '../../styles/colors';

const SignUp = ({route}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:FLASH_WHITE}}>
      <Signup from={route?.params?.from}/>
    </SafeAreaView>
  );
};
export default SignUp;
