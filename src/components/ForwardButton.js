import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

const ForwardButton = ({onPress, size, color}) => {
  return (
    <TouchableOpacity className="rounded border-black" onPress={onPress}>
      {/* <ArrowCircleLeftIcon className="h-5 w-5"/> */}
      <MaterialCommunityIcons
        name="arrow-right"
        size={size == undefined ? 35 : size}
        color={color == undefined ? 'black' : color}
      />
    </TouchableOpacity>
  );
};

export default ForwardButton;
