import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Backbutton = ({onPress, color, size}) => {
  return (
    <TouchableOpacity className="rounded border-black" onPress={onPress}>
      <Icon
        name="arrow-left"
        size={size == undefined ? 35 : size}
        color={color == undefined ? 'black' : color}
      />
    </TouchableOpacity>
  );
};

export default Backbutton;
