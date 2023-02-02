import React from 'react';
import Header from '../../components/Header';
import SignUpCard from './components/signUpCard';
import {useSignUp} from './useSignUp';

const SignUp = () => {
  const signUpProps = useSignUp();
  return (
    <>
      <Header name="SIGNUP" />
      <SignUpCard signUpProps={signUpProps} />
    </>
  );
};
export default SignUp;
