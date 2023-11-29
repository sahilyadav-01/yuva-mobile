import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import firebaseMessaging from '@react-native-firebase/messaging';
import {getExistingUser, getJwt, getProfileStatus, getRole} from '../../store/LocalStore';
import {YuvaService} from '../../network/yuvaService';
import {setRedirectState} from '../../store/reducers/NotificationSlice';
import {currentAppointment} from '../../store/reducers/AppointmentSlice';
import { cityIdThunk } from '../../store/reducers/DiagnosticsSlice';
import { checkRole, initialLoad, setLoginState } from '../../store/reducers/AuthSlice';
import { profileThunk, updateProfileStatus } from '../../store/reducers/ProfileSlice';

export const useIntro = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [initialRouteName, setInitialRouteName] = useState(null);
  const {loggedIn, isAppReady} = useSelector(state => state.auth);
  const {maintainence: maintainenceState} = useSelector(
    state => state?.maintainence,
  );
  useEffect(() => {
    getInitialRoute().then(initialRoute => setInitialRouteName(initialRoute));
    dispatch(profileThunk());
    dispatch(initialLoad());
    getProfileStatus().then(status => dispatch(updateProfileStatus(status)));
    firebaseMessaging()
      .getInitialNotification()
      .then(initialNotification => {
        console.log('Kill state notification', initialNotification);
      });
    firebaseMessaging().onNotificationOpenedApp(notification => {
      handleNotification(notification?.data ?? false);
    });
    firebaseMessaging().onMessage(notification => {
      console.log('Foreground notification', notification);
    });
  }, []);
  useEffect(() => {
    dispatch(cityIdThunk());
  }, [loggedIn]);
  getJwt().then(jwt => {
    if (jwt) {
      dispatch(setLoginState());
    }
  });
  getRole().then(role => {
    if (role && role === 'corporate') {
      dispatch(checkRole(true));
    }
  });
  const handleNotification = data => {
    switch ('APPOINTMENT') {
      case 'APPOINTMENT':
        let data = {id: 35};
        dispatch(setRedirectState(true));
        const endpoint = `/appointment/user/false`;
        YuvaService.get(endpoint)
          .then(resp => {
            const details = resp.data;
            const item = details.data.find(item => {
              if (item.id === data.id) return item;
            });
            dispatch(setRedirectState(false));
            dispatch(
              currentAppointment({
                id: item.id,
                doctorName: item.doctorName,
                address: item.address,
                status: item.status,
                speciality: item.speciality,
                description: item.description,
                slot: item.slot,
                otp: item.otp,
                hospitalName: item.hospitalName,
                relation: item.relation,
                memberName: item.memberName,
                customId: item.customId,
              }),
            );
            navigation.navigate('HomeScreen', {
              screen: 'HomeDrawer',
              params: {
                screen: 'Home',
                params: {
                  screen: 'OPD',
                  params: {
                    screen: 'Appointments',
                    params: {screen: 'ViewAppointment'},
                  },
                },
              },
            });
          })
          .catch(() => dispatch(setRedirectState(false)));
        break;
    }
  };
  const getInitialRoute = async () => {
    const existingUser = await getExistingUser();
    if (existingUser) return 'HomeScreen';
    return 'IntroScreen';
  };
  return {initialRouteName, isAppReady, maintainenceState};
};
