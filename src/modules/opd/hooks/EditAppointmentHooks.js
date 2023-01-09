import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { allAppointmentThunk,  rescheduleAppointmentThunk,
    resetMessage } from '../../../store/reducers/AppointmentSlice';
  import { getEpoch } from '../../../utils/utils'; 
  import {Alert } from 'react-native';

export const EditAppointmentHooks=()=>{


    const {id } = useSelector(state => state.appointment.currentAppointment);
      const { jwt } = useSelector(state => state.auth.user);
      const { rescheduleAppointment, errorAppointment } = useSelector(state => state.appointment)
      const [date, setDate] = useState(new Date());
      const [time, setTime] = useState(new Date());
      const [saveFlag, setSaveFlag] = useState(false);
    
     
      const navigation = useNavigation();
      const dispatch = useDispatch();
    
    
      const goBack = () => {
        navigation.goBack();
      };



  const saveAppointment = () => {
    dispatch(
      rescheduleAppointmentThunk({ timeSlot: getEpoch(date, time), id, jwt }),
    )
  };
  useEffect(() => {
    if (rescheduleAppointment?.message) {
      Alert.alert("Message",rescheduleAppointment?.message, [{
        text: "Ok", onPress: () => {
          dispatch(allAppointmentThunk({ jwt }))
            .then(() => navigation.navigate('AppointmentHome'));
        }
      }])
    }
    else if (errorAppointment?.errorMessage) {

      Alert.alert("Alert", errorAppointment?.errorMessage)
    }
    return () => dispatch(resetMessage())
  }, [rescheduleAppointment, errorAppointment])
   

  const closeSaveMessageBox = () => {
    setSaveFlag(false);
    dispatch(allAppointmentThunk({ jwt })).then(
      navigation.navigate('AppointmentHome'),
    );
  };

  const handleDate = date => {

    setDate(date);
  };

  const handleTime = time => {
    setTime(time);
  };
    return {
goBack,
saveAppointment,
closeSaveMessageBox,
handleDate,
handleTime,
date,
time,
saveFlag
}
}