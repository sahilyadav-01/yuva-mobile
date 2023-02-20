import React from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import Heading from '../../components/Heading';
import {SILVER_CHALICE} from '../../styles/colors';
import LoginTextContainer from '../signup/components/loginTextContainer';
import {useForgotPassword} from './hooks/useForgotPassword';
import styles from './style';

const ForgotPasswordScreen = props => {
  const style = styles();
  const forgotPassword = useForgotPassword();
  return (
    <>
      <View style={style.cardContainer}>
        <View style={style.cardStyle}>
          <Heading heading="Forgot Password" />
          <View style={style.textInputContainerStyle}>
            <TextInput
              style={style.textInputContainer}
              placeholder="Phone Number/Email"
              onChangeText={forgotPassword?.onChangeText}
              value={forgotPassword?.text}
              placeholderTextColor={SILVER_CHALICE}
            />
            <View style={style.separator} />
          </View>
          {forgotPassword?.errorText && (
            <View style={style.errorContainer}>
              <Text style={style.errorText}>{forgotPassword?.errorText}</Text>
            </View>
          )}
          <TouchableOpacity
            style={style.buttonContainer}
            onPress={() => forgotPassword?.onContinue(props?.from)}>
            <Text style={style.buttonText}>Continue</Text>
          </TouchableOpacity>
          <LoginTextContainer
            onButtonPress={() => {
              forgotPassword?.onLoginPress(props?.from);
            }}
            primaryText="Already a member, "
            pressableText="Login Here"
          />
          <LoginTextContainer
            onButtonPress={() => {
              forgotPassword?.onSignUpPress(props?.from);
            }}
            primaryText="New to Yuva Health, "
            pressableText="Sign Up Here"
            extraStyles={{marginTop: 28}}
          />
        </View>
      </View>
    </>
  );
};

export default ForgotPasswordScreen;
