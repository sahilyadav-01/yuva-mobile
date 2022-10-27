import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {} from 'react-native-gesture-handler';

const GoBackCross = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row justify-end mt-2">
      <MaterialCommunityIcons name="window-close" size={32} color="black" />
    </TouchableOpacity>
  );
};

export default GoBackCross;
