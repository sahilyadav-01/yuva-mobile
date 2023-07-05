import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {PNG} from '../../../../assets';
import {SILVER_CHALICE} from '../../../styles/colors';
import separatorStyles from '../../forgotPassword/style';
import styles from './style';

const InputPassword = props => {
  const {separator, textInputContainer} = separatorStyles();
  const {inputContainer, textInputStyles, imageContainer} = styles();
  return (
    <View style={props?.extraStyles}>
      <View style={inputContainer}>
        <TextInput
          style={[textInputContainer, textInputStyles]}
          placeholder={props.placeholderText}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholderTextColor={SILVER_CHALICE}
          secureTextEntry={props?.secureTextEntry}
          onEndEditing={props.onEndEditing}
          autoComplete={'off'}
          textContentType='oneTimeCode'
        />
        <TouchableOpacity
          style={imageContainer}
          onPressOut={() => props?.onPressIconOut(true)}
          onPressIn={() => props?.onPressIconIn(false)}>
          <Image source={PNG.EYE} />
        </TouchableOpacity>
      </View>
      <View style={separator} />
    </View>
  );
};

export default InputPassword;
