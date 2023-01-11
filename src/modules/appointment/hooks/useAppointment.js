import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAppointmentThunk } from "../../../store/reducers/AppointmentSlice";
import { useNavigation } from '@react-navigation/core';

export const useAppointment=()=>{

 
    const {jwt} = useSelector(state => state.auth.user);
    const appointments = useSelector(state => state.appointment.userAppointments);
    const homeRefresh = useSelector(state => state.appointment.homeRefresh);
  
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const goBack = () => {
        navigation.goBack();
      };
    
    useEffect(() => {
      const isActive = 'false';
      dispatch(allAppointmentThunk({jwt, isActive})).then().catch();
    }, [homeRefresh]);
  
    useEffect(() => {});
    return {
appointments,
homeRefresh,
goBack,
    }
}
 
 
 
 
 
 