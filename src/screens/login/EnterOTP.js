import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Header from '../../components/Header';
import OtpInputs from 'react-native-otp-inputs';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {
  verifyThunk,
  verifyEmailOtpThunk,
  verifySmsThunk,
} from '../../store/reducers/AuthSlice';
import Timer from '../../components/Timer';

const EnterOTP = ({props, route}) => {
  console.log(route, 'mnbvcx');
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [number] = useState();
  const [email] = useState();
  const attributeName = route?.params?.attributeName;
  const emailOrNumber = route?.params?.emailOrNumber;
  const resendVar = route?.params?.var;

  console.log(emailOrNumber, 'malliiiiii');

  const onVerify = () => {
    //apply to verify function

    otp?.length === 4 && dispatch(verifyThunk({emailOrNumber, otp}));
    navigation.navigate('SignUp');
  };

  const onResend = () => {
    console.log(resendVar, 'mnbvc');
    console.log(emailOrNumber, 'asdf');
    if (resendVar === 'email') {
      dispatch(verifyEmailOtpThunk({email: emailOrNumber}));
    } else {
      console.log(emailOrNumber, 'lkjh');
      dispatch(verifySmsThunk({number: emailOrNumber}));
    }
  };

  return (
    <SafeAreaView className="flex h-full">
      <StatusBar backgroundColor="#1D2334" style="light" />
      {/* Top Section */}
      <Header name="VERIFY" />

      <View>
        <View style={{marginTop: '25%', marginHorizontal: '10%'}}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontWeight: '600',
              fontSize: 14,
              lineHeight: 21,
            }}>
            Verify {attributeName}
          </Text>
          <OtpInputs
            autofillFromClipboard={false}
            inputContainerStyles={{
              backgroundColor: '#E7E5E5',
              borderColor: '#E7E5E5',
              marginHorizontal: 10,
              width: '20%',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            handleChange={code => setOtp(code)}
            numberOfInputs={4}
            style={{
              width: '100%',
              marginTop: '5%',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          />
        </View>
        <TouchableOpacity
          onPress={onVerify}
          style={{backgroundColor: '#E68D36', borderRadius: 10}}
          className="mt-[40px] mr-[30px] ml-[30px]">
          <Text className="text-center pt-[15px] pb-[15px] font-bold text-white">
            Verify
          </Text>
        </TouchableOpacity>
        <View>
          <Timer interval={30} />
        </View>
        <TouchableOpacity onPress={onResend}>
          <Text
            style={{color: '#52608E'}}
            className="text-center mt-[20px] pt-[16px] font-semibold	">
            Resend OTP
          </Text>
        </TouchableOpacity>

        {/* <ActivityIndicator animating={false} /> */}
        {/* <AlertBox
            showDialog={error}
            hideDialog={disbaleAlert}
            message={errorMessage}
          /> */}
      </View>
    </SafeAreaView>
  );
};
export default EnterOTP;
