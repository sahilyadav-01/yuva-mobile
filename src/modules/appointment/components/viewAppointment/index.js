import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppointmentButton from '../../../../components/AppointmentButton';
import {getDate, getTime, appointmentStatus} from '../../../../utils/utils';
import MessageBox from '../../../../components/MessageBox';
import {useSelector} from 'react-redux';
import {useView} from './hooks/useView';
import {CANCEL, CHECK, RESCHEDULE, WAITING} from '../../constant';
import {ORANGE, RED_SHADE, WHITE} from '../../../../styles/colors';
import {styles} from './styles';
import {OPD_DESCRIPTION} from './constant';
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
      <ScrollView>
        <View>
          <View style={styles.viewCont}>
            <View>
              {status === 'CONFIRMED' ? (
                <Text className="text-lg font-bold text-[#319B4B]">
                  {appointmentStatus(status)}
                </Text>
              ) : (
                <View>
                  <Text style={styles.StatusStyle}>
                    {appointmentStatus(status)}
                  </Text>
                  <Text
                    className="text-x mt-[20px] text-[#E68D36]"
                    style={styles.waitStyle}>
                    {WAITING}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.timeSlot}>
              <View style={styles.direction}>
                <Icon name="calendar-blank-outline" size={24} color="white" />
                <View className="ml-[2px]">
                  <Text style={styles.numberSytle}>{getDate(slot)}</Text>
                  <Text style={styles.numberSytle}>{getTime(slot)}</Text>
                </View>
              </View>
            </View>
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

          <View className="mt-[25px]">
            {status === 'CONFIRMED' ? (
              <AppointmentButton name={CHECK} color={ORANGE} action={checkIn} />
            ) : (
              <AppointmentButton
                name={RESCHEDULE}
                color={WHITE}
                action={editAppointment}
              />
            )}
            <AppointmentButton
              name={CANCEL}
              color={RED_SHADE}
              action={cancelAppointment}
            />
          </View>
          <View>
            <MessageBox
              head="Message"
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
