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

export const useEdit = (plan, userVersion, uuid, version, patientNumber) => {
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
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goBack = () => {
    navigation.goBack();
  };

  const {newMessage, appointmentDescription, getAppointment} = useSelector(
    state => state.appointment,
  );
  const {doctorId, name, specialization} = useSelector(
    state => state.appointment.appointment,
  );
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
            dispatch(allAppointmentThunk()).then(() =>
              navigation.navigate('AppointmentHome'),
            );
          },
        },
      ]);
    } else if (errorAppointment?.errorMessage) {
      Alert.alert('Alert', errorAppointment?.errorMessage);
    }
    return () => dispatch(resetMessage());
  }, [rescheduleAppointment, errorAppointment]);

  const closeSaveMessageBox = () => {
    setSaveFlag(false);
    dispatch(allAppointmentThunk()).then(
      navigation.navigate('AppointmentHome'),
    );
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
  };
};
