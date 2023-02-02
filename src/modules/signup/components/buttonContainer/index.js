import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

const ButtonContainer = () => {
  const {buttonContainer, buttonText} = styles();
  return (
    <TouchableOpacity style={buttonContainer}>
      <Text style={buttonText}>Register</Text>
    </TouchableOpacity>
  );
};

export default ButtonContainer;
