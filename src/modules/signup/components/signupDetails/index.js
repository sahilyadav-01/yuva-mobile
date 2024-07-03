import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {SILVER_CHALICE, CYAN_BLUE, GREEN, MARINER, ANAKIVA} from '../../../../styles/colors';
import InputPassword from '../../../changePassword/passwordField';
import {useSignUp} from '../../useSignUp';
import LoginTextContainer from '../loginTextContainer';
import styles from './style';
import { onPrivacyPolicyPress, onTermsConditionsPress } from '../../../../utils/utils';
import { NUMBER_EXISTS, NUMBER_NOT_VALID } from '../../constants';

const SignUpDetailsCard = props => {
  const style = styles();
  const signUp = useSignUp();
  return (
    <View>
      <View style={style.textInputCardContainer}>
        <TextInput
          style={style.textInputContainer}
          placeholder="Name"
          onChangeText={signUp?.onChangeName}
          value={signUp?.name}
          placeholderTextColor={SILVER_CHALICE}
          autoComplete={'off'}
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
          autoComplete={'off'}
        />
        <View style={style.separator} />
        {signUp?.checkNumber && (
          <View style={style.checkTextContainer}>
            <Text style={style.warningText}>{NUMBER_NOT_VALID}</Text>
          </View>
        )}
        {!signUp?.checkNumber && signUp?.numberExisting && (
          <View style={style.checkTextContainer}>
            <Text style={style.warningText}>{NUMBER_EXISTS}</Text>
          </View>
        )}
        <View style={{height: signUp?.checkNumber ? 40 : 48}} />
        <InputPassword
          placeholderText="Password"
          value={signUp?.password}
          onChangeText={text => signUp?.onChangePassword(text)}
          onPressIconIn={() => signUp?.onPasswordIconPress(false)}
          onPressIconOut={() => signUp?.onPasswordIconPress(true)}
          secureTextEntry={signUp?.securePasswordEntry}
          onEndEditing={() => signUp?.onPasswordBlur()}
        />
        {signUp?.checkPassword && (
          <View style={style.checkTextContainer}>
            <Text style={style.warningText}>
              Password should be atleast 6 characters long
            </Text>
          </View>
        )}
        <View style={{height: 48}} />
        <InputPassword
          placeholderText="Confirm Password"
          value={signUp?.confirmPassword}
          onChangeText={text => signUp?.onChangeConfirmPassword(text)}
          onPressIconIn={() => signUp?.onConfirmPasswordIconPress(false)}
          onPressIconOut={() => signUp?.onConfirmPasswordIconPress(true)}
          secureTextEntry={signUp?.secureConfirmPasswordEntry}
          onEndEditing={() => signUp?.onConfirmPasswordBlur()}
        />
        {signUp?.checkConfirmPassword && (
          <View style={style.checkTextContainer}>
            <Text style={style.warningText}>
              Password should be atleast 6 characters long
            </Text>
          </View>
        )}
        <View style={style.termsAndConditionsContainer}>
          <Checkbox.Android
            color={GREEN}
            uncheckedColor={CYAN_BLUE}
            onPress={signUp?.toggleTerms}
            status={signUp?.terms ? 'checked' : 'unchecked'}
          />
          <Text style={style.termsAndConditionsText}>
            By clicking on the below button, you agree to our{' '}
            <Text
              onPress={onTermsConditionsPress}
              style={style.termsConditionsText}>
              Terms and Conditions
            </Text>{' '}
            & <Text
              onPress={onPrivacyPolicyPress}
              style={style.termsConditionsText}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
      </View>
      <TouchableOpacity
        disabled={!signUp?.enableSignUpButton}
        style={{
          ...style.buttonContainer,
          backgroundColor: signUp?.enableSignUpButton ? MARINER : ANAKIVA,
        }}
        onPress={() => {
          if (signUp?.enableSignUpButton)
            signUp?.onSignUp(signUp?.number, props?.from);
        }}>
        <Text style={style.buttonText}>Register</Text>
      </TouchableOpacity>
      <LoginTextContainer
        onButtonPress={() => signUp?.onLoginPress(props?.from)}
        primaryText="Already a member, "
        pressableText="Login Here"
      />
    </View>
  );
};

export default SignUpDetailsCard;
