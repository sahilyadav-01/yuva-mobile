import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardButton from './CardButton';
import  {getDate, getTime} from '../utils/utils';

const CarouselItem = ({item, index}) => {
  return (
  
    <View className="w-full h-[170px] mt-[40px] rounded-lg drop-shadow-2xl shadow-2xl bg-[#FEFCFF]">
      {/* wrapper */}
      <View className="flex my-[10px] mx-[10px]">
        {/* Doctor */}
        <View className="flex-row justify-between">
          <Text className="text-[#E68D36] text-base">{item?.status}</Text>
          <Text className="text-[#E68D36] text-sm">{item?.doctorName}</Text>
        </View>

        {/* Description */}
        <View className="mt-[20px]">
          <View className="flex-row items-center">
            <Text className="mr-2 text-[#1D2334] text-base  font-bold">
            {item?.hospitalName}
            </Text>
            <Icon name="map-marker-outline" size={14} color="black" />
          </View>
          <Text className="mt-[10px] font-medium text-xs">
          {/* {item?.description === undefined ? '' : item?.description.slice(0, 20)} */}
          {item?.description}
          </Text>
        </View>
        <View className="flex-row items-center">
            <Icon name="calendar-blank-outline" size={24} color="black" />
            <View className="ml-[2px]">
              <Text style={{fontSize: 12}} className="">
                {getDate(item?.slot)}
              </Text>
              <Text style={{fontSize: 10}}>{getTime(item?.slot)}</Text>
            </View>
          </View>
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
  
  );
};

export default CarouselItem;
