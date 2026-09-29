import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  allAppointmentThunk,
  cancelAppointmentThunk,
  currentAppointment,
} from '../../../../../store/reducers/AppointmentSlice';
import {Alert} from 'react-native';

export const useAppointment = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    userAppointments,
    currentAppointment: {patientNumber},
    cancelCurrentAppointment,
  } = useSelector(state => state?.appointment);

  useEffect(() => {
    dispatch(allAppointmentThunk({isActive: true}));
  }, []);

  useEffect(() => {
    if (cancelCurrentAppointment) {
      dispatch(allAppointmentThunk({isActive: true}));
    }
  }, [cancelCurrentAppointment]);

  const onViewableItemsChanged = ({viewableItems}) => {
    if (route.name === 'HomeService') {
      const currentIndex =
        viewableItems[viewableItems?.length - 1]?.index ?? null;
      currentIndex !== null && setActiveIndex(currentIndex);
    }
  };

  const onAppointmentReschedule = item => {
    let name = 'Myself';
    let userRelation = 'Myself';
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
      relation,
      memberName,
      customId,
    } = item || {};
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
    if (relation && memberName) {
      userRelation = relation;
      userName = memberName;
    }
    const data = {
      hospital: hospitalName,
      Doctor: doctorName,
      Specialization: speciality,
      Description: description,
      memberName: name + '   |   ' + userRelation,
      patientNumber: patientNumber,
    };
    navigation.navigate('EditAppointment', data);
  };

  const onAppointmentCancel = ({id}) => {
    Alert.alert('Appointment', 'Are you sure want to cancel the appointment', [
      {text: 'OK', onPress: () => dispatch(cancelAppointmentThunk({id}))},
      {text: 'Cancel', style: 'cancel'},
    ]);
  };

  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 60,
  };

  return {
    activeIndex,
    userAppointments,
    viewabilityConfig,
    viewabilityConfigCallbackPairs,
    onAppointmentReschedule,
    onAppointmentCancel,
  };
};
