import React from 'react';
import {SafeAreaView} from 'react-native';
import OTP from '../../modules/otp';
import {styles} from './style';

const EnterOTP = props => {
  const {container} = styles();
  const {
    number,
    email,
    name,
    password,
    verificationType,
    from,
    resetPassword,
    signUp,
  } = props?.route?.params;
  const otpProps = {number, email, name, password, verificationType, signUp};
  return (
    <SafeAreaView style={container}>
      <OTP
        otpProps={otpProps}
        from={from}
        resetPassword={resetPassword ?? null}
      />
    </SafeAreaView>
  );
};
export default EnterOTP;
