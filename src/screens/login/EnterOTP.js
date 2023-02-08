import React from 'react';
import {SafeAreaView} from 'react-native';
import OTP from '../../modules/otp';
import {FLASH_WHITE} from '../../styles/colors';

const EnterOTP = props => {
  const {number, email, name, password, verificationType,from, resetPassword} =
    props?.route?.params;
  const otpProps = {number, email, name, password, verificationType};
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: FLASH_WHITE}}>
      <OTP otpProps={otpProps} from={from} resetPassword={resetPassword ?? null}/>
    </SafeAreaView>
  );
};
export default EnterOTP;
