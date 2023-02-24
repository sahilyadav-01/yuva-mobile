import React, {useEffect} from 'react';
import {View, Text, ScrollView, TextInput, Image} from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import AppointmentInput from '../../../../components/AppointmentInput';
import AppointmentInputText from '../../../../components/AppointmentInputText';
import AppointmentButton from '../../../../components/AppointmentButton';
import {DateTimePicker} from '@hashiprobr/react-native-paper-datetimepicker';
import {useSelector} from 'react-redux';
import {useEdit} from './hooks/useEdit';
import SelectList from 'react-native-dropdown-select-list';
import {
  BOOK_AN_APPOINTMENT,
  DESCRIPTION,
  DOCTOR,
  RESCHEDULE_APPOINTMENT,
  SPECIALIZATION,
} from '../../constant';
import {styles} from './styles';
import {DARK_BLUE, ORANGE} from '../../../../styles/colors';
import {
  ADD_DESCRIPTION,
  BOOKING_FOR,
  CONTACT_NUMBER,
  DATE,
  DESC,
  PATIENT_CONTACT_NUMBER,
  SELECT_DATE_TIME,
  SELECT_MEMBER,
  SELECT_MEMBER_HERE,
  TIME,
} from './constant';
import {useRoute} from '@react-navigation/native';
const EditAppointments = () => {
  const route = useRoute();
  const {
    Doctor,
    Specialization,
    hospital,
    Description,
    memberName,
    patientNumber,
  } = route?.params;

  const {
    goBack,
    saveAppointment,
    closeSaveMessageBox,
    handleDate,
    handleTime,
    date,
    onChangeDescription,
    setSelected,
    dataRelation,
    onChaneNumber,
    time,
    getAppointment,
  } = useEdit();

  return (
    <ScrollView contentContainerStyle={styles.ScrollViewContainerStyle}>
      <View className="flex mr-2 ml-2 h-[800px]">
        <GoBackCross onPress={goBack} />
        <Text style={styles.TitleStyle}>{BOOK_AN_APPOINTMENT}</Text>

        <View style={styles.border}>
          <View style={styles.ImageStyle}>
            <Image
              source={require('../../../../../assets/icon.png')}
              style={styles.Image}
            />
            <View>
              <Text style={styles.NameStyle}>{Doctor}</Text>
              <Text style={styles.ContentStyle}>{Specialization}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.TitleStyle}>{ADD_DESCRIPTION}</Text>
        <View style={styles.border}>
          <Text style={styles.Description}>{DESC}</Text>
          <Text style={styles.textInputStyle}>{Description}</Text>
        </View>

        <Text style={styles.TitleStyle}>{SELECT_DATE_TIME}</Text>
        <View style={styles.border}>
          <View style={styles.dateAndTime}>
            <Text style={styles.Date}>{DATE}</Text>
            <DateTimePicker
              type={DATE}
              value={date}
              onChangeDate={handleDate}
              style={styles.dateTimePicker}
              selectionColor={DARK_BLUE}
              theme={styles.theme}
              minimumDate={new Date()}
            />
          </View>

          <View style={styles.dateAndTime}>
            <Text tyle={styles.Time}>{TIME}</Text>
            <DateTimePicker
              type={TIME}
              value={time}
              onChangeDate={handleTime}
              style={styles.dateTimePicker}
              selectionColor={DARK_BLUE}
              theme={styles.theme}
            />
          </View>
        </View>

        <View>
          <Text style={styles.TitleStyle}>{BOOKING_FOR}</Text>
          <View style={styles.border} pointerEvents="none">
            <Text style={styles.ContentHeading}>{SELECT_MEMBER}</Text>
            <SelectList
              boxStyles={styles.boxStyles}
              defaultOption={{key: 'null', value: memberName || null}}
              setSelected={setSelected}
              data={dataRelation}
            />
          </View>
        </View>
        <View>
          <Text style={styles.TitleStyle}>{PATIENT_CONTACT_NUMBER}</Text>
          <View style={styles.border}>
            <Text style={styles.TitleStyle}>
              {getAppointment?.patientNumber}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonStyles}>
        <AppointmentButton
          name={RESCHEDULE_APPOINTMENT}
          color={ORANGE}
          action={saveAppointment}
          textStyles={styles.buttonTextStyle}
        />
      </View>
    </ScrollView>
  );
};

export default EditAppointments;
