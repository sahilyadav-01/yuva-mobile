import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BookingTestAndPackageScreen from '../screens/yuvaservices/diagnostics/BookingTestAndPackage';
import Diagnostics from '../modules/diagnostic/index';
import RescheduleTestAndPackage from '../screens/yuvaservices/diagnostics/RescheduleTestAndPackage';
import BookingConfirmScreen from '../screens/yuvaservices/diagnostics/BookingConfirm';
import AddAddressScreen from '../screens/yuvaservices/diagnostics/AddAddressScreen';

const Stack = createStackNavigator();

const DiagnosticNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Diagnostic"
        component={Diagnostics}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="BookingConfirm"
        component={BookingConfirmScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="BookingTestAndPackage"
        component={BookingTestAndPackageScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RescheduleTestAndPackage"
        component={RescheduleTestAndPackage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewAddress"
        component={AddAddressScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DiagnosticNav;
