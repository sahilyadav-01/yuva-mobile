import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Heading from '../../components/Heading';
import InputPassword from '../changePassword/passwordField';
import forgotPasswordStyles from '../forgotPassword/style';
import changePasswordStyles from '../changePassword/style';
import {SILVER_CHALICE} from '../../styles/colors';
import {useLogin} from './hooks/useLogin';
import LoginTextContainer from '../signup/components/loginTextContainer';
import styles from './style';
import { getPlatform, onNeedHelpPress } from '../../utils/utils';

const Login = props => {
  const {
    cardContainer,
    cardStyle,
    buttonContainer,
    buttonText,
    textInputContainer,
    separator,
  } = forgotPasswordStyles();

  const Container = getPlatform().isIOS ? KeyboardAvoidingView : View;

  const {inputsContainer, buttonStyle } =
    changePasswordStyles();

  const {needHelpText, signUpContainer, container} = styles();

  const login = useLogin();
  return (
    <Container behavior='padding' style={container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={cardContainer}>
          <View style={cardStyle}>
            <Heading heading="USER LOGIN" />
            <View style={inputsContainer}>
              <TextInput
                style={[textInputContainer]}
                placeholder="Email/Mobile Number"
                value={login?.email}
                onChangeText={login?.onChangeEmail}
                placeholderTextColor={SILVER_CHALICE}
              />
              <View style={separator} />
              <InputPassword
                placeholderText="Password"
                value={login?.password}
                onChangeText={text => login?.onChangePassword(text)}
                onPressIconIn={() => login?.onPasswordIconPress(false)}
                onPressIconOut={() => login?.onPasswordIconPress(true)}
                secureTextEntry={login?.secureEntry}
                extraStyles={{marginTop: 50}}
              />
            </View>
            <TouchableOpacity
              style={[buttonContainer, buttonStyle]}
              onPress={() => login?.onLoginPress(props)}>
              <Text style={buttonText}>Login</Text>
            </TouchableOpacity>
            <LoginTextContainer
              onButtonPress={() => login?.onForgotPasswordPress(props?.from)}
              primaryText="Forgot Password, "
              pressableText="Click here"
            />
            <LoginTextContainer
              onButtonPress={() => login?.onSignUpPress(props?.from)}
              primaryText="New to Yuva Health, "
              pressableText="Sign Up Here"
              extraStyles={signUpContainer}
            />
            <Text onPress={onNeedHelpPress} style={needHelpText}>Need help? Get in touch</Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;
