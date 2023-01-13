import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import {ReactComponent as Yuva} from '../../assets/yuva-white.svg';
import {useDispatch, useSelector} from 'react-redux';

const MainHeader = ({onLoginPress}) => {
  const {user} = useSelector(state => state.auth);

  return (
    <View className="bg-[#1D2334]  pb-[20px]">
      <View className="flex-row mx-[13px] justify-between">
        {/* Logo */}
        <View className="flex-row  mt-[53px]">
          <Image
            source={require('../../assets/yuva_logo-2.png')}
            className="h-[32px] w-[28px]"
          />
          <View className="flex ml-2 items-end">
            {/* <View className="h-[40px] w-[120px] bg-gray-500"></View> */}
            <Image
              // source = {require("../../../assets/yuva_text.png")}
              source={require('../../assets/yuva-text-white.png')}
              className="h-[18px] w-[70px]"
              resizeMode="contain"
            />
            <View className=""></View>
            <Image
              source={require('../../assets/HEALTH_white_2.png')}
              className="h-[20px] w-[34px] mt-[1px]"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Name */}
        <View className="flex-row  mt-[47px]">
          <View className="flex items-end">
            <Text className="text-base text-white py-[2px]">{user.name}</Text>
            <TouchableOpacity className=" flex justify-center bg-white w-[65px] h-[21px] rounded">
              <Text className="text-center text-xs">Upgrade</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onLoginPress}>
          <Image
            source={require('../../assets/icon.png')}
            className="h-[45px] w-[45px] rounded-full border-4 border-white ml-[10px]"
          />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainHeader;
