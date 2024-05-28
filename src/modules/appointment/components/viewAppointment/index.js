import React from 'react';
import {View, Text, TextInput, Image, ScrollView, SafeAreaView} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppointmentButton from '../../../../components/AppointmentButton';
import {
  appointmentStatus,
  splitCustomId,
  getDateInFormat,
} from '../../../../utils/utils';
import MessageBox from '../../../../components/MessageBox';
import {useSelector} from 'react-redux';
import {useView} from './hooks/useView';
import {CANCEL, CHECK, MESSAGE, RESCHEDULE, WAITING} from '../../constant';
import {
  BLACK,
  GREEN,
  LIGHT_PINK,
  MARINER,
  RED_SHADE,
  WHITE,
} from '../../../../styles/colors';
import {styles} from './styles';
import {
  APPOINTMENT_ID,
  BOOKING_FOR,
  CANCELLED,
  COMPLETED,
  CONFIRMED,
  FINISHED,
  INITIATED,
  OPD_DESCRIPTION,
  MYSELF,
  OPD_CONSULTATION,
  CANCEL_MESSAGE,
  RESCHEDULED,
} from './constant';
import {PNG} from '../../../../../assets';
import {useRoute} from '@react-navigation/native';
import Header from '../../../../components/Header';
const ViewAppointments = () => {
  const {
    doctorName,
    status,
    speciality,
    description,
    slot,
    hospitalName,
    memberName,
    relation,
    customId,
  } = useSelector(state => state.appointment.currentAppointment);

  const {
    editAppointment,
    checkIn,
    cancelAppointment,
    cancelAppointmentMessagBox,
    cancelFlag,
  } = useView();
  const route = useRoute();

  const headerShown = route?.params?.headerShown ?? false;
  return (
    <View style={styles.container}>
      {headerShown && <Header title={OPD_CONSULTATION} showBackButton={true} />}
      <ScrollView style={styles.ScrollViewContainerStyle}>
        <View>
          <View
            style={
              status === COMPLETED || status === CONFIRMED
                ? [styles.viewCont, styles.confirmStyle]
                : status === CANCELLED
                ? [styles.viewCont, styles.cancelledStyle]
                : styles.viewCont
            }>
            <View>
              {status === CANCELLED ||
              status === COMPLETED ||
              status === FINISHED ||
              status === CONFIRMED ? (
                <View style={styles.StatusBox}>
                  <View>
                    <Text
                      style={[
                        styles.statusBoxInitiated,
                        {color: status === CANCELLED ? RED_SHADE : GREEN},
                      ]}>
                      {appointmentStatus(status)}
                    </Text>
                    <View>
                      <Text style={styles.appoitmentid}>{APPOINTMENT_ID}</Text>
                      <Text style={styles.appoitmentidNumber}>
                        {splitCustomId(customId)}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.AppointmentId}>
                  <View>
                    <Text style={styles.StatusStyle}>
                      {appointmentStatus(status)}
                    </Text>
                    <Text style={styles.waitStyle}>{WAITING}</Text>
                  </View>
                  <View style={styles.appointmentId}>
                    <Text style={styles.AppointmentIdText}>
                      {APPOINTMENT_ID}
                    </Text>
                    <Text style={styles.customId}>
                      {splitCustomId(customId)}
                    </Text>
                  </View>
                </View>
              )}
            </View>
            {status !== INITIATED && (
              <View
                style={
                  status === CANCELLED
                    ? [styles.timeSlot, styles.cancelStatus]
                    : styles.timeSlot
                }>
                <View style={styles.direction}>
                  <Icon name="calendar-blank-outline" size={24} color={WHITE} />
                  <View>
                    <Text style={styles.numberSytle}>
                      {getDateInFormat(new Date(slot), 'dd mm')}
                    </Text>
                    <Text style={styles.numberSytle}>
                      {moment(new Date(slot)).format('hh:mm A')}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
          <View style={styles.description1}>
            <Text style={styles.Header}>{BOOKING_FOR}</Text>
          </View>
          <View
            style={
              relation
                ? styles.familyView
                : [styles.familyView, styles.childView]
            }>
            <Text
              style={[styles.FamilyName, {color: memberName ? BLACK : MARINER}]}>
              {memberName || MYSELF}
            </Text>
            {relation && <Text style={styles.RelationStyle}>{relation}</Text>}
          </View>

          <View style={styles.border}>
            <View>
              <View>
                <Text style={styles.HospName}>{hospitalName}</Text>
              </View>
            </View>
            <View style={styles.ImageStyle}>
              <Image source={PNG.ICON} style={styles.image} />
              <View>
                <Text style={styles.NameStyle}>{doctorName}</Text>
                <Text style={styles.ContentStyle}>{speciality}</Text>
              </View>
            </View>
          </View>

          <View style={styles.description}>
            <Text style={styles.Header}>{OPD_DESCRIPTION}</Text>
            <TextInput
              style={styles.textInputStyle}
              value={description}
              multiline={true}
              editable={false}
            />
          </View>

          <View style={styles.buttonStyle}>
            {status === CONFIRMED && (
              <AppointmentButton
                name={CHECK}
                color={GREEN}
                action={checkIn}
                extraStyles={styles.buttonStyleDetails}
                textStyles={styles.buttonTextStyle}
                checkIn={true}
              />
            )}
            {(status === INITIATED || status === RESCHEDULED) && (
              <AppointmentButton
                name={RESCHEDULE}
                color={GREEN}
                action={editAppointment}
                extraStyles={styles.buttonStyleDetails}
                textStyles={styles.buttonTextStyle}
                reschedule={true}
              />
            )}
            {(status === CONFIRMED || status === INITIATED || status === RESCHEDULED) && (
              <AppointmentButton
                name={CANCEL}
                color={LIGHT_PINK}
                action={cancelAppointment}
                extraStyles={styles.buttonStyleDetails}
                textStyles={[styles.buttonTextStyle, {color: WHITE}]}
              />
            )}
          </View>
          <View>
            <MessageBox
              head={MESSAGE}
              showDialog={cancelFlag}
              hideDialog={cancelAppointmentMessagBox}
              message={CANCEL_MESSAGE}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewAppointments;
