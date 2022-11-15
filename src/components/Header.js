import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';
const Header = ({name}) => {
  return (
    <View className="h-[75px] mt-[40px] mr-[20px] ml-[20px]">
      <View className="flex-row justify-between">
        <View className="flex-row">
          <Image
            source={require('../../assets/yuva_logo-2.png')}
            className="h-[60px] w-[50px]"
          />
          <View className="flex ml-2 items-end">
            {/* <View className="h-[40px] w-[120px] bg-gray-500"></View> */}
            <Image
              source={require('../../assets/yuva_text.png')}
              className="h-[40px] w-[120px]"
              resizeMode="contain"
            />

            <Image
              source={require('../../assets/HEALTH.png')}
              className="h-[15px] w-[70px] mt-2"
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="flex items-end justify-end">
          <Text className="text-bold text-lg">USER {name}</Text>
          <Divider
            style={{backgroundColor: '#52608E'}}
            className="h-1 w-14 rounded mt-0.5"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
