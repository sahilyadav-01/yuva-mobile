import {useNavigation} from '@react-navigation/core';
import {
  allAppointmentThunk,
  cancelAppointmentThunk,
  appointmentThunk,
} from '../../../../../store/reducers/AppointmentSlice';
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export const useView = () => {
  const [cancelFlag, setCancelFlag] = useState(false);
  const [name,setName]=useState("Myself");
  const [userRelation,setUserRelation]=useState("Myself");
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
    memberName,
    relation,
    patientNumber,
  } = useSelector(state => state.appointment.currentAppointment);
  useEffect(()=>{
    if(!relation || !memberName){
      setUserRelation("Myself");
      setName("Myself")
    }
    else{
      setUserRelation(relation);
      setName(memberName)
    }
    },[memberName,relation])
  const data = {
    hospital: hospitalName,
    Doctor: doctorName,
    Specialization: speciality,
    Description: description,
    memberName: name + '   |   ' + userRelation,
    patientNumber: patientNumber,
  };
  const goBack = () => {
    navigation.goBack();
  };
  const editAppointment = () => {
    navigation.navigate('EditAppointment', data);
  };

  const checkIn = () => {
    navigation.navigate('CheckInAppointment', {
      otp: otp,
      memberName: name,
    });
  };
  const cancelAppointment = () => {
    setCancelFlag(true);
  };

  const cancelAppointmentMessagBox = () => {
    setCancelFlag(false);
    dispatch(cancelAppointmentThunk({id}))
      .then(() => dispatch(allAppointmentThunk()))
      .then(() => navigation.navigate('AppointmentHome'));
  };
  useEffect(() => {
    if(typeof id === 'number')
    dispatch(appointmentThunk({id}));
  }, [id]);

  return {
    cancelFlag,
    goBack,
    editAppointment,
    checkIn,
    cancelAppointment,
    cancelAppointmentMessagBox,
    otp,
  };
};
