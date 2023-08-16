import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {resetAppointments} from '../../../store/reducers/AppointmentSlice';
import {logoutThunk} from '../../../store/reducers/AuthSlice';
import {SVG} from '../../../../assets';

export const useDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isEmployee} = useSelector(state => state.auth);
  const data = [
    {
      Icon: SVG.Profile,
      heading: 'Profile',
      description:
        'Profile, Addresses, Notification, Add Member, Manage Notification',
      onPress: () => navigation.navigate('ProfileContent'),
    },
    {
      Icon: SVG.Reports,
      heading: 'My Reports',
      description: 'HRA Report and Diagnostic Report',
      onPress: () => {},
    },
    {
      Icon: SVG.Prescriptions,
      heading: 'My Prescription',
      description: 'Download all your Prescription',
      onPress: () => navigation.navigate('MyPrescription'),
    },
    {
      Icon: SVG.Bookings,
      heading: 'My Purchase',
      description: 'History of all test and plan purchase',
      onPress: () => {},
    },
    {
      Icon: SVG.CorporateProgram,
      heading: 'My Corporate Program',
      description: 'Add Member to lock your Program ',
      onPress: () => navigation.navigate('MyCorporateProgram',{isEmployee}),
    }
  ];
  const onSubscriptionPress = () => {};
  const onReportsPress = () => navigation.navigate('ReportsScreen');
  const onOrdersPress = () => navigation.navigate('PurchaseScreen');
  const onPrescriptionsPress = () => navigation.navigate('MyPrescription');
  const onCorporateProgramPress = () =>
    navigation.navigate('MyCorporateProgram');
  const onLogoutPress = () => {
    dispatch(logoutThunk());
    dispatch(resetAppointments());
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]});
  };
  return {
    onSubscriptionPress,
    onReportsPress,
    onOrdersPress,
    onLogoutPress,
    onPrescriptionsPress,
    isEmployee,
    onCorporateProgramPress,
    data
  };
};
