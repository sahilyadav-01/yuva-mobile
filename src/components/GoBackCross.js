import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {} from 'react-native-gesture-handler';

const GoBackCross = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row justify-end mt-2">
      <Icon name="window-close" size={32} color="black" />
    </TouchableOpacity>
  );
};

export default GoBackCross;
