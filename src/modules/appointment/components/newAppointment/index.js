import React from 'react';
import {View, Text, TextInput, ScrollView, Alert, Image} from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import {DateTimePicker} from '@hashiprobr/react-native-paper-datetimepicker';
import ActionButton from '../../../../components/ActionButton';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import MessageBox from '../../../../components/MessageBox';
import {useNew} from './hooks/useNew';
import {BOOK_AN_APPOINTMENT, DESCRIPTION} from '../../constant';
import {DARK_BLUE} from '../../../../styles/colors';
import SelectList from 'react-native-dropdown-select-list';
import {
  ADD_DESCRIPTION,
  BOOKING_FOR,
  CONTACT_NUMBER,
  DATE,
  DESC,
  PATIENT_CONTACT_NUMBER,
  SELECT_DATE_TIME,
  SELECT_MEMBER,
  TIME,
} from './constant';
import {useRoute} from '@react-navigation/native';

const NewAppointments = () => {
  const route = useRoute();
  const {Doctor, Specialization} = route.params;
  const {doctorId, name, specialization} = useSelector(
    state => state.appointment.appointment,
  );

  const {
    goBack,
    signupFlag,
    signupMessage,
    newAppointment,
    onChangeDescription,
    closeMessageBox,
    handleDate,
    handleTime,
    date,
    time,
    setSelected,
    dataRelation,
  } = useNew();

  return (
    <View>
      <ScrollView>
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
          <TextInput
            style={styles.textInputStyle}
            multiline={true}
            onChangeText={onChangeDescription}
          />
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
            <Text style={styles.Time}>{TIME}</Text>
            <DateTimePicker
              type="time"
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
          <View style={styles.border}>
            <Text style={styles.ContentHeading}>{SELECT_MEMBER}</Text>
            <SelectList
              boxStyles={styles.boxStyles}
              defaultOption={{key: 'null', value: 'Select Member Here'}}
              setSelected={setSelected}
              data={dataRelation}
            />
          </View>
        </View>
        <View>
          <Text style={styles.TitleStyle}>{PATIENT_CONTACT_NUMBER}</Text>
          <View style={styles.border}>
            <TextInput
              style={styles.textInputStyle}
              placeholder={CONTACT_NUMBER}
              onChangeText={onChangeDescription}
            />
          </View>
        </View>
        <View>
          <ActionButton onPress={newAppointment} name="Book Appointment" />
        </View>
        <MessageBox
          head="Message"
          showDialog={signupFlag}
          hideDialog={closeMessageBox}
          message={signupMessage}
        />
      </ScrollView>
    </View>
  );
};

export default NewAppointments;
