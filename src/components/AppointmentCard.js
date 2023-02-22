import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardButton from './CardButton';
import { currentAppointment } from '../store/reducers/AppointmentSlice';
import { appointmentStatus } from '../utils/utils';
import { getDate,getTime } from '../utils/utils';

const AppointmentCard = ({
  id,
  doctorName,
  address,
  status,
  speciality,
  description,
  slot,
  otp,
  hospitalName,
  relation,
  memberName,
  customId
}) => {
  /**
   * Use navigation
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   * Handlers
   */
  const viewAppointment = () => {
    dispatch(
      currentAppointment({
        id,
        doctorName,
        address,
        status,
        speciality,
        description,
        slot,
        otp,
        hospitalName,
        relation,
        memberName,
        customId
      }),
    );
    navigation.navigate('ViewAppointment');
  };

  return (
    <View>
      {status === 'CANCELLED' || status === 'COMPLETED' || status === 'FINISHED' ? (
        <TouchableOpacity
          // onPress={viewAppointment}
          className="w-full h-[170px] mt-[20px] rounded-lg drop-shadow-2xl shadow-2xl bg-[#FEFCFF]">
          {/* wrapper */}
          <View className="flex my-[10px] mx-[10px]">
            {/* Doctor */}
            <View className="flex-row justify-between">
              <Text className="text-[#319B4B] text-base">
                {appointmentStatus(status)}
              </Text>
              <Text className="text-[#E68D36] text-sm">{doctorName}</Text>
            </View>

            {/* Description */}
            <View className="flex-row justify-between mt-[20px]">
              <View>
                <View className="flex-row items-center">
                  <Text className="mr-2 text-[#1D2334] text-base  font-bold">
                    {hospitalName}
                  </Text>
                  <Icon name="map-marker-outline" size={14} color="black" />
                </View>
                <Text className="mt-[10px] font-medium text-xs">
                  {description === undefined ? '' : description.slice(0, 20)}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Icon name="calendar-blank-outline" size={24} color="black" />
                <View className="ml-[2px]">
                  <Text style={{ fontSize: 12 }} className="">
                    {getDate(slot)}
                  </Text>
                  <Text style={{ fontSize: 10 }}>{getTime(slot)}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>) :
        (<View>
          { status === "INITIATED" || status === "RESCHEDULED" ?
            (
              <TouchableOpacity
                onPress={viewAppointment}
                className="w-full h-[170px] mt-[20px] rounded-lg drop-shadow-2xl shadow-2xl bg-[#FEFCFF]">
                {/* wrapper */}
                <View className="flex my-[10px] mx-[10px]">
                  {/* Doctor */}
                  <View className="flex-row justify-between">
                    <Text className="text-[#E68D36] text-base">
                      {appointmentStatus(status)}
                    </Text>
                    <Text className="text-[#E68D36] text-sm">{doctorName}</Text>
                  </View>

                  {/* Description */}
                  <View className="flex-row justify-between mt-[20px]">
                    <View>
                      <View className="flex-row items-center">
                        <Text className="mr-2 text-[#1D2334] text-base  font-bold">
                          {hospitalName}
                        </Text>
                        <Icon name="map-marker-outline" size={14} color="black" />
                      </View>
                      <Text className="mt-[10px] font-medium text-xs">
                        {description === undefined ? '' : description.slice(0, 20)}
                      </Text>
                    </View>

                    <View className="flex-row items-center">
                      <Icon name="calendar-blank-outline" size={24} color="black" />
                      <View className="ml-[2px]">
                        <Text style={{ fontSize: 12 }} className="">
                          {getDate(slot)}
                        </Text>
                        <Text style={{ fontSize: 10 }}>{getTime(slot)}</Text>
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
              </TouchableOpacity>) : (  <TouchableOpacity
                onPress={viewAppointment}
                className="w-full h-[170px] mt-[20px] rounded-lg drop-shadow-2xl shadow-2xl bg-[#FEFCFF]">
                {/* wrapper */}
                <View className="flex my-[10px] mx-[10px]">
                  {/* Doctor */}
                  <View className="flex-row justify-between">
                    <Text className="text-[#E68D36] text-base">
                      {appointmentStatus(status)}
                    </Text>
                    <Text className="text-[#E68D36] text-sm">{doctorName}</Text>
                  </View>

                  {/* Description */}
                  <View className="flex-row justify-between mt-[20px]">
                    <View>
                      <View className="flex-row items-center">
                        <Text className="mr-2 text-[#1D2334] text-base  font-bold">
                          {hospitalName}
                        </Text>
                        <Icon name="map-marker-outline" size={14} color="black" />
                      </View>
                      <Text className="mt-[10px] font-medium text-xs">
                        {description === undefined ? '' : description.slice(0, 20)}
                      </Text>
                    </View>

                    <View className="flex-row items-center">
                      <Icon name="calendar-blank-outline" size={24} color="black" />
                      <View className="ml-[2px]">
                        <Text style={{ fontSize: 12 }} className="">
                          {getDate(slot)}
                        </Text>
                        <Text style={{ fontSize: 10 }}>{getTime(slot)}</Text>
                      </View>
                    </View>
                  </View>

                  {/* actions */}
                  <View className="flex-row justify-between mt-[30px]">
                    <CardButton
                      text="Check-in"
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
                </TouchableOpacity>)}
              </View>
        )}
    </View>
  );
};

export default AppointmentCard;
