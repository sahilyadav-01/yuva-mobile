import React from 'react';
import {View, ScrollView} from 'react-native';
import Form from '../form';
import Heading from '../heading';
import styles from './style';

const SignUpCard = props => {
  const {signUpProps} = props;
  const {scrollViewContainer, signUpCard} = styles();
  return (
    <ScrollView style={scrollViewContainer}>
      <View style={signUpCard}>
        <Heading />
        <Form signUpProps={signUpProps} />
      </View>
    </ScrollView>
  );
};

export default SignUpCard;
