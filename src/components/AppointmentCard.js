import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardButton from './CardButton';
import {currentAppointment} from '../store/reducers/AppointmentSlice';
import {
  getTime,
  appointmentStatus,
  getDateInFormat,
  getTimeInFormat,
} from '../utils/utils';
import {resetTabBarVisible} from '../store/reducers/DoctorSlice';
import {styles} from './styles';
import {BLACK, DULL_BLACK, GREEN, NAVY_BLUE, RED_SHADE} from '../styles/colors';
import {
  CALENDAR,
  CANCEL_APPOINTMENT,
  CLOCK_OUTLINE,
  CLOSE,
  MAP_POINTER,
  RESCHEDULE,
} from './constants';

const AppointmentCard = ({
  id,
  doctorName,
  address,
  status,
  speciality,
  description,
  slot,
  otp,
  hospitalName,
  relation,
  memberName,
  customId,
}) => {
  /**
   * Use navigation
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   * Handlers
   */
  const viewAppointment = () => {
    dispatch(resetTabBarVisible(false));
    dispatch(
      currentAppointment({
        id,
        doctorName,
        address,
        status,
        speciality,
        description,
        slot,
        otp,
        hospitalName,
        relation,
        memberName,
        customId,
      }),
    );
    navigation.navigate('ViewAppointment', {headerShown: false});
  };

  return (
    <View>
      <TouchableOpacity
        onPress={viewAppointment}
        style={
          status === 'CANCELLED'
            ? [styles.containerView, {backgroundColor: DULL_BLACK}]
            : styles.containerView
        }>
        <View style={styles.totalView}>
          <View style={styles.leftView}>
            <Text
              style={
                status === 'FINISHED' ||
                status === 'COMPLETED' ||
                status === 'CONFIRMED'
                  ? [styles.statusText, {color: GREEN}]
                  : status === 'CANCELLED'
                  ? [styles.statusText, {color: RED_SHADE}]
                  : styles.statusText
              }>
              {appointmentStatus(status)}
            </Text>
            <View style={styles.HospitalViewStyle}>
              <View style={styles.HospNameStyle}>
                <Text style={styles.HospNameText}>{hospitalName}</Text>
                <Icon name={MAP_POINTER} style={styles.LocationStyle} />
              </View>
              <Text style={styles.DescriptionText}>
                {description === undefined ? '' : description.slice(0, 20)}
              </Text>
            </View>
          </View>

          {/* right view */}
          <View style={styles.rightView}>
            <View style={styles.rightSubView}>
              <Text style={styles.doctorNameText}>{doctorName}</Text>
              <Text style={styles.doctorSpecialityText}>{speciality}</Text>
            </View>
            <View style={styles.CalView}>
              <Icon name={CALENDAR} style={styles.CalenderStyle} />
              <View>
                <Text style={styles.dateAndTimeStyle}>
                  {getDateInFormat(new Date(slot), 'dd mm')}
                </Text>
                <Text style={styles.dateAndTimeStyle}>{getTime(slot)}</Text>
              </View>
            </View>
          </View>

          {/* actions */}
        </View>
        {(status === 'INITIATED' ||
          status === 'RESCHEDULED' ||
          status === 'CONFIRMED') && (
          <View style={styles.ButtonStyle}>
            <CardButton
              text={RESCHEDULE}
              iconName={CLOCK_OUTLINE}
              iconColor={NAVY_BLUE}
            />
            <CardButton
              text={CANCEL_APPOINTMENT}
              iconName={CLOSE}
              iconColor={RED_SHADE}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppointmentCard;
