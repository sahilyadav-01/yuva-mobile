import React from 'react';
import { View, Text } from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import AppointmentInput from '../../../../components/AppointmentInput';
import AppointmentInputText from '../../../../components/AppointmentInputText';
import AppointmentButton from '../../../../components/AppointmentButton';
import { DateTimePicker } from '@hashiprobr/react-native-paper-datetimepicker';
import { useSelector } from 'react-redux';
import { useEdit } from './hooks/useEdit';
import { DESCRIPTION, DOCTOR, RESCHEDULE_APPOINTMENT, SPECIALIZATION } from '../../constant';
import { styles } from './styles';
import { DARK_BLUE, ORANGE } from '../../../../styles/colors';

const EditAppointments = () => {

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
const {goBack,
    saveAppointment,
    closeSaveMessageBox,
    handleDate,
    handleTime,
    date,
    time}=useEdit();
  return (
    <View className="flex mr-2 ml-2 h-[800px]">
      <GoBackCross className="mt-4" onPress={goBack} />
      <Text className="text-bold text-lg ml-4">{RESCHEDULE_APPOINTMENT}</Text>
      <AppointmentInput text={DOCTOR} defValue={doctorName} />
      <AppointmentInput text={SPECIALIZATION} defValue={speciality} />
      <AppointmentInputText text={DESCRIPTION} defValue={description} />
      <View className="mt-[10px] mx-[15px]">
        <Text>Date</Text>
        <DateTimePicker
          type="date"
          value={date}
          onChangeDate={handleDate}
          style={styles.dateTimePicker}
          selectionColor={DARK_BLUE}
          theme={styles.theme}
        />
      </View>

      <View className="mt-[10px] mx-[15px]">
        <Text>Time</Text>
        <DateTimePicker
          type="time"
          value={time}
          onChangeDate={handleTime}
          style={styles.dateTimePicker}
          selectionColor={DARK_BLUE}
          theme={styles.theme}
        />
      </View>

      <View className="">
        <AppointmentButton
          name="Save"
          color={ORANGE}
          action={saveAppointment}
        />
       
      </View>
     
    </View>
  );
};

export default EditAppointments;
