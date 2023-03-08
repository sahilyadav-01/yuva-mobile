import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetAppointments} from '../../../store/reducers/AppointmentSlice';
import {logoutThunk} from '../../../store/reducers/AuthSlice';

export const useDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onSubscriptionPress = () => {};
  const onReportsPress = () => {};
  const onOrdersPress = () => {};
  const onLogoutPress = () => {
    dispatch(logoutThunk());
    dispatch(resetAppointments());
    navigation.dispatch(DrawerActions.closeDrawer())
  };
  return {onSubscriptionPress, onReportsPress, onOrdersPress, onLogoutPress};
};
