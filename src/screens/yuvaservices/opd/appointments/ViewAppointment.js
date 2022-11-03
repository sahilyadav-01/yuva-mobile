import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import GoBackCross from '../../../../components/GoBackCross';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppointmentButton from '../../../../components/AppointmentButton';
import {useSelector} from 'react-redux';
import {appointmentStatus} from '../../../../utils/utils';
import {getDate, getTime} from '../../../../utils/utils';

const ViewAppointment = () => {
  /**
   * Hooks
   */
  const navigation = useNavigation();
  const [pin, setPin] = useState(false);

  /**
   * Handlers
   */
  const goBack = () => {
    navigation.goBack();
  };

  /**
   * State
   */

  const {
    id,
    doctorName,
    address,
    status,
    speciality,
    description,
    slot,
    otp,
    hospitalName,
  } = useSelector(state => state.appointment.currentAppointment);

  const editAppointment = () => {
    navigation.navigate('EditAppointment');
  };

  const checkIn = () => {
    setPin(!pin);
  };

  return (
    <View className="flex mr-2 ml-2 h-[800px]">
      <GoBackCross className="mt-4" onPress={goBack} />
      <Text className="text-bold text-lg ml-4">View Appointment</Text>

      {/* wrapper */}
      <View className="mx-[10px] mt-[20px]">
        {/* Section 1 */}
        <View className="flex-row justify-between">
          {/* status and doctor */}
          <View>
            <Text className="text-lg font-bold text-[#000000]">
              {appointmentStatus(status)}
            </Text>
            {/* Doctor */}
            <View className="mt-[26px]">
              <Text className="text-base font-semibold text-[#52608E]">
                Doctor - {doctorName}
              </Text>
              <Text className="text-xs font-medium text-[#52608E] mt-[4px]">
                {speciality}
              </Text>
            </View>
          </View>

          {/* Pin */}
          <View className="flex items-end">
            <Text className="font-semibold text-[#1D2334] text-sm">PIN</Text>
            <Text
              className="font-bold text-[#E68D36] text-lg mt-[15px]"
              style={{visibility: pin ? 'visible' : 'hidden'}}>
              {otp}
            </Text>
          </View>
        </View>

        {/* Section - 2 */}
        <View className="flex-row justify-between mt-[35px]">
          <View className="flex-row items-center">
            <Text className="text-lg text-bold text-[#1D2334] mr-[2px]">
              {hospitalName}
            </Text>
            <Icon
              name="google-maps"
              size={18}
              color="black"
            />
          </View>

          <View className="flex-row items-center">
            <Icon name="calendar" size={24} color="black" />
            <View className="ml-[2px]">
              <Text style={{fontSize: 12}} className="">
                {getDate(slot)}
              </Text>
              <Text style={{fontSize: 10}}>{getTime(slot)}</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View className="mt-[18px]">
          <TextInput
            className="h-[150px] bg-[#FFFFFF] pl-[10px] pt-[10px]"
            style={{borderWidth: 1, borderRadius: 12}}
            value={description}
            multiline={true}
            editable={false}
          />
        </View>

        {/* Actions */}
        <View className="mt-[25px]">
          <AppointmentButton
            disable={status === 'CANCELLED' ? true : false}
            name="Edit"
            color="#F2EFEA"
            action={editAppointment}
          />
          <AppointmentButton
            disable={status === 'CANCELLED' ? true : false}
            name="Check In"
            color="#E68D36"
            action={checkIn}
          />
        </View>
      </View>
    </View>
  );
};

export default ViewAppointment;
