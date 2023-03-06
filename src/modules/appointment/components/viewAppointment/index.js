import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppointmentButton from '../../../../components/AppointmentButton';
import {
  getDate,
  getTime,
  appointmentStatus,
  splitCustomId,
} from '../../../../utils/utils';
import MessageBox from '../../../../components/MessageBox';
import {useSelector} from 'react-redux';
import {useView} from './hooks/useView';
import {CANCEL, CHECK, MESSAGE, RESCHEDULE, WAITING} from '../../constant';
import {
  AMBER,
  GREEN,
  ORANGE,
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
  NAME,
  OPD_DESCRIPTION,
  RELATION,
  MYSELF,
} from './constant';
import {PNG} from '../../../../../assets';
const ViewAppointments = () => {
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
    memberName,
    relation,
    customId,
    patientNumber,
  } = useSelector(state => state.appointment.currentAppointment);
  const cancelMessage = 'Are you sure you want to cancel ?';
  const {
    goBack,
    editAppointment,
    checkIn,
    cancelAppointment,
    cancelAppointmentMessagBox,
    cancelFlag,
  } = useView();
  return (
    <View>
      <GoBackCross className="mt-4" onPress={goBack} />
      <ScrollView contentContainerStyle={styles.ScrollViewContainerStyle}>
        <View>
          <View style={styles.viewCont}>
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
                  <View style={styles.timeSlot}>
                    <View style={styles.direction}>
                      <Icon
                        name="calendar-blank-outline"
                        size={24}
                        color={WHITE}
                      />
                      <View>
                        <Text style={styles.numberSytle}>{getDate(slot)}</Text>
                        <Text style={styles.numberSytle}>{getTime(slot)}</Text>
                      </View>
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
                  <View>
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
          </View>
          <View style={styles.description1}>
            <Text style={styles.Header}>{BOOKING_FOR}</Text>
          </View>
          <View style={styles.familyView}>
            <Text
              style={[styles.FamilyName, {color: memberName ? null : ORANGE}]}>
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
              <Image source={PNG.ICON} style={styles.Image} />
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
                color={AMBER}
                action={checkIn}
                extraStyles={styles.buttonStyleDetails}
                textStyles={styles.buttonTextStyle}
                checkIn={true}
              />
            )}
            {status === INITIATED && (
              <AppointmentButton
                name={RESCHEDULE}
                color={AMBER}
                action={editAppointment}
                extraStyles={styles.buttonStyleDetails}
                textStyles={styles.buttonTextStyle}
                reschedule={true}
              />
            )}
            {(status === CONFIRMED || status === INITIATED) && (
              <AppointmentButton
                name={CANCEL}
                color={RED_SHADE}
                action={cancelAppointment}
                extraStyles={styles.buttonStyleDetails}
                textStyles={styles.buttonTextStyle}
              />
            )}
          </View>
          <View>
            <MessageBox
              head={MESSAGE}
              showDialog={cancelFlag}
              hideDialog={cancelAppointmentMessagBox}
              message={cancelMessage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewAppointments;
