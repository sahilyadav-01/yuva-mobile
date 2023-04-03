import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { initialLoad } from '../store/reducers/AuthSlice';
import IntroScreen from '../screens/Intro/IntroScreen';
import { getExistingUser, getProfileStatus } from '../store/LocalStore';
import { updateProfileStatus } from '../store/reducers/ProfileSlice';
import { cityIdThunk } from '../store/reducers/DiagnosticsSlice';
import CartNavigation from './CartNavigation';
import DrawerNav from './DrawerNav';
import ReportNav from './ReportNav';
import MyPrescription from '../screens/MyPrescriptionScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentNavigation from './PaymentNav';
import PurchaseNav from './PurchaseNav';

const Stack = createStackNavigator();

const IntroStackNav = () => {
  const dispatch = useDispatch();
  const [initialRouteName, setInitialRouteName] = useState(null);
  useEffect(() => {
    getInitialRoute().then(initialRoute => setInitialRouteName(initialRoute))
    dispatch(initialLoad())
    dispatch(cityIdThunk());
    getProfileStatus().then((status)=>
      dispatch(updateProfileStatus(status)))
  }, []);
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