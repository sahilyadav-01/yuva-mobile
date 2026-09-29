import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SVG} from '../../assets';
const AppointmentButton = ({
  color,
  name,
  action,
  disable,
  extraStyles,
  textStyles,
  reschedule,
  checkIn,
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      disabled={disable === undefined ? false : disable}
      style={[{backgroundColor: color}, extraStyles]}>
      {reschedule && <SVG.Reschedule />}
      {checkIn && <SVG.CheckIn />}
      <Text style={textStyles}>{name}</Text>
    </TouchableOpacity>
  );
};

export default AppointmentButton;
