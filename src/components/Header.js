import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View className="bg-[#E7EAED]  pb-[20px]">
      <View className="flex-row mx-[13px] justify-between">
        <View className="flex-row  mt-[33px]">
          <Image
            source={require('../../assets/yuva_logo-2.png')}
            className="h-[60px] w-[48px]"
          />
          <View className="flex ml-2 items-end">
            <Image
              source={require('../../assets/yuva_text.png')}
              className="h-[30px] w-[120px]"
              resizeMode="contain"
            />
            <View className=""></View>
            <Image
              source={require('../../assets/HEALTH.png')}
              className="h-[30px] w-[60px] mt-[5px]"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
