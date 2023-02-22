import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {} from 'react-native-gesture-handler';
import {styles} from './styles';
const ActionButton = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
