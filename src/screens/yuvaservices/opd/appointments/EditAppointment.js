import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import {useNavigation} from '@react-navigation/core';
import AppointmentInput from '../../../../components/AppointmentInput';
import AppointmentInputText from '../../../../components/AppointmentInputText';
import AppointmentButton from '../../../../components/AppointmentButton';
import {DateTimePicker} from '@hashiprobr/react-native-paper-datetimepicker';
import {useSelector, useDispatch} from 'react-redux';
import {
  cancelAppointmentThunk,
  allAppointmentThunk,
  rescheduleAppointmentThunk,
} from '../../../../store/reducers/AppointmentSlice';
import MessageBox from '../../../../components/MessageBox';
import {getEpoch, getDateObject} from '../../../../utils/utils';

const EditAppointment = () => {
  /**
   * State
   */

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

  const [date, setDate] = useState(getDateObject(slot));
  const [time, setTime] = useState(getDateObject(slot));
  const [cancelFlag, setCancelFlag] = useState(false);
  const [saveFlag, setSaveFlag] = useState(false);

  const cancelMessage = 'Are you sure you want to cancel ?';
  const saveMessage = 'Rescheduled appointment';

  /**
   * Hooks
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   * Handlers
   */
  const goBack = () => {
    navigation.goBack();
  };

  const saveAppointment = () => {
    dispatch(
      rescheduleAppointmentThunk({timeSlot: getEpoch(date, time), id, jwt}),
    ).then(() => {
      setSaveFlag(true);
    });
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

  const closeSaveMessageBox = () => {
    setSaveFlag(false);
    dispatch(allAppointmentThunk({jwt})).then(
      navigation.navigate('AppointmentHome'),
    );
  };

  const handleDate = date => {
    setDate(date);
  };

  const handleTime = time => {
    setTime(time);
  };

  return (
    <View className="flex mr-2 ml-2 h-[800px]">
      <GoBackCross className="mt-4" onPress={goBack} />
      <Text className="text-bold text-lg ml-4">Edit Appointment</Text>

      <AppointmentInput text="Doctor" defValue={doctorName} />
      <AppointmentInput text="Specialization" defValue={speciality} />
      <AppointmentInputText text="Description" defValue={description} />

      {/* Date */}
      <View className="mt-[10px] mx-[15px]">
        <Text>Date</Text>
        <DateTimePicker
          type="date"
          value={date}
          onChangeDate={handleDate}
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderRadius: 8,
            height: 45,
          }}
          selectionColor="#1D2334"
          theme={{colors: {text: 'black'}}}
        />
      </View>

      <View className="mt-[10px] mx-[15px]">
        <Text>Time</Text>
        <DateTimePicker
          type="time"
          value={time}
          onChangeDate={handleTime}
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderRadius: 8,
            height: 45,
          }}
          selectionColor="#1D2334"
          theme={{colors: {text: 'black'}}}
        />
      </View>

      <View className="">
        <AppointmentButton
          name="Save"
          color="#E68D36"
          action={saveAppointment}
        />
        <AppointmentButton
          name="Cancel"
          color="#B7AC8F"
          action={cancelAppointment}
        />
      </View>
      <MessageBox
        head="Message"
        showDialog={cancelFlag}
        hideDialog={cancelAppointmentMessagBox}
        message={cancelMessage}
      />
      <MessageBox
        head="Message"
        showDialog={saveFlag}
        hideDialog={closeSaveMessageBox}
        message={saveMessage}
      />
    </View>
  );
};

export default EditAppointment;
