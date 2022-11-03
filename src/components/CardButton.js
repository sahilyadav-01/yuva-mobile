import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardButton = ({text, iconName, iconColor}) => {
  return (
    <TouchableOpacity className="flex-row items-center">
      <Icon name={iconName} size={14} color={iconColor} />
      <Text className="text-xs ml-1" style={{color: iconColor}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CardButton;
