import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {SILVER_CHALICE} from '../../../../styles/colors';
import styles from './style';

const SignUpDetailsCard = props => {
  const style = styles();
  const {
    onChangeName,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeNumber,
    onChangeEmail,
    name,
    number,
    email,
    password,
    confirmPassword,
    checkNumberText,
    checkEmailText,
    checkNumber,
    checkEmail
  } = props.signUpProps;
  return (
    <View style={style.textInputCardContainer}>
      <TextInput
        style={style.textInputContainer}
        placeholder="Name"
        onChangeText={onChangeName}
        value={name}
        placeholderTextColor={SILVER_CHALICE}
      />
      <View style={style.separator} />
      <View style={{height:48}}/>
      <TextInput
        style={style.textInputContainer}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        onChangeText={onChangeNumber}
        onBlur={checkNumberText}
        value={number}
        placeholderTextColor={SILVER_CHALICE}
      />
      <View style={style.separator} />
      {checkNumber && <View style={style.checkTextContainer}>
      <Text style={style.warningText}>Number not valid</Text>
      </View>}
      <View style={{height:checkNumber ? 40 : 48}}/>
      <TextInput
        style={style.textInputContainer}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={onChangeEmail}
        onBlur={checkEmailText}
        value={email}
        placeholderTextColor={SILVER_CHALICE}
      />
      <View style={style.separator} />
      {checkEmail && <View style={style.checkTextContainer}>
      <Text style={style.warningText}>Email not valid</Text>
      </View>}
      <View style={{height:checkEmail ? 40 : 48}}/>
      <TextInput
        style={style.textInputContainer}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={onChangePassword}
        value={password}
        placeholderTextColor={SILVER_CHALICE}
      />
      <View style={style.separator} />
      <View style={{height:48}}/>
      <TextInput
        style={style.textInputContainer}
        placeholder="Re-type Password"
        secureTextEntry={true}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        placeholderTextColor={SILVER_CHALICE}
      />
      <View style={style.separator} />
    </View>
  );
};

export default SignUpDetailsCard;
