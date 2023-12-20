import { useEffect } from 'react';
import {Alert} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {resetAppointments} from '../../../store/reducers/AppointmentSlice';
import {logoutThunk, resetLogout} from '../../../store/reducers/AuthSlice';
import {SVG} from '../../../../assets';

export const useProfileDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {logout} = useSelector(state=>state.auth)
  useEffect(()=>{
    if(logout){
      navigation.dispatch(DrawerActions.closeDrawer());
      dispatch(resetLogout());
      dispatch(resetAppointments());
      navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]});
    }
  },[logout])
  const data = [
    {
      Icon: SVG.Profile,
      heading: 'Profile',
      description: 'Add or modify mobile number, email, profile picture',
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
      description: 'Log out from your account',
      onPress: () => onLogoutPress(),
    },
    {
      Icon: SVG.Logout,
      heading: 'Log Out of all devices',
      description: 'Log out from all accounts',
      onPress: () => onLogoutPress(true),
    },
  ];
  const onLogoutPress = (logout) => {
    const logoutDevices = logout ?? false;
    Alert.alert('Logout', 'Are you sure want to logout from all devices?', [
      {
        onPress: () => {
          dispatch(logoutThunk(logoutDevices));
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
