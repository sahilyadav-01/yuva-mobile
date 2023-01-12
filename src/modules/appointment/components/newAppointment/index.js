import React from 'react';
import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import { DateTimePicker } from '@hashiprobr/react-native-paper-datetimepicker';
import ActionButton from '../../../../components/ActionButton';
import { useSelector, useDispatch } from 'react-redux';
import {styles} from "./styles";
import MessageBox from '../../../../components/MessageBox';
import { useNew } from './hooks/useNew'
import { BOOK_AN_APPOINTMENT, DESCRIPTION } from '../../constant';
import { DARK_BLUE } from '../../../../styles/colors';

const NewAppointments = () => {

  const { doctorId, name, specialization } = useSelector(
    state => state.appointment.appointment,
  );
  
 const {goBack,
    signupFlag,
    signupMessage,
    newAppointment,
    onChangeDescription,
    closeMessageBox,
    handleDate,
    handleTime,
    date,
    time}=useNew();
 
  return (
    <ScrollView className="flex mr-2 ml-2 h-[800px]">
      <GoBackCross className="mt-4" onPress={goBack} />
      <Text className="text-bold text-lg ml-4 text-[#44576A]">{BOOK_AN_APPOINTMENT}</Text>

      <TextInput
        className="h-[50px] mr-[30px] ml-[30px] mt-[20px] rounded shadow-2xl pl-2 pb-0 pt-1 text-sm"
        placeholder={name == undefined || '' ? 'Doctor' : name}
        editable={false}
      />

      <TextInput
        multiline={true}
        className="h-[50px] mr-[30px] ml-[30px] mt-[20px] rounded shadow-2xl pl-2 pb-0 pt-1"
        placeholder={
          specialization == undefined || '' ? 'Specialization' : specialization
        }
        editable={false}
      />

      <TextInput
      style={styles.lineStyle}
         multiline={true}
        className="h-[100px] mr-[30px] ml-[30px] mt-[20px] "
        placeholder={DESCRIPTION}
        onChangeText={onChangeDescription}
        
      />

      {/* Date */}
      <View className="mt-[10px] ml-[30px] mr-[30px]">
        <Text>Date</Text>
        <DateTimePicker
          type="date"
          value={date}
          onChangeDate={handleDate}
          style={styles.dateTimePicker}
          selectionColor={DARK_BLUE}
          theme={styles.theme}
          minimumDate={new Date()}
        />
      </View>

      <View className="mt-[10px] ml-[30px] mr-[30px]">
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

      <ActionButton onPress={newAppointment} name="Book Appointment" />
      <MessageBox
        head="Message"
        showDialog={signupFlag}
        hideDialog={closeMessageBox}
        message={signupMessage}
      />
    </ScrollView>
  );
};

export default NewAppointments;
