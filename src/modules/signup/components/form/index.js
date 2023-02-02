import React from 'react';
import {View} from 'react-native';
import ButtonContainer from '../buttonContainer';
import SignUpDetailsCard from '../signupDetails';
import styles from './style';

const Form = props => {
  const {signUpProps} = props;
  const {formContainer} = styles();
  return (
    <View style={formContainer}>
      <SignUpDetailsCard signUpProps={signUpProps} />
      <ButtonContainer />
    </View>
  );
};

export default Form;
