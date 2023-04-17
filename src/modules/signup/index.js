import React from 'react';
import {ScrollView} from 'react-native';
import SignUpCard from './components/signUpCard';
import {useSignUp} from './useSignUp';

const SignUp = ({from}) => {
  const {name} = useSignUp();
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled">
        <SignUpCard name={name} from={from} />
      </ScrollView>
    </>
  );
};
export default SignUp;
