import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetAppointments} from '../../../store/reducers/AppointmentSlice';
import {logoutThunk} from '../../../store/reducers/AuthSlice';
import {SVG} from '../../../../assets';
import {Alert} from 'react-native';

export const useProfileDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = [
    {
      Icon: SVG.Profile,
      heading: 'Profile',
      description: 'Add or modify mobile Number, email, profile picture',
      onPress: () => navigation.navigate('Profile'),
    },
    {
      Icon: SVG.ManageAddress,
      heading: 'Saved Addresses',
      description: 'Add or modify addresses',
      onPress: () => {},
    },
    {
      Icon: SVG.ManageNotifications,
      heading: 'Manage Notifications',
      description: 'Manage how you want to receive important updates',
      onPress: () => {},
    },
    {
      Icon: SVG.Logout,
      heading: 'Log Out',
      description: 'Log out from your Account',
      onPress: () => onLogoutPress(),
    },
  ];
  const onLogoutPress = () => {
    Alert.alert('Logout', 'Are you sure want to Logout?', [
      {
        onPress: () => {
          dispatch(logoutThunk());
          dispatch(resetAppointments());
          navigation.dispatch(DrawerActions.closeDrawer());
          navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]});
        },
        text: 'Yes',
      },
      {text: 'Cancel', style: 'destructive'},
    ]);
  };
  return {
    onLogoutPress,
    data,
  };
};
