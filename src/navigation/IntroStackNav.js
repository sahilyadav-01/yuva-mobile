import React, {useEffect, useState} from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {checkRole, initialLoad, setLoginState} from '../store/reducers/AuthSlice';
import IntroScreen from '../screens/Intro/IntroScreen';
import {getExistingUser, getJwt, getProfileStatus, getRole} from '../store/LocalStore';
import {
  profileThunk,
  updateProfileStatus,
} from '../store/reducers/ProfileSlice';
import { cityIdThunk, diagnosisPackageDetailsThunk, diagnosisTestDetailsThunk } from '../store/reducers/DiagnosticsSlice';
import DrawerNav from './DrawerNav';
import ReportNav from './ReportNav';
import MyPrescription from '../screens/MyPrescriptionScreen';
import MyCorporateProgram from '../screens/MyCorporateProgramScreen';
import PaymentNavigation from './PaymentNav';
import PurchaseNav from './PurchaseNav';
import BookingTestAndPackageScreen from '../screens/yuvaservices/diagnostics/BookingTestAndPackage';
import HomeSearchScreen from '../screens/HomeSearchScreen/HomeSearchScreen';
import HomeSearchDetailsScreen from '../screens/HomeSearchScreen/HomeSearchDetailsScreen';
import Maintenance from '../components/Maintenance';
import ProfileContent from '../screens/ProfileContent';
import ProfileNavigation from './ProfileNavigation';
import { planPopularThunk, setOurPlanData } from '../store/reducers/ProgramAndPlanSlice';
import PageNotFound from '../screens/yuvaservices/pageNotFound';

const Stack = createStackNavigator();

const IntroStackNav = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [initialRouteName, setInitialRouteName] = useState(null);
  const {loggedIn, isAppReady} = useSelector(state => state.auth);
  useEffect(() => {
    getInitialRoute().then(initialRoute => setInitialRouteName(initialRoute));
    dispatch(profileThunk());
    dispatch(initialLoad());
    getProfileStatus().then(status => dispatch(updateProfileStatus(status)));
    getInitialUrl();
    const linkingEvent = Linking.addEventListener('url',(event)=>event?.url && handleDeepLinking(event.url));
    return () => {
      linkingEvent.remove();
    }
  }, []);
  useEffect(()=>{
    dispatch(cityIdThunk());
  },[loggedIn])
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
  const {maintainence: maintainenceState} = useSelector(
    state => state?.maintainence,
  );
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
            dispatch(diagnosisTestDetailsThunk({ id: match[5] })).then(response => {
              if (response.payload.errorMessage != null) { navigation.navigate('PageNotFound', { data: "Test" }); }
              else {
                navigation.navigate('ProductDetails', {
                  headerName: 'health',
                  packageName: '',
                  uuid: match[7],
                  showCartButton: true,
                  isTest: true,
                  name: null,
                  cost: '',
                });
              }
            });
            break;
          case 'package':
            dispatch(diagnosisPackageDetailsThunk({ packageName: match[5] })).then(response => {
              if (response.payload.errorMessage != null) {
                navigation.navigate('PageNotFound', { data: "Package" });
              }
              else {
                navigation.navigate('ProductDetails', {
                  headerName: 'health',
                  packageName: '',
                  uuid: match[5],
                  showCartButton: true,
                  isTest: false,
                  name: null,
                  cost: '',
                });
              }
            });
            break;
          case 'plan':
            dispatch(planPopularThunk()).then(response => {
              const planData = response.payload.data.filter(
                item => item?.planUuid === match[5],
              )[0];
              if (planData) {
                dispatch(setOurPlanData(planData));
                navigation.navigate('OurPlan');
              }
              else { navigation.navigate('PageNotFound', { data: "Plan" }); }})
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
            dispatch(diagnosisTestDetailsThunk({ id: slugTesttId })).then(response => {
              if (response.payload.errorMessage != null) { navigation.navigate('PageNotFound', { data: "Test" }); }
              else {
                navigation.navigate('ProductDetails', {
                  headerName: 'health',
                  packageName: '',
                  uuid: slugTesttId,
                  showCartButton: true,
                  isTest: true,
                  name: null,
                  cost: '',
                });
              }
            });
            break;
          case 'package':
            const slugPackagetId = slugPatternMatch[4].slice(slugPatternMatch[4].length - 36);
            dispatch(diagnosisPackageDetailsThunk({ packageName: slugPackagetId })).then(response => {
              if (response.payload.errorMessage != null) {
                navigation.navigate('PageNotFound', { data: "Package" });
              }
              else {
                navigation.navigate('ProductDetails', {
                  headerName: 'health',
                  packageName: '',
                  uuid: slugPackagetId,
                  showCartButton: true,
                  isTest: false,
                  name: null,
                  cost: '',
                });
              }
            });
            break;
          case 'plan':
            const slugPlainId = slugPatternMatch[4].slice(slugPatternMatch[4].length - 36);
            dispatch(planPopularThunk()).then(response => {
              const planData = response.payload.data.filter(
                item => item?.planUuid === slugPlainId,
              )[0];
              if (planData) {
                dispatch(setOurPlanData(planData));
                navigation.navigate('OurPlan');}
              else { navigation.navigate('PageNotFound', { data: "Plan" }); }})
            break;
        }
      }
      else {
        navigation.navigate('PageNotFound');
      }
    }
    else {
      navigation.navigate('PageNotFound');
    }
  }
  const getInitialUrl = async () => {
    try {
      const link = await Linking.getInitialURL();
      if(link) handleDeepLinking(link);
    } catch (error) {
    }
  }
  if (maintainenceState) {
    return <Maintenance maintenanceText="App is under maintenance" />;
  }

  if (!isAppReady || !initialRouteName) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="HomeScreen"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeSearch"
        component={HomeSearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeSearchDetails"
        component={HomeSearchDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingTestAndPackage"
        component={BookingTestAndPackageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportsScreen"
        component={ReportNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyPrescription"
        component={MyPrescription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyCorporateProgram"
        component={MyCorporateProgram}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PurchaseScreen"
        component={PurchaseNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileContent"
        component={ProfileContent}
        options={{headerShown: false}}
      />
      <Stack.Screen
          name={'Profile'}
          component={ProfileNavigation}
          options={{headerShown: false}}
      />
      <Stack.Screen
        name={'PageNotFound'}
        component={PageNotFound}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default IntroStackNav;