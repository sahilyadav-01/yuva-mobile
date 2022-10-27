import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

const CardButton = ({text, iconName, iconColor}) => {
  return (
    <TouchableOpacity className="flex-row items-center">
      <MaterialCommunityIcons name={iconName} size={14} color={iconColor} />
      <Text className="text-xs ml-1" style={{color: iconColor}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CardButton;
