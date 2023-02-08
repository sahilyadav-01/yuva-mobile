import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {
  CYAN_BLUE,
  ORANGE,
  ORANGE_GREY,
  SILVER_CHALICE,
  WHITE,
} from '../../../../styles/colors';
import {useSignUp} from '../../useSignUp';
import LoginTextContainer from '../loginTextContainer';
import styles from './style';

const SignUpDetailsCard = props => {
  const style = styles();
  const signUp = useSignUp();
  return (
    <>
      <View style={style.textInputCardContainer}>
        <TextInput
          style={style.textInputContainer}
          placeholder="Name"
          onChangeText={signUp?.onChangeName}
          value={signUp?.name}
          placeholderTextColor={SILVER_CHALICE}
        />
        <View style={style.separator} />
        <View style={{height: 48}} />
        <TextInput
          style={style.textInputContainer}
          placeholder="Contact Number"
          keyboardType="phone-pad"
          onChangeText={signUp?.onChangeNumber}
          onEndEditing={signUp?.checkNumberText}
          value={signUp?.number}
          placeholderTextColor={SILVER_CHALICE}
        />
        <View style={style.separator} />
        {signUp?.checkNumber && (
          <View style={style.checkTextContainer}>
            <Text style={style.warningText}>Number not valid</Text>
          </View>
        )}
        <View style={{height: signUp?.checkNumber ? 40 : 48}} />
        <TextInput
          style={style.textInputContainer}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={signUp?.onChangeEmail}
          onEndEditing={signUp?.checkEmailText}
          value={signUp?.email}
          placeholderTextColor={SILVER_CHALICE}
        />
        <View style={style.separator} />
        {signUp?.checkEmail && (
          <View style={style.checkTextContainer}>
            <Text style={style.warningText}>Email not valid</Text>
          </View>
        )}
        <View style={{height: signUp?.checkEmail ? 40 : 48}} />
        <TextInput
          style={style.textInputContainer}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={signUp?.onChangePassword}
          value={signUp?.password}
          placeholderTextColor={SILVER_CHALICE}
        />
        <View style={style.separator} />
        <View style={{height: 48}} />
        <TextInput
          style={style.textInputContainer}
          placeholder="Re-type Password"
          secureTextEntry={true}
          onChangeText={signUp?.onChangeConfirmPassword}
          value={signUp?.confirmPassword}
          placeholderTextColor={SILVER_CHALICE}
        />
        <View style={style.separator} />
        <View style={style.termsAndConditionsContainer}>
          <TouchableOpacity
            onPress={signUp?.toggleTerms}
            style={{
              ...style.checkBoxContainer,
              backgroundColor: signUp?.terms ? CYAN_BLUE : WHITE,
            }}
          />
          <Text style={style.termsAndConditionsText}>
            By clicking on the below button, you agree to our Terms and
            Conditions & Privacy Policy.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        disabled={!signUp?.enableSignUpButton}
        style={{
          ...style.buttonContainer,
          backgroundColor: signUp?.enableSignUpButton ? ORANGE : ORANGE_GREY,
        }}
        onPress={() => {
          if (signUp?.enableSignUpButton)
            signUp?.onSignUp(signUp?.number, props?.from);
        }}>
        <Text style={style.buttonText}>Register</Text>
      </TouchableOpacity>
      <LoginTextContainer
        onButtonPress={() => signUp?.onLoginPress(props?.from)}
        primaryText='Already a member, '
        pressableText='Login Here'
      />
    </>
  );
};

export default SignUpDetailsCard;
