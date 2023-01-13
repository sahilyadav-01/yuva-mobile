import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import ForgotPassword from '../screens/login/ForgotPassword';
import EnterOTP from '../screens/login/EnterOTP';
import Signup from '../screens/login/Signup';

const Stack = createStackNavigator();

const Authentication = (props) => {
  const from = props?.route?.params?.from || '';

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
        initialParams={from}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterOTP"
        component={EnterOTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Authentication;
