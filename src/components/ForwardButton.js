import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ForwardButton = ({onPress, size, color}) => {
  return (
    <TouchableOpacity className="rounded border-black" onPress={onPress}>
      <Icon
        name="arrow-right"
        size={size == undefined ? 35 : size}
        color={color == undefined ? 'black' : color}
      />
    </TouchableOpacity>
  );
};

export default ForwardButton;
