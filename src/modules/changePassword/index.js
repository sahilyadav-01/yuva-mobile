import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import forgotPasswordStyles from '../forgotPassword/style';
import LoginTextContainer from '../signup/components/loginTextContainer';
import {useChangePassword} from './hooks/useChangePassword';
import InputPassword from './passwordField';
import styles from './style';

const ChangePasswordScreen = props => {
  const {cardContainer, cardStyle, buttonContainer, buttonText} =
    forgotPasswordStyles();
  const {inputsContainer, textInputSpacing, buttonStyle, loginContainer} =
    styles();
  const changePassword = useChangePassword();
  return (
    <>
      <Header name="CHANGE PASSWORD" />
      <View style={cardContainer}>
        <View style={cardStyle}>
          <Heading heading="Forgot Password" />
          <View style={inputsContainer}>
            <InputPassword
              placeholderText="Password"
              onChangeText={changePassword?.onPasswordChange}
              value={changePassword?.password}
              onPressIconIn={value =>
                changePassword?.onPasswordIconPress(value)
              }
              onPressIconOut={value =>
                changePassword?.onPasswordIconPress(value)
              }
              secureTextEntry={changePassword?.securePasswordText}
              extraStyles={textInputSpacing}
            />
            <InputPassword
              placeholderText="Confirm Password"
              onChangeText={changePassword?.onConfirmPasswordChange}
              value={changePassword?.confirmPassword}
              onPressIconIn={value =>
                changePassword?.onConfirmPasswordIconPress(value)
              }
              onPressIconOut={value =>
                changePassword?.onConfirmPasswordIconPress(value)
              }
              secureTextEntry={changePassword?.secureConfirmPasswordText}
            />
          </View>
          <TouchableOpacity
            style={[buttonContainer, buttonStyle]}
            onPress={()=> changePassword?.onLoginPress(props?.from,props?.number,props?.hash)}>
            <Text style={buttonText}>Login</Text>
          </TouchableOpacity>
          <LoginTextContainer
            onButtonPress={() =>
              changePassword?.onForgotPasswordPress(props?.from)
            }
            primaryText="Forgot Password"
            pressableText="Click Here"
          />
          <LoginTextContainer
            onButtonPress={() => changePassword?.onSignUpPress(props?.from)}
            primaryText="New to Yuva Health, "
            pressableText="Sign Up Here"
            extraStyles={loginContainer}
          />
        </View>
      </View>
    </>
  );
};

export default ChangePasswordScreen;
