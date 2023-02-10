import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const LoginTextContainer = ({
  onButtonPress,
  primaryText,
  pressableText,
  extraStyles,
}) => {
  const style = styles();
  return (
    <View style={[style.bottomTextContainer, extraStyles]}>
      <View style={style.rowTextContainer}>
        <Text style={style.existingMember}>{primaryText} </Text>
        <TouchableOpacity onPress={onButtonPress}>
          <Text style={style.loginText}>{pressableText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginTextContainer;
