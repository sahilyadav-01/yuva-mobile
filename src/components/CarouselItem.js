import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardButton from './CardButton';
import { getDate, getTime } from '../utils/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const CarouselItem = (props) => {
  const { item, index, totalItem, diagnosticItem } = props;
  const { name, setName } = useState('');
  const wp = Dimensions.get('screen').width;
  const navigation = useNavigation();
  const onReschedule = () => {

  };

  const onCancelAppointment = () => {

  };
  const rescheuleBookingAndCancel = () => {
    if (diagnosticItem) {
      navigation.navigate('RescheduleTestAndPackage', { id: diagnosticItem.id })
    }
  }
  return (
    <TouchableOpacity onPress={rescheuleBookingAndCancel}>
      <View
        style={{
          minHeight: 170,
          width: wp - 30,
          marginLeft: index === 0 ? 0 : 10,
          marginRight: index === totalItem - 1 ? 0 : 10,
        }}
        className="mt-[40px] rounded-lg drop-shadow-2xl shadow-2xl bg-[#FEFCFF]">
        {/* wrapper */}
        {item && diagnosticItem === undefined ? (
          <View className="flex my-[10px] mx-[10px]">
            <View className="flex-row justify-between">
              <Text className="text-[#E68D36] text-base">{item?.status}</Text>
              <Text className="text-[#E68D36] text-sm">{item?.doctorName}</Text>
            </View>
            <View className="mt-[20px]">
              <View className="flex-row items-center">
                <Text className="mr-2 text-[#1D2334] text-base  font-bold">
                  {item?.hospitalName}
                </Text>
                <Icon name="map-marker-outline" size={14} color="black" />
              </View>
              <Text className="mt-[10px] font-medium text-xs">
                {item?.description}
              </Text>
            </View>
          </View>
        ) : (
          <View className="flex my-[10px] mx-[10px]">
            <View className="flex-row justify-between">
              <Text className="text-[#E68D36] text-base">{diagnosticItem.bookingStatus}</Text>
              {!diagnosticItem.packageName ? (
                <Text className="text-[#E68D36] text-sm">
                  {diagnosticItem.testName}
                </Text>
              ) : (
                <Text className="text-[#E68D36] text-sm">
                  {diagnosticItem.packageName}
                </Text>
              )}
            </View>
            <View className="mt-[20px]">
              <View className="flex-row items-center">
                <Text className="mr-2 text-[#1D2334] text-base  font-bold">
                  {diagnosticItem.labName}
                </Text>
                <Icon name="map-marker-outline" size={14} color="black" />
              </View>
              <Text className="mt-[10px] font-medium text-xs">
                {diagnosticItem.testOrPackageDescription}
              </Text>
            </View>
          </View>
        )}
        {/* <View className="flex-row items-center">
            <Icon name="calendar-blank-outline" size={24} color="black" />
            <View className="ml-[2px]">
              <Text style={{fontSize: 12}} className="">
                {getDate(item?.timeSlot)}
              </Text>
              <Text style={{fontSize: 10}}>{getTime(item?.timeSlot)}</Text>
            </View>
        </View>  */}
        <View className="flex-row justify-between mt-[30px] mr-[10px]">
          <CardButton
            text="Reschedule"
            iconName="clock-outline"
            iconColor="#319B4B"
            onPress={onReschedule}
          />
          <CardButton
            text="Cancel Appointment"
            iconName="close"
            iconColor="#A53F2B"
            onPress={onCancelAppointment}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselItem;



