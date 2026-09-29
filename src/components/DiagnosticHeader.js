import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Backbutton from './Backbutton';
import {useNavigation} from '@react-navigation/core';
const DiagnosticHeader = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View className="bg-[#1D2334] mb-[10px] pb-[20px] flex-row">
      <Backbutton color="white" onPress={goBack} size={22} />
      <Text className="text-base ml-[10px] font-bold text-white py-[1px]">
        Diagnostic & Health Checkups
      </Text>
    </View>
  );
};

export default DiagnosticHeader;
