import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import Backbutton from '../../../../components/Backbutton';
import {useNavigation} from '@react-navigation/core';
import GoBackCross from '../../../../components/GoBackCross';
// import { DateTimePicker } from '@hashiprobr/react-native-paper-datetimepicker';
import ActionButton from '../../../../components/ActionButton';
import {useSelector, useDispatch} from 'react-redux';
import {
  newAppointmentThunk,
  allAppointmentThunk,
} from '../../../../store/reducers/AppointmentSlice';
import MessageBox from '../../../../components/MessageBox';
import {getEpoch} from '../../../../utils/utils';

const NewAppointment = () => {
  /**
   * Hooks
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   * State
   */
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [description, setDesciption] = useState('');
  const [signupFlag, setSignupFlag] = useState(false);
  const [signupMessage, setSignupMessage] = useState();

  const {doctorId, name, specialization} = useSelector(
    state => state.appointment.appointment,
  );
  const {jwt} = useSelector(state => state.auth.user);

  /**
   * Handlers
   */
  const goBack = () => {
    navigation.goBack();
  };

  const newAppointment = () => {
    dispatch(
      newAppointmentThunk({
        description,
        epoch: getEpoch(date, time),
        doctorId,
        jwt,
      }),
    ).then(() => {
      setSignupFlag(true);
      setSignupMessage('Successfully Booked!');
    });
  };

  const onChangeDescription = txt => {
    setDesciption(txt);
  };

  const closeMessageBox = () => {
    setSignupFlag(false);
    dispatch(allAppointmentThunk({jwt})).then(
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

  return (
    <View className="flex mr-2 ml-2 h-[800px]">
      <GoBackCross className="mt-4" onPress={goBack} />
      <Text className="text-bold text-lg ml-4">New Appointment</Text>

      <TextInput
        style={{
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderRadius: 8,
          heigth: 50,
        }}
        className="h-[50px] mr-[30px] ml-[30px] mt-[20px] rounded shadow-2xl pl-2 pb-0 pt-1 text-sm"
        placeholder={name == undefined || '' ? 'Doctor' : name}
        editable={false}
      />

      <TextInput
        multiline={true}
        style={{backgroundColor: '#FFFFFF', borderWidth: 1, borderRadius: 8}}
        className="h-[50px] mr-[30px] ml-[30px] mt-[20px] rounded shadow-2xl pl-2 pb-0 pt-1"
        placeholder={
          specialization == undefined || '' ? 'Specialization' : specialization
        }
        editable={false}
      />

      <TextInput
        multiline={true}
        style={{backgroundColor: '#FFFFFF', borderWidth: 1, borderRadius: 8}}
        className="h-[100px] mr-[30px] ml-[30px] mt-[20px] rounded shadow-2xl pl-2 pb-0 pt-1"
        placeholder="Description"
        onChangeText={onChangeDescription}
      />

      {/* Date */}
      <View className="mt-[10px] ml-[30px] mr-[30px]">
        <Text>Date</Text>
        {/* <DateTimePicker
                    type="date"
                    value={date}
                    onChangeDate={handleDate}
                    style={{backgroundColor:"#FFFFFF", borderWidth:1, borderRadius:8}} 
                    selectionColor="#1D2334"
                    theme={{ colors: { text: "black" } }}
                /> */}
      </View>

      <View className="mt-[10px] ml-[30px] mr-[30px]">
        <Text>Time</Text>
        {/* <DateTimePicker
                    type="time"
                    value={time}
                    onChangeDate={handleTime}
                    style={{backgroundColor:"#FFFFFF", borderWidth:1, borderRadius:8}} 
                    selectionColor="#1D2334"
                    theme={{ colors: { text: "black" } }}
                /> */}
      </View>

      <ActionButton onPress={newAppointment} name="Book Appointment" />
      <MessageBox
        head="Message"
        showDialog={signupFlag}
        hideDialog={closeMessageBox}
        message={signupMessage}
      />
    </View>
  );
};

export default NewAppointment;
