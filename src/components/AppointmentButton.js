import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const AppointmentButton = ({
  color,
  name,
  action,
  disable,
  extraStyles,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      disabled={disable === undefined ? false : disable}
      style={[{backgroundColor: color}, extraStyles]}>
      <Text style={textStyles}>{name}</Text>
    </TouchableOpacity>
  );
};

export default AppointmentButton;
