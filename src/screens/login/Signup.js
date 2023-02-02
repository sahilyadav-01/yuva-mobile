import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../styles';
import Signup from '../../modules/signup/index';
import { FLASH_WHITE } from '../../styles/colors';

const SignUp = ({route}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:FLASH_WHITE}}>
      <Signup />
    </SafeAreaView>
  );
};
export default SignUp;
