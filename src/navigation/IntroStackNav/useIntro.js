import {useEffect, useState} from 'react';
import { Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import firebaseMessaging from '@react-native-firebase/messaging';
import {
  getExistingUser,
  getJwt,
  getProfileStatus,
  getRole,
} from '../../store/LocalStore';
import {setRedirectState} from '../../store/reducers/NotificationSlice';
import {currentAppointment, setNotificationRedirect} from '../../store/reducers/AppointmentSlice';
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
import {setHraReportId} from '../../store/reducers/DownloadReportSlice';
import {YuvaService} from '../../../App';
import { setOurPlanData } from '../../store/reducers/ProgramAndPlanSlice';

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
    getInitialUrl();
    const linkingEvent = Linking.addEventListener('url',(event)=>event?.url && handleDeepLinking(event.url));
    firebaseMessaging()
      .getInitialNotification()
      .then(initialNotification => {
        handleNotification(initialNotification?.data ?? false);
      });
    firebaseMessaging().onNotificationOpenedApp(notification => {
      handleNotification(notification?.data ?? false);
    });
    return () => {
      linkingEvent.remove();
    }
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
    switch (data.enum) {
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
              dispatch(setNotificationRedirect(true));
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
        dispatch(setHraReportId(data.id));
        navigation.navigate('HomeScreen', {
          screen: 'HomeDrawer',
          params: {
            screen: 'My Reports',
            params: {screen: 'HRA Reports'},
          },
        });
        break;
      case 'PRESCRIPTION':
        navigation.navigate('HomeScreen', {
          screen: 'HomeDrawer',
          params: {
            screen: 'Home',
            params: {
              screen: 'PHARMACY',
              params: {
                screen: 'PharmacyListing',
                params: {prescriptionId:data?.id,pharmacyId:parseInt(data?.pharmacyId),redirect:true},
              },
            },
          },
        });
        break;
      case 'PRESCRIPTION_DOWNLOAD':
        navigation.navigate('MyPrescription', {
          prescriptionId: data.id,
          redirect: true,
          serviceUuid: data.serviceUuid, 
        });
        break;
    }
  };
  const getInitialRoute = async () => {
    const existingUser = await getExistingUser();
    if (existingUser) return 'HomeScreen';
    return 'IntroScreen';
  };
  const handleDeepLinking = (link) => {
    const pattern = /^(https?:\/\/)?(www\.)?yuvahealth\.in(\/(plan|test|package)\/([a-f0-9-]+(\/[a-zA-Z0-9]+)*))?\/?$/;
    const slugPattern = /^(https?:\/\/)?(www\.)?yuvahealth\.in\/(plan|test|package)\/([^\/]+)\/?$/;
    const slugPatternMatch = link.match(slugPattern);
    const match = link.match(pattern);
    if (match && match.length > 1 || slugPatternMatch && slugPatternMatch.length > 1) {
      if (match) {
        switch (match[4]) {
          case 'test':
            YuvaService.get(`/test/${match[5]}`).then(response => {
                navigation.navigate('ProductDetails', {
                  headerName: 'health',
                  packageName: '',
                  uuid: response.data.data.id,
                  showCartButton: true,
                  isTest: true,
                  name: null,
                  cost: '',
                });
            }).catch(()=>{navigation.navigate('PageNotFound', { data: "Test" })});
            break;
          case 'package':
            YuvaService.get(`/package/${match[5]}`).then(response => {
                navigation.navigate('ProductDetails', {
                  headerName: 'health',
                  packageName: response.data.data.packageUuid,
                  uuid: response.data.data.packageUuid,
                  showCartButton: true,
                  isTest: false,
                  name: null,
                  cost: response.data.data.packageCost,
                });
            }).catch(()=>{navigation.navigate('PageNotFound', { data: "Package" });});
            break;
          case 'plan':
            YuvaService.get(`/plan/popular`).then(response => {
              const planData = response.data.data.filter(item => item?.planUuid === match[5]);
              if(planData?.length > 0) {
              dispatch(setOurPlanData(planData[0]));
              navigation.navigate('OurPlan');
              }
              else if(planData?.length === 0) navigation.navigate('PageNotFound', { data: "Plan" })
          })
            break;
          default:
            navigation.navigate('HomeService');
            break;
        }
      }
      else if (slugPatternMatch) {
        switch (slugPatternMatch[3]) {
          case 'test':
            const splitParts = slugPatternMatch[4].split('-');
            const lastPart = splitParts[splitParts.length - 1];
            const slugTesttId = parseInt(lastPart);
            YuvaService.get(`/test/${slugTesttId}`).then(() => {
                navigation.navigate('ProductDetails', {
                  headerName: 'health',
                  packageName: '',
                  uuid: slugTesttId,
                  showCartButton: true,
                  isTest: true,
                  name: null,
                  cost: '',
                });
            }).catch(()=>{navigation.navigate('PageNotFound', { data: "Test" })});
            break;
          case 'package':
            const slugPackagetId = slugPatternMatch[4].slice(slugPatternMatch[4].length - 36);
            YuvaService.get(`/package/${slugPackagetId}`).then(() => {
                navigation.navigate('ProductDetails', {
                  headerName: 'health',
                  packageName: slugPackagetId,
                  uuid: slugPackagetId,
                  showCartButton: true,
                  isTest: false,
                  name: null,
                  cost: '',
                });
            }).catch(()=>{navigation.navigate('PageNotFound', { data: "Package" })});
            break;
          case 'plan':
            const slugPlainId = slugPatternMatch[4].slice(slugPatternMatch[4].length - 36);
            YuvaService.get(`/plan/popular`).then(response => {
              const planData = response.data.data.filter(
                item => item?.planUuid === slugPlainId,
              );
              if (planData?.length > 0) {
                dispatch(setOurPlanData(planData[0]));
                navigation.navigate('OurPlan');}
              else if(planData?.length === 0) { navigation.navigate('PageNotFound', { data: "Plan" }); }})
            break;
        }
      }
      else navigation.navigate('PageNotFound');
    }
    else navigation.navigate('PageNotFound');
  }
  const getInitialUrl = async () => {
    try {
      const link = await Linking.getInitialURL();
      if(link) handleDeepLinking(link);
    } catch (error) {
    }
  }
  return {initialRouteName, isAppReady, maintainenceState};
};
