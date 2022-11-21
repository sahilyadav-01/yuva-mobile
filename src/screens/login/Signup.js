import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/core';
import Backbutton from '../../components/Backbutton';
import {useDispatch, useSelector} from 'react-redux';
import AlertBox from '../../components/AlertBox';

import {
  signupThunk,
  verifySmsThunk,
  verifyEmailOtpThunk,
  resetSignUp,
} from './../../store/reducers/AuthSlice';
import MessageBox from '../../components/MessageBox';
import { configureStore } from '@reduxjs/toolkit';
const Signup = () => {
  /**
   * state
   */
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword,setConfirmPassword]=useState(false);
  const [signupFlag, setSignupFlag] = useState(false);
  const [signupMessage, setSignupMessage] = useState();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkConfirmPassowrd,setCheckConfirmPassword]= useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const {verifySms, verifyEmail} = useSelector(state => state.auth.signUp);
  const [verifyOtp, setVerifyOtp] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  /*
   * Hooks
   */

  /**
   * call back functions
   */

  const onVerify = phoneOrEmail => {
    setVerifyOtp(phoneOrEmail);
    if (phoneOrEmail === 'phoneNumber') {
      dispatch(verifySmsThunk({number}));
      navigation.navigate('EnterOTP', {
        emailOrNumber: number,
        attributeName: 'Phone Number',
        var: 'phone',
      });
    } else if(phoneOrEmail === 'email' && !checkEmail) {
      dispatch(verifyEmailOtpThunk({email}));
      navigation.navigate('EnterOTP', {
        emailOrNumber: email,
        attributeName: 'Email',
        var: 'email',
      });
    }
  };

  const goBack = () => {
    navigation.navigate('Login');
  };
  const signup = () => {
    //dispatch  thunk
    if (
      checkEmail === false &&
      checkNumber === false &&
      checkPassword === false &&
      number !== undefined &&
      email !== undefined &&
      password !== undefined &&
      verifyEmail &&
      verifySms
    ) {
      dispatch(signupThunk({name, email, number, password}))
        .then(() => {
          setSignupMessage('Succesfully Signed up!');
          setSignupFlag(true);
        })
        .catch(e => {});
    } else {
      setSignupMessage('Some value is wrong!');
      setSignupFlag(true);
    }
  };

  const onChangeName = e => {
    setName(e)
  }
  const onChangeNumber = e => {
    setNumber(e);
  };
  const onChangeEmail = e => {
    setEmail(e);
  };
  const onChangePassword = e => {
    setPassword(e);
    
  };
  const onChangeConfirmPassword=e=>{
    setConfirmPassword(e);
   
  }
  const closeMessageBox = () => {
    setSignupFlag(false);
    // if (number != undefined && email != undefined && password != undefined) {
    //   navigation.navigate('Login');
    // }
  };
  const checkEmailText = () => {
    let reg =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (reg.test(email) !== true) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };
  
  const checkPasswordText =()  => {
    if (password?.length < 6) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };
  const checkNumberText = ()=> {
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(number) === false) {
      setCheckNumber(true);
    } else {
      setCheckNumber(false);
    }
  };
  // console.log(checkNumber,"check")
  // console.log(number,"check123")
  //  const checkConfirmPassowrdText=(text)=>{

  //   if ((text) < 6) {
  //     setCheckConfirmPassword(true);
  //   } else {
  //     setCheckConfirmPassword(false);
  //   }
  //  }
  return (
    <SafeAreaView className="flex h-full">
      {/* <Backbutton onPress={goBack} /> */}
      {/* Top Section */}
      <Header name="SIGNUP" />

      {/* SignUP Screen */}
      <ScrollView className="flex h-full mt-[30px] my-8">
        <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl border-b-2 pl-2 mb-[40px]"
          placeholder="Name"
          onChangeText={onChangeName}
          value={name}
        />
        <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] mb-[10px] rounded shadow-2xl border-b-2 pl-2 "
          placeholder="Contact Number"
          onChangeText={onChangeNumber}
          onBlur={checkNumberText}
          keyboardType='phone-pad'
          value={number}
        />
        <View className="ml-[30px] mb-[20px]">
          <Text className="text-red-500">
            {checkNumber? 'Number is not Valid': ''}
          </Text>
        <TouchableOpacity onPress={() => onVerify('phoneNumber')}>
          <Text
            style={{position: 'absolute', color: verifySms? 'green': 'black'}}
            className="right-8 bottom-0 font-bold">
            Verify
          </Text>
        </TouchableOpacity>
        </View>

        <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] mb-[10px]  rounded shadow-2xl border-b-2 pl-2 "
          placeholder="Email"
          onChangeText={onChangeEmail}
          onBlur={checkEmailText}
          value={email}
        />
        <View className="ml-[30px] mb-[20px]">
          <Text className="text-red-500">
            {checkEmail? 'Email is not Valid': ''}
          </Text>
          <TouchableOpacity onPress={() => onVerify('email')}>
            <Text
              style={{position: 'absolute', color: verifyEmail? 'green': 'black'}}
              className="right-8 bottom-0 font-bold">
              Verify
            </Text>
          </TouchableOpacity>
        </View>


        <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl mt-{40px} border-b-2 pl-2 "
          placeholder="Type Password"
          type="password"
          onChangeText={onChangePassword}
          onBlur={checkPasswordText}
          secureTextEntry={true}
          value={password}
        />
        {checkPassword === true && (
          <Text className="mt-[10px] ml-[30px] text-red-500">
            Password must be atleast 6 characters
          </Text>
        )}
         <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl mt-{40px} border-b-2 pl-2  mt-[40px]"
          placeholder="Re-Type Password"
          type="password"
          onChangeText={onChangeConfirmPassword}
          //onBlur={checkConfirmPassowrdText}
          secureTextEntry={true}
          value={confirmPassword}
        />
        {confirmPassword !=0 && confirmPassword !== password &&  (
          <Text className="mt-[10px] ml-[30px] text-red-500">
           Password is not same
          </Text>
        ) }
        <TouchableOpacity
          onPress={signup}
          style={{backgroundColor: '#E68D36'}}
          className="mt-[45px] mr-[30px] ml-[30px] rounded">
          {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
          <Text className="text-center pt-[15px] pb-[15px] text-white">
            Register
          </Text>
          {/* </View> */}
        </TouchableOpacity>

        {/* Loading indicator */}
        {/* <ActivityIndicator animating={loading}/> */}
        {/* Handle input  errors */}
        {/* <AlertBox showDialog={error} hideDialog={disbaleAlert} message={errorMessage}/> */}
        <MessageBox
          head="Message"
          showDialog={signupFlag}
          hideDialog={closeMessageBox}
          message={signupMessage}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signup;
