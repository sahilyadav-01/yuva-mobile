import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardButton from './CardButton';
import {getDimensions} from '../utils/utils';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  appointmentThunk,
  currentAppointment,
} from '../store/reducers/AppointmentSlice';
import {
  CANCEL_APPOINTMENT,
  CLOCK_OUTLINE,
  CLOSE,
  LAB_ASSIGN_PENDING,
  RESCHEDULE,
} from './constants';
import {GREEN, RED_SHADE} from '../styles/colors';

const CarouselItem = props => {
  const {item, index, totalItem, diagnosticItem} = props;
  const {name, setName} = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onReschedule = () => {};
  const onCancelAppointment = () => {};
  const viewAppointment = () => {
    dispatch(
      currentAppointment({
        doctorName: item?.doctorName,
        address: item?.address,
        status: item?.status,
        speciality: item?.speciality,
        description: item?.description,
        slot: item?.slot,
        otp: item?.otp,
        hospitalName: item?.hospitalName,
        relation: item?.relation,
        memberName: item?.memberName,
        customId: item?.customId,
      }),
    );
    navigation.navigate('ViewAppointment', {
      headerShown: true,
    });
  };

  const {width} = getDimensions();
  return (
    <TouchableOpacity onPress={viewAppointment}>
      <View
        style={{
          minHeight: 170,
          width: width - 30,
          marginLeft: index === 0 ? 0 : 10,
          marginRight: index === totalItem - 1 ? 0 : 10,
        }}
        className="rounded-lg drop-shadow-2xl shadow-2xl h-[137px] bg-[#FEFCFF]">
        {item && diagnosticItem === undefined ? (
          <View className="flex mt-[11px] ml-[11px]">
            <View className="flex-row justify-between">
              <Text className="text-[#E68D36] text-base">{item?.status}</Text>
              <Text className="text-[#E68D36] text-sm">{item?.doctorName}</Text>
            </View>
            <View className="mt-[10px]">
              <View className="flex-row items-center">
                <Text className=" text-[#1D2334] text-base  font-bold">
                  {item?.hospitalName}
                </Text>
                <Icon name="map-marker-outline" size={14} color="black" />
              </View>
              <Text className="mt-[16px] font-medium text-xs">
                {item?.description}
              </Text>
            </View>
          </View>
        ) : (
          <View className="flex mt-[11px] ml-[11px]">
            <View className="flex-row justify-between mr-[5px]">
              <Text className="text-[#E68D36] text-base">
                {diagnosticItem.bookingStatus}
              </Text>
              {!diagnosticItem.packageName ? (
                <Text className="text-[#E68D36] text-sm ">
                  {diagnosticItem.testName}
                </Text>
              ) : (
                <Text className="text-[#E68D36] text-sm">
                  {diagnosticItem.packageName}
                </Text>
              )}
            </View>
            <View className="mt-[10px]">
              <View className="flex-row items-center">
                <Text className="mr-2 text-[#1D2334] text-base  font-bold">
                  {(diagnosticItem.labName && diagnosticItem.labName) ||
                    LAB_ASSIGN_PENDING}
                </Text>
                <Icon name="map-marker-outline" size={14} color="black" />
              </View>
              <Text
                className="mt-[16px] font-medium text-xs"
                numberOfLines={2}
                ellipsizeMode="tail">
                {diagnosticItem.testOrPackageDescription}
              </Text>
            </View>
          </View>
        )}
        <View className="flex-row justify-between mt-[19px] mr-[5px] ml-[17.3px] mb-[9px]">
          <CardButton
            text={RESCHEDULE}
            iconName={CLOCK_OUTLINE}
            iconColor={GREEN}
            onPress={onReschedule}
          />
          <CardButton
            text={CANCEL_APPOINTMENT}
            iconName={CLOSE}
            iconColor={RED_SHADE}
            onPress={onCancelAppointment}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselItem;
