import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardButton = ({text, iconName, iconColor, onPress, containerStyle, textStyle, disablePress}) => {
  const pressDisable = disablePress ?? false;
  const Container = pressDisable ? View : TouchableOpacity;
  return (
    <Container className="flex-row items-center" onPress={onPress} style={containerStyle}>
      {iconName && <Icon name={iconName} size={14} color={iconColor} />}
      <Text className="text-xs ml-1" style={[{color: iconColor}, textStyle]}>
        {text}
      </Text>
    </Container>
  );
};

export default CardButton;
