import React from 'react';
import {View, ScrollView} from 'react-native';
import Form from '../form';
import Heading from '../heading';
import styles from './style';

const SignUpCard = props => {
  const {scrollViewContainer, signUpCard} = styles();
  return (
    <View
      style={scrollViewContainer}
      showsVerticalScrollIndicator={false}
      bounces={false}
      keyboardShouldPersistTaps="handled">
      <View style={signUpCard}>
        <Heading />
        <Form name={props.name} from={props?.from} />
      </View>
    </View>
  );
};

export default SignUpCard;
