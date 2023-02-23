import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CheckIn from '../../assets/CheckIn';
import Reschedule from '../../assets/Reschedule';
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
      {reschedule && <Reschedule />}
      {checkIn && <CheckIn />}
      <Text style={textStyles}>{name}</Text>
    </TouchableOpacity>
  );
};

export default AppointmentButton;
