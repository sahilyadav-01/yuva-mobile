import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BookingTestAndPackage from '../../modules/diagnostic/BookingTestAndPackage';
import Diagnostics from '../../screens/yuvaservices/diagnostics/Diagnostics';
import DiagnosticsNavigation from './DiagnosticTab';
import RescheduleTestAndPackage from '../../screens/yuvaservices/diagnostics/RescheduleTestAndPackage';
import GuestOPD from '../../screens/yuvaservices/opd/guestOPD/staticOPD';
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
        name="BookingTestAndPackage"
        component={BookingTestAndPackage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RescheduleTestAndPackage"
        component={RescheduleTestAndPackage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DiagnosticNav;
