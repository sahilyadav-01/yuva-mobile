import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {
  allAppointmentThunk,
  rescheduleAppointmentThunk,
  resetMessage,
} from '../../../../../store/reducers/AppointmentSlice';
import {getEpoch} from '../../../../../utils/utils';
import {Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
export const useEdit = (plan, userVersion, uuid, version) => {
  const {id} = useSelector(state => state.appointment.currentAppointment);
  const {rescheduleAppointment, errorAppointment} = useSelector(
    state => state.appointment,
  );
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [saveFlag, setSaveFlag] = useState(false);
  const [selected, setSelected] = useState('');
  const [dataRelation, setDataRelation] = useState();
  const [description, setDesciption] = useState('');
  const [alternateContactNumber, setAlternateContactNumber] =
    useState(patientNumber);
  const [navAppointment, setNavAppoinment] = useState(false);
  const route = useRoute();
  const {
    Doctor,
    Specialization,
    hospital,
    Description,
    memberName,
    patientNumber,
  } = route?.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goBack = () => {
    navigation.goBack();
  };
useEffect(()=>{
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() +1);
  tomorrow.setHours(7);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);
  setTime(tomorrow);
  setDate(tomorrow);
},[])

  const {
    newMessage,
    appointmentDescription,
    getAppointment,
    userAppointments,
    appointment,
  } = useSelector(state => state.appointment);
  const {doctorId, name, specialization} = appointment;
  const {relationId} = useSelector(state => state.profile);
  const saveAppointment = () => {
    dispatch(
      rescheduleAppointmentThunk({
        timeSlot: getEpoch(date, time),
        id,
        doctorId,
        plan,
        programOrPlanUuid: uuid,
        selected,
      }),
    );
  };
  useEffect(() => {
    if (rescheduleAppointment?.message) {
      Alert.alert('Message', rescheduleAppointment?.message, [
        {
          text: 'Ok',
          onPress: () => {
            dispatch(allAppointmentThunk());
            setNavAppoinment(true);
          },
        },
      ]);
    } else if (errorAppointment?.errorMessage) {
      Alert.alert('Alert', errorAppointment?.errorMessage);
    }
    return () => dispatch(resetMessage());
  }, [rescheduleAppointment, errorAppointment]);
  useEffect(() => {
    if (navAppointment && userAppointments?.length) {
      navigation.navigate('AppointmentHome');
    }
  }, [navAppointment]);

  const closeSaveMessageBox = () => {
    setSaveFlag(false);
    dispatch(allAppointmentThunk());
    if (userAppointments?.length) {
      navigation.navigate('AppointmentHome');
    }
  };
  const onChangeDescription = txt => {
    setDesciption(txt);
  };
  const onChaneNumber = num => {
    if (num.length === 10) {
      setAlternateContactNumber(num);
    }
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
    saveFlag,
    setSelected,
    dataRelation,
    onChaneNumber,
    onChangeDescription,
    getAppointment,
    memberName,
    Doctor,
    Specialization,
    Description,
   
  };
};
