import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import firebaseMessaging from '@react-native-firebase/messaging';
import {
  getExistingUser,
  getJwt,
  getProfileStatus,
  getRole,
} from '../../store/LocalStore';
import {YuvaService} from '../../network/yuvaService';
import {setRedirectState} from '../../store/reducers/NotificationSlice';
import {currentAppointment} from '../../store/reducers/AppointmentSlice';
import {
  bookedDetailsByIdThunk,
  cityIdThunk,
} from '../../store/reducers/DiagnosticsSlice';
import {
  checkRole,
  initialLoad,
  setLoginState,
} from '../../store/reducers/AuthSlice';
import {
  profileThunk,
  updateProfileStatus,
} from '../../store/reducers/ProfileSlice';

export const useIntro = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [initialRouteName, setInitialRouteName] = useState(null);
  const {loggedIn, isAppReady} = useSelector(state => state.auth);
  const {redirectLoading} = useSelector(state => state.notification);
  const {maintainence: maintainenceState} = useSelector(
    state => state?.maintainence,
  );
  const {apiError, bookedDetailsById, loading} = useSelector(
    state => state?.diagnostic,
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

  useEffect(() => {
    if (
      !loading &&
      !apiError &&
      bookedDetailsById &&
      Object.keys(bookedDetailsById).length > 0 &&
      redirectLoading
    ) {
      dispatch(setRedirectState(false));
      navigation.navigate('HomeScreen', {
        screen: 'HomeDrawer',
        params: {
          screen: 'Home',
          params: {
            screen: 'Diagnostics',
            params: {
              screen: 'RescheduleTestAndPackage',
              //params: {testBooked}
            },
          },
        },
      });
    }
  }, [loading, apiError, bookedDetailsById, redirectLoading]);

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
    switch ('HRA_REPORT') {
      case 'APPOINTMENT':
        dispatch(setRedirectState(true));
        YuvaService.get('/appointment/user/false')
          .then(resp => {
            const details = resp.data;
            const item = details.data.find(item => {
              if (item.id === data.id) return item;
              return {};
            });
            dispatch(setRedirectState(false));
            if (Object.keys(item).length > 0) {
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
            }
          })
          .catch(() => dispatch(setRedirectState(false)));
        break;
      case 'BOOKING':
        dispatch(setRedirectState(true));
        dispatch(bookedDetailsByIdThunk({id: data?.id, redirect: true}));
        break;
      case 'HRA_REPORT':
        navigation.navigate('HomeScreen', {
                screen: 'HomeDrawer',
                params: {
                  screen: 'My Reports',
                  params: {screen: 'HRA Reports',params: {id:49}},
                },
              });
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
