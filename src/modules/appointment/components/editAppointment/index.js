import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import AppointmentButton from '../../../../components/AppointmentButton';
import {useEdit} from './hooks/useEdit';
import SelectList from 'react-native-dropdown-select-list';
import {BOOK_AN_APPOINTMENT, RESCHEDULE_APPOINTMENT} from '../../constant';
import {PNG} from '../../../../../assets';
import {styles} from './styles';
import {DARK_GRAY, MARINER} from '../../../../styles/colors';
import {
  ADD_DESCRIPTION,
  BOOKING_FOR,
  DATE,
  DESC,
  PATIENT_CONTACT_NUMBER,
  SELECT_DATE_TIME,
  SELECT_MEMBER,
  TIME,
} from './constant';
import CustomDatePicker from '../../../../components/CustomDatePicker';

const EditAppointments = () => {
  const {
    saveAppointment,
    setSelected,
    dataRelation,
    getAppointment,
    memberName,
    Doctor,
    Specialization,
    Description,
    handleDateTime
  } = useEdit();
  return (
    <ScrollView>
      <View>
        <Text style={styles.TitleStyle}>{BOOK_AN_APPOINTMENT}</Text>

        <View style={styles.border}>
          <View style={styles.ImageStyle}>
            <Image source={PNG.ICON} style={styles.Image} />
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
        <CustomDatePicker onDateTimeSelect={handleDateTime} OPD={true}/>
        <View>
          <Text style={styles.TitleStyle}>{BOOKING_FOR}</Text>
          <View style={styles.border} pointerEvents="none">
            <Text style={styles.ContentHeading}>{SELECT_MEMBER}</Text>
            <SelectList
              boxStyles={styles.boxStyles}
              defaultOption={{key: 'null', value: memberName || null}}
              setSelected={setSelected}
              data={dataRelation}
              dropdownStyles={styles.dropStyles}
              inputStyles={styles.valueStyle}
              dropdownTextStyles={{color:DARK_GRAY}}
            />
          </View>
        </View>
        <View>
          <Text style={styles.TitleStyle}>{PATIENT_CONTACT_NUMBER}</Text>
          <View style={styles.border}>
            <Text style={styles.inputTextStyle}>
              {getAppointment?.patientNumber}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonStyles}>
        <AppointmentButton
          name={RESCHEDULE_APPOINTMENT}
          color={MARINER}
          action={saveAppointment}
          textStyles={styles.buttonTextStyle}
        />
      </View>
    </ScrollView>
  );
};

export default EditAppointments;
