import React from 'react';
import {View, Text, TextInput, ScrollView, Image} from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import {DateTimePicker} from '@hashiprobr/react-native-paper-datetimepicker';
import ActionButton from '../../../../components/ActionButton';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import MessageBox from '../../../../components/MessageBox';
import {useNew} from './hooks/useNew';
import {BOOK_AN_APPOINTMENT} from '../../constant';
import {DARK_BLUE, LIGHT_MERCURY} from '../../../../styles/colors';
import SelectList from 'react-native-dropdown-select-list';
import {
  ADD_DESCRIPTION,
  BOOKING_FOR,
  BOOK_APPOINTMENT,
  CONTACT_NUMBER,
  DATE,
  DESC,
  MESSAGE,
  PATIENT_CONTACT_NUMBER,
  SELECT_DATE_TIME,
  SELECT_MEMBER,
  SELECT_MEMBER_HERE,
  TIME,
} from './constant';
import {useRoute} from '@react-navigation/native';

const NewAppointments = () => {
  const route = useRoute();
  const {Doctor, Specialization, plan, userVersion, uuid, version} =
    route.params;
  const {doctorId, name, specialization} = useSelector(
    state => state.appointment.appointment,
  );

  const {
    goBack,
    signupFlag,
    signupMessage,
    newAppointment,
    onChangeDescription,
    onChaneNumber,
    closeMessageBox,
    handleDate,
    handleTime,
    date,
    time,
    setSelected,
    dataRelation,
  } = useNew(plan, userVersion, uuid, version);

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
              selectionColor={LIGHT_MERCURY}
              theme={styles.theme}
              minimumDate={new Date()}
            />
          </View>
          <View style={styles.dateAndTime}>
            <Text style={styles.Time}>{TIME}</Text>
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
          <View style={styles.border}>
            <Text style={styles.ContentHeading}>{SELECT_MEMBER}</Text>
            <SelectList
              boxStyles={styles.boxStyles}
              defaultOption={{key: 'null', value: SELECT_MEMBER_HERE}}
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
              keyboardType={'numeric'}
              onChangeText={onChaneNumber}
            />
          </View>
        </View>
        <View>
          <ActionButton onPress={newAppointment} name={BOOK_APPOINTMENT} />
        </View>
        <MessageBox
          head={MESSAGE}
          showDialog={signupFlag}
          hideDialog={closeMessageBox}
          message={signupMessage}
        />
      </ScrollView>
    </View>
  );
};

export default NewAppointments;
