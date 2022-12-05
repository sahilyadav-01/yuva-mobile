import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardButton = ({text, iconName, iconColor, onPress}) => {
  return (
    <TouchableOpacity className="flex-row items-center" onPress={onPress}>
      <Icon name={iconName} size={14} color={iconColor} />
      <Text className="text-xs ml-1" style={{color: iconColor}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CardButton;
