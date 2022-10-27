import React from 'react'
import Intro from '../screens/login/Intro';
import ForgotPassword from '../screens/login/ForgotPassword';
import EnterOTP from '../screens/login/EnterOTP';
import ResetPassword from '../screens/login/ResetPassword';
import LoginScreen from '../screens/login/LoginScreen';

const AuthStack = (Stack) => {
    return (
        <>
            <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
            <Stack.Screen name="EnterOTP" component={EnterOTP} options={{ headerShown: false }}/>
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
        </>
    )
}

export default AuthStack
