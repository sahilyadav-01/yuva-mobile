import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import Timer from '../../components/Timer';
import styles from './style';
import Heading from '../../components/Heading';
import {useOtp} from './hooks/useOtp';

const OTP = props => {
  const {otpProps} = props;
  const {
    signUpCard,
    scrollViewContainer,
    otpInputContainer,
    otpContainer,
    verifyButtonContainer,
    timerContainer,
    resendOtpContainer,
    headingContainer,
    verifyText,
    resendOtpText,
    headingText,
    otpTextStyle,
  } = styles();
  const {
    getHeaderText,
    setOTP,
    onResend,
    onVerify,
    key,
    from,
    otpRef,
    enableResendOtp,
    onEnableResend,
  } = useOtp();
  return (
    <>
      <ScrollView
        style={scrollViewContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        <View style={signUpCard}>
          <Heading heading={getHeaderText(otpProps?.verificationType)} />
          <View style={headingContainer}>
            <Text style={headingText}>
              {getHeaderText(otpProps?.verificationType)}
            </Text>
          </View>
          <OtpInputs
            ref={ref => (otpRef.current = ref)}
            autofillFromClipboard={false}
            inputContainerStyles={otpInputContainer}
            handleChange={code => setOTP(code)}
            numberOfInputs={4}
            style={otpContainer}
            inputStyles={otpTextStyle}
          />
          <TouchableOpacity
            onPress={() =>
              onVerify(otpProps, props?.from ?? from, props?.resetPassword)
            }
            style={verifyButtonContainer}>
            <Text style={verifyText}>Verify</Text>
          </TouchableOpacity>
          <View style={timerContainer}>
            <Timer
              interval={60}
              key={key}
              resetEnable={() => {}}
              resetCallBack={() => onEnableResend()}
            />
          </View>
          <TouchableOpacity
            style={resendOtpContainer}
            disabled={!enableResendOtp}
            onPress={() =>
              onResend(
                otpProps?.email,
                otpProps?.number,
                otpProps?.verificationType,
                otpProps?.password ?? null,
              )
            }>
            <Text style={resendOtpText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default OTP;
