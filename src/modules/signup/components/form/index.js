import React from 'react';
import {View} from 'react-native';
import SignUpDetailsCard from '../signupDetails';
import styles from './style';

const Form = ({from}) => {
  const {formContainer} = styles();
  return (
    <View style={formContainer}>
      <SignUpDetailsCard from={from} />
    </View>
  );
};

export default Form;
