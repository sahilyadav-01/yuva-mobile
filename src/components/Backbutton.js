import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

import {MaterialCommunityIcons} from 'react-native-vector-icons';

const Backbutton = ({onPress, color, size}) => {
  return (
    <TouchableOpacity className="rounded border-black" onPress={onPress}>
      {/* <ArrowCircleLeftIcon className="h-5 w-5"/> */}
      <MaterialCommunityIcons
        name="arrow-left"
        size={size == undefined ? 35 : size}
        color={color == undefined ? 'black' : color}
      />
    </TouchableOpacity>
  );
};

export default Backbutton;
