import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import AppointmentCard from './AppointmentCard';
import {PlusCircleIcon, LocationMarkerIcon} from 'react-native-heroicons/solid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, {Line} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import Backbutton from '../../../../components/Backbutton';
import {allAppointmentThunk} from '../../../../store/reducers/AppointmentSlice';
import {useDispatch, useSelector} from 'react-redux';

const AppointmentHome = ({navigation}) => {

  const renderItem = ({item}) => (
    <AppointmentCard
      id={item.id}
      doctorName={item.doctorName}
      address={item.address}
      status={item.status}
      speciality={item.speciality}
      description={item.description}
      slot={item.slot}
    />
  );

  //const navigation = useNavigation()

  const newAppointment = () => {
    navigation.navigate('NewAppointment');
  };

  const goBack = () => {
    navigation.getId();
  };

  /**
   * State
   */
  const {jwt} = useSelector(state => state.auth.user);
  const appointments = useSelector(state => state.appointment.userAppointments);
  const homeRefresh = useSelector(state => state.appointment.homeRefresh);

  /**
   * Hooks
   */
  const dispatch = useDispatch();

  /**
   * React Hooks
   */
  useEffect(() => {
    const isActive = 'false';
    dispatch(allAppointmentThunk({jwt, isActive})).then().catch();
  }, [homeRefresh]);

  useEffect(() => {});

  return (
    <View className="m-[10px]">
      {/* Appointment */}
      <View className="flex-row items-center justify-between ml-2 mr-2 mt-[10px]">
        <Text className="text-bold  text-xl">Appointments</Text>
        <TouchableOpacity onPress={newAppointment}>
          <Icon name="plus-circle-outline" size={50} color="black" />
        </TouchableOpacity>
      </View>

      <View className="h-[500px] mt-[10px]">
        <ScrollView
          bounces={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 60,
          }}
          showsVerticalScrollIndicator={false}>
          {appointments.map(item => {
            return (
              <AppointmentCard
                key={item.id}
                id={item.id}
                doctorName={item.doctorName}
                address={item.address}
                status={item.status}
                speciality={item.speciality}
                description={item.description}
                slot={item.slot}
                otp={item.otp}
                hospitalName={item.hospitalName}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default AppointmentHome;
