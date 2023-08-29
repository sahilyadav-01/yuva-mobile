import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {checkRole, initialLoad, setLoginState} from '../store/reducers/AuthSlice';
import IntroScreen from '../screens/Intro/IntroScreen';
import {getExistingUser, getJwt, getProfileStatus, getRole} from '../store/LocalStore';
import {
  profileThunk,
  updateProfileStatus,
} from '../store/reducers/ProfileSlice';
import {cityIdThunk} from '../store/reducers/DiagnosticsSlice';
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

const Stack = createStackNavigator();

const IntroStackNav = () => {
  const dispatch = useDispatch();
  const [initialRouteName, setInitialRouteName] = useState(null);
  const {loggedIn, isAppReady} = useSelector(state => state.auth);
  useEffect(() => {
    getInitialRoute().then(initialRoute => setInitialRouteName(initialRoute));
    dispatch(profileThunk());
    dispatch(initialLoad());
    getProfileStatus().then(status => dispatch(updateProfileStatus(status)));
  }, []);
  useEffect(()=>{
    if(loggedIn === 'loggedIn') dispatch(cityIdThunk());
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
    </Stack.Navigator>
  );
};

export default IntroStackNav;
