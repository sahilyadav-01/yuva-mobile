import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { useIntro } from './useIntro';
import IntroScreen from '../../screens/Intro/IntroScreen';
import DrawerNav from '../DrawerNav';
import ReportNav from '../ReportNav';
import MyPrescription from '../../screens/MyPrescriptionScreen';
import MyCorporateProgram from '../../screens/MyCorporateProgramScreen';
import PaymentNavigation from '../PaymentNav';
import PurchaseNav from '../PurchaseNav';
import BookingTestAndPackageScreen from '../../screens/yuvaservices/diagnostics/BookingTestAndPackage';
import HomeSearchScreen from '../../screens/HomeSearchScreen/HomeSearchScreen';
import HomeSearchDetailsScreen from '../../screens/HomeSearchScreen/HomeSearchDetailsScreen';
import Maintenance from '../../components/Maintenance';
import ProfileContent from '../../screens/ProfileContent';
import ProfileNavigation from '../ProfileNavigation';

const Stack = createStackNavigator();

const IntroStackNav = () => {
  const {isAppReady,maintainenceState,initialRouteName} = useIntro();
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
