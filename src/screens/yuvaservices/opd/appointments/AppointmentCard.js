import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {LocationMarkerIcon} from 'react-native-heroicons/solid';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardButton from '../../../../components/CardButton';
import {currentAppointment} from '../../../../store/reducers/AppointmentSlice';
import {appointmentStatus} from '../../../../utils/utils';
import {getDate, getTime} from '../../../../utils/utils';

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
      }),
    );
    navigation.navigate('ViewAppointment');
  };

  return (
    //     <View className='h-28 bg-gray-300 mt-5 mr-8 ml-8 rounded shadow-md'>
    //     {/* Top */}
    //     <View className="flex-row mt-4 mr-2  ml-2">

    //         <View className="ml-2 flex-1">
    //             {/* Line1 */}
    //             <View className="flex-row justify-between">
    //                 <Text  className="text-bold text-base">Dr.{doctorName}</Text>
    //                 <Text  className= "text-xs text-center">{status == "APPOINTMENT_SLOT_REQUESTED" ? "Confirmed" : "Pending"}</Text>
    //             </View>

    //             {/* Line2 */}
    //             <Text className= "text-xs">{speciality}</Text>

    //             {/* Line3 */}
    //             <View className="flex-row">
    //                 <Text className= "text-sm text-center mr-2">{address}</Text>
    //                 <TouchableOpacity className="h-4 w-4">
    //                     <LocationMarkerIcon/>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     </View>

    //     {/* Bottom */}
    //     <View className="flex-row justify-between items-center ml-2">
    //         <Text className="text-base"> {description}</Text>
    //         <TouchableOpacity
    //             style={{backgroundColor:'#AFA7A7'}}
    //             className="flex p-1 h-9 items-center rounded-tl-lg  rounded-br-lg"
    //             onPress={viewAppointment}
    //         >
    //             <Text className="text-center mt-1">View Appointment</Text>
    //         </TouchableOpacity>
    //     </View>
    // </View>

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
              <Text style={{fontSize: 12}} className="">
                {getDate(slot)}
              </Text>
              <Text style={{fontSize: 10}}>{getTime(slot)}</Text>
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
    </TouchableOpacity>
  );
};

export default AppointmentCard;
