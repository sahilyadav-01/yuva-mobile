import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {resetAppointments} from '../../../store/reducers/AppointmentSlice';
import {logoutThunk} from '../../../store/reducers/AuthSlice';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {SVG} from '../../../../assets';

export const useDrawer = () => {
  const navigation = useNavigation();
  const {isEmployee} = useSelector(state => state.auth);
  const {userDetails:{name}} = useSelector(state => state.profile);
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
      onPress: () => navigation.navigate('ReportsScreen'),
    },
    {
      Icon: SVG.Prescriptions,
      heading: 'My Prescriptions',
      description: 'Download all your Prescription',
      onPress: () => navigation.navigate('MyPrescription'),
    },
    {
      Icon: SVG.Bookings,
      heading: 'My Purchases',
      description: 'History of all test and plan purchase',
      onPress: () => navigation.navigate('PurchaseScreen'),
    },
    {
      Icon: SVG.CorporateProgram,
      heading: 'My Corporate Programs',
      description: 'Add Member to lock your Program ',
      onPress: () => navigation.navigate('MyCorporateProgram',{isEmployee}),
    }
  ];
  return {
    data,
    name: name ?? null,
  };
};
