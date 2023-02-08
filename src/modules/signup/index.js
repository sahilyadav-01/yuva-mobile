import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';
import SignUpCard from './components/signUpCard';
import {useSignUp} from './useSignUp';

const SignUp = ({from}) => {
  const {name} = useSignUp();
  return (
    <>
      <Header name="SIGNUP" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        <SignUpCard name={name} from={from} />
      </ScrollView>
    </>
  );
};
export default SignUp;
