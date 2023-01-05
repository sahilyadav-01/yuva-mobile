import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardButton = ({text, iconName, iconColor, onPress, containerStyle, textStyle}) => {
  return (
    <TouchableOpacity className="flex-row items-center" onPress={onPress} style={containerStyle}>
      {iconName && <Icon name={iconName} size={14} color={iconColor} />}
      <Text className="text-xs ml-1" style={[{color: iconColor}, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CardButton;
