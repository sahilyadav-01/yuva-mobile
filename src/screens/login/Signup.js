import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Divider, ActivityIndicator} from 'react-native-paper';
import Backbutton from '../../components/Backbutton';
import {useDispatch, useSelector} from 'react-redux';
import AlertBox from '../../components/AlertBox';
import {signupThunk} from './../../store/reducers/AuthSlice';
import MessageBox from '../../components/MessageBox';
const Signup = () => {
  /**
   * state
   */
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signupFlag, setSignupFlag] = useState(false);
  const [signupMessage, setSignupMessage] = useState();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const {loading} = useSelector(state => state.auth.loading);
  /*
   * Hooks
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();
  /**
   * call back functions
   */
  const goBack = () => {
    navigation.navigate('Login');
  };
  const signup = () => {
    //dispatch  thunk
    if (
      checkEmail == false &&
      checkNumber == false &&
      checkPassword == false &&
      number != undefined &&
      email != undefined &&
      password != undefined
    ) {
      dispatch(signupThunk({email, number, password}))
        .then(() => {
          setSignupMessage('Succesfully Signed up!');
          setSignupFlag(true);
        })
        .catch(e => {
          console.log('error');
        });
    } else {
      setSignupMessage('Some value is wrong!');
      setSignupFlag(true);
    }
  };
  const onChangeName = e => {
    setNumber(e);
  };
  const onChangeEmail = e => {
    setEmail(e);
  };
  const onChangePassword = e => {
    setPassword(e);
  };
  const closeMessageBox = () => {
    setSignupFlag(false);
    if (number != undefined && email != undefined && password != undefined) {
      navigation.navigate('Login');
    }
  };
  const checkEmailText = e => {
    let reg =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (reg.test(e.target.value) === false) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };
  const checkPasswordText = e => {
    if (e.target.value.length < 6) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };
  const checkNumberText = e => {
    if (/1-9/g.test(e?.target?.value)) {
      setCheckNumber(true);
    } else {
      setCheckNumber(false);
    }
  };
  return (
    <SafeAreaView className="flex h-full">
      <Backbutton onPress={goBack} />
      {/* Top Section */}
      <View className="h-[75px] mt-[40px] mr-[20px] ml-[20px]">
        <View className="flex-row justify-between">
          <View className="flex-row">
            <Image
              source={require('../../../assets/yuva_logo-2.png')}
              className="h-[60px] w-[50px]"
            />
            <View className="flex ml-2 items-end">
              {/* <View className="h-[40px] w-[120px] bg-gray-500"></View> */}
              <Image
                source={require('../../../assets/yuva_text.png')}
                className="h-[40px] w-[120px]"
                resizeMode="contain"
              />
              <View className=""></View>
              <Image
                source={require('../../../assets/HEALTH.png')}
                className="h-[15px] w-[70px] mt-2"
                resizeMode="contain"
              />
            </View>
          </View>
          <View className="flex items-end justify-end">
            <Text className="text-bold text-lg">USER SIGNUP</Text>
            <Divider
              style={{backgroundColor: '#52608E'}}
              className="h-1 w-14 rounded mt-0.5"
            />
          </View>
        </View>
      </View>
      {/* SignUP Screen */}
      <View className="flex h-full mt-[30px]">
        <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] mt-{40px} rounded shadow-2xl border-b-2 pl-2 mb-[40px]"
          placeholder="Name"
        />
        <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl border-b-2 pl-2 mb-[60px]"
          placeholder="Contact Number"
          onChangeText={onChangeName}
          onBlur={checkNumberText}
        />
        {checkNumber === true && (
          <Text className="mt-[10px] ml-[30px] text-red-500">
            Number is not Valid
          </Text>
        )}
        <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] mt-{40px} rounded shadow-2xl border-b-2 pl-2 "
          placeholder="Email"
          onChangeText={onChangeEmail}
          onBlur={checkEmailText}
        />
        {checkEmail === true && (
          <Text className=" ml-[30px] text-red-500">Email is not Valid</Text>
        )}
        <TextInput
          style={{backgroundColor: '#F5F9FA'}}
          className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl mt-{40px} border-b-2 pl-2 mt-[60px]"
          placeholder="Password"
          type="password"
          onChangeText={onChangePassword}
          onBlur={checkPasswordText}
          secureTextEntry={true}
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
          onChangeText={onChangePassword}
          onBlur={checkPasswordText}
          secureTextEntry={true}
        />
        {checkPassword === true && (
          <Text className="mt-[10px] ml-[30px] text-red-500">
            Password must be atleast 6 characters
          </Text>
        )}
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
      </View>
    </SafeAreaView>
  );
};
export default Signup;
