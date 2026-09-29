import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {allAppointmentThunk} from '../../../store/reducers/AppointmentSlice';
import {useIsFocused, useNavigation} from '@react-navigation/core';

export const useAppointment = () => {
  const appointments = useSelector(state => state.appointment.userAppointments);
  const homeRefresh = useSelector(state => state.appointment.homeRefresh);
  const focused = useIsFocused();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (navigation.isFocused()) {
      const isActive = 'false';
      dispatch(allAppointmentThunk({isActive}));
    }
  }, [homeRefresh, focused]);

  return {
    appointments,
    homeRefresh,
    goBack,
  };
};
