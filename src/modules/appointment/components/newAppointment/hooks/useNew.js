import {useNavigation} from '@react-navigation/core';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getEpoch} from '../../../../../utils/utils';
import {Alert} from 'react-native';
import {
  newAppointmentThunk,
  allAppointmentThunk,
  resetMessage,
} from '../../../../../store/reducers/AppointmentSlice';
import {getRelations} from '../../../../../store/reducers/ProfileSlice';
export const useNew = (plan, userVersion, uuid, version) => {
  const [signupFlag, setSignupFlag] = useState(false);
  const [signupMessage, setSignupMessage] = useState();
  const [description, setDesciption] = useState('');
  const [alternateContactNumber, setAlternateContactNumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [selected, setSelected] = useState('');
  const [dataRelation, setDataRelation] = useState();
  const [epochTime, setEpochTime] = useState(null);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const {newMessage, appointmentDescription} = useSelector(
    state => state.appointment,
  );
  const {doctorId, name, specialization} = useSelector(
    state => state.appointment.appointment,
  );
  useEffect(()=>{
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() +1);
    tomorrow.setHours(7);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    setTime(tomorrow);
    setDate(tomorrow);
  },[])
  
  const {relationId} = useSelector(state => state.profile);
  useEffect(() => {
    if (newMessage?.message) {
      setSignupFlag(true);
      setSignupMessage('Successfully Booked!');
    } else if (appointmentDescription?.description) {
      Alert.alert('Alert', 'Description cannot be null/empty');
    } else if (appointmentDescription?.errorMessage) {
      Alert.alert('Alert', appointmentDescription?.errorMessage);
    }
    return () => dispatch(resetMessage());
  }, [newMessage, appointmentDescription]);
  const newAppointment = () => {
    if(typeof epochTime === 'string')
    dispatch(
      newAppointmentThunk({
        alternateContactNumber,
        description,
        doctorId,
        plan,
        programOrPlanUuid: uuid,
        selected,
        epoch: epochTime,
        userPlanVersion: userVersion,
        version: version,
      }),
    );
    else {
      Alert.alert('Alert','Please select a time slot')
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
  const closeMessageBox = () => {
    setSignupFlag(false);
    dispatch(allAppointmentThunk()).then(
      navigation.navigate('AppointmentHome'),
    );
  };
  const handleDate = date => {
    setDate(date);
  };
  const handleTime = time => {
    setTime(time);
    getEpoch(date, time);
  };

  const handleDateTime = (arg) => {
    if(arg?.status)
    setEpochTime(arg?.value);
  }
  useEffect(() => {
    dispatch(getRelations());
  }, []);
  useEffect(() => {
    if (relationId?.relativeResponseDto?.length >= 0) {
      let newArray = relationId?.relativeResponseDto?.map(item => {
        return {
          key: item.id,
          value:
            item.name +
            '   |   ' +
            item.relation +
            '   |   ' +
            item.gender +
            '   |   ' +
            'Age - ' +
            item.age +
            '',
        };
      });
      setDataRelation(newArray);
    }
  }, [relationId]);
  return {
    goBack,
    signupFlag,
    signupMessage,
    newAppointment,
    onChangeDescription,
    onChaneNumber,
    description,
    closeMessageBox,
    handleDate,
    handleTime,
    date,
    time,
    selected,
    setSelected,
    dataRelation,
    handleDateTime
  };
};
