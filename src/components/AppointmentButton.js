import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const AppointmentButton = ({color, name, action, disable, extraStyles}) => {
  return (
    <TouchableOpacity
      onPress={action}
      disabled={disable === undefined ? false : disable}
      style={[{backgroundColor: color}, extraStyles]}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default AppointmentButton;
