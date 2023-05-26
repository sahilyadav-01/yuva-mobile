import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {resetAppointments} from '../../../store/reducers/AppointmentSlice';
import {logoutThunk} from '../../../store/reducers/AuthSlice';

export const useDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isEmployee} = useSelector(state => state.auth);
  const onSubscriptionPress = () => {};
  const onReportsPress = () => navigation.navigate('ReportsScreen');
  const onOrdersPress = () => navigation.navigate('PurchaseScreen');
  const onPrescriptionsPress = () => navigation.navigate('MyPrescription');
  const onCorporateProgramPress = () => navigation.navigate('MyCorporateProgram');
  const onLogoutPress = () => {
    dispatch(logoutThunk());
    dispatch(resetAppointments());
    navigation.dispatch(DrawerActions.closeDrawer())
  };
  return {onSubscriptionPress, onReportsPress, onOrdersPress, onLogoutPress, onPrescriptionsPress, isEmployee, onCorporateProgramPress};
};
