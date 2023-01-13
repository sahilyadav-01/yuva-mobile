import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ServiceContainer from '../components/ServiceContainer';
import DiagnosticNav from './Diagnosticnavigation';
import HRA from '../screens/yuvaservices/hra/HRA';

import ProfessionalServices from '../screens/yuvaservices/professionalservices/ProfessionalServices';
import HomeScreen from '../screens/HomeScreen';
import OPDNavigation from './OPDNavigation';
import HRANavigation from './HRANavigation';
import TalkToDoctorNavigation from './TalkToDoctorNavigation';

const Stack = createStackNavigator();
const ServicesNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeService"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OPD"
        component={OPDNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HRA"
        component={HRANavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Diagnostics"
        component={DiagnosticNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TalkToDoctor"
        component={TalkToDoctorNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfessionalServices"
        component={ProfessionalServices}
        options={{headerShown: false}}
      />    
    </Stack.Navigator>

  );
};

export default ServicesNav;
