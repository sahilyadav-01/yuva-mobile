import { useNavigation } from '@react-navigation/core';
import { allAppointmentThunk,cancelAppointmentThunk } from "../../../store/reducers/AppointmentSlice";
import { useState } from "react";
import {useSelector } from "react-redux";


export const ViewAppointmentHooks=()=>{
    
    const [cancelFlag, setCancelFlag] = useState(false);
    const navigation = useNavigation();
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
      const {jwt} = useSelector(state => state.auth.user);
        
    const goBack = () => {
        navigation.goBack();
      };
      const editAppointment = () => {
        navigation.navigate('EditAppointment');
      };
    
      const checkIn = () => {
      navigation.navigate('CheckInAppointment',{otp:otp})
      };
      const cancelAppointment = () => {
        setCancelFlag(true);
      };
    
        
  const cancelAppointmentMessagBox = () => {
    setCancelFlag(false);
    dispatch(cancelAppointmentThunk({jwt, id}))
      .then(() => dispatch(allAppointmentThunk({jwt})))
      .then(() => navigation.navigate('AppointmentHome'));
  };

    
    return {
cancelFlag,
goBack,
editAppointment,
checkIn,
cancelAppointment,
cancelAppointmentMessagBox,
otp

}}