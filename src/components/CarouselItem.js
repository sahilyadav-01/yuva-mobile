import React from 'react';
import {View, Text} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import CardButton from './CardButton';

const CarouselItem = ({item, index}) => {
  return (
    <View className="w-full h-[170px] mt-[40px] rounded-lg drop-shadow-2xl shadow-2xl bg-[#FEFCFF]">
      {/* wrapper */}
      <View className="flex my-[10px] mx-[10px]">
        {/* Doctor */}
        <View className="flex-row justify-between">
          <Text className="text-[#E68D36] text-base">123456</Text>
          <Text className="text-[#E68D36] text-sm">Doctor</Text>
        </View>

        {/* Description */}
        <View className="mt-[20px]">
          <View className="flex-row items-center">
            <Text className="mr-2 text-[#1D2334] text-base  font-bold">
              Clinic Apex
            </Text>
            <MaterialCommunityIcons
              name="google-maps"
              size={14}
              color="black"
            />
          </View>
          <Text className="mt-[10px] font-medium text-xs">
            Appointment for HeadAche
          </Text>
        </View>

        {/* actions */}
        <View className="flex-row justify-between mt-[30px]">
          <CardButton
            text="Reschedule"
            iconName="clock-outline"
            iconColor="#319B4B"
          />
          <CardButton
            text="Cancel Appointment"
            iconName="close"
            iconColor="#A53F2B"
          />
        </View>
      </View>
    </View>
  );
};

export default CarouselItem;
