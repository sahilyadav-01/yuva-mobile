import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { checkRole, initialLoad } from '../store/reducers/AuthSlice';
import IntroScreen from '../screens/Intro/IntroScreen';
import { getExistingUser, getProfileStatus, getRole } from '../store/LocalStore';
import { profileThunk, updateProfileStatus } from '../store/reducers/ProfileSlice';
import { cityIdThunk } from '../store/reducers/DiagnosticsSlice';
import CartNavigation from './CartNavigation';
import DrawerNav from './DrawerNav';
import ReportNav from './ReportNav';
import MyPrescription from '../screens/MyPrescriptionScreen';
import MyCorporateProgram from '../screens/MyCorporateProgramScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentNavigation from './PaymentNav';
import PurchaseNav from './PurchaseNav';
;
import BookingTestAndPackageScreen from '../screens/yuvaservices/diagnostics/BookingTestAndPackage';
import HomeSearchScreen from '../screens/HomeSearchScreen/HomeSearchScreen';
import HomeSearchDetailsScreen from '../screens/HomeSearchScreen/HomeSearchDetailsScreen';

const Stack = createStackNavigator();

const IntroStackNav = () => {
  const dispatch = useDispatch();
  const [initialRouteName, setInitialRouteName] = useState(null);
  useEffect(() => {
    getInitialRoute().then(initialRoute => setInitialRouteName(initialRoute))
    dispatch(profileThunk());
    dispatch(initialLoad())
    dispatch(cityIdThunk());
    getProfileStatus().then((status)=>
      dispatch(updateProfileStatus(status)))
  }, []);
  getRole().then((role)=>{
    if(role && role==='corporate'){
      dispatch(checkRole(true));
    }
  })
  const { loggedIn, isAppReady } = useSelector(state => state.auth);
  const getInitialRoute = async () => {
    const existingUser = await getExistingUser();
    if (existingUser) return 'HomeScreen';
    return 'IntroScreen';
  };

  if (!isAppReady || !initialRouteName) {
    return null;
  };

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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartNavigation}
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
    </Stack.Navigator>
  );
};

export default IntroStackNav;