import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ServiceContainer from '../components/ServiceContainer';
import DiagnosticNav from './Diagnosticnavigation';

import ProfessionalServices from '../screens/yuvaservices/professionalservices/ProfessionalServices';
import HomeScreen from '../screens/HomeScreen/index';
import OPDNavigation from './OPDNavigation';
import HRANavigation from './HRANavigation';
import TalkToDoctorNavigation from './TalkToDoctorNavigation';
import Authentication from './Authentication';
import CashlessOPD from '../modules/staticOPD';
import {useSelector} from 'react-redux';
import StaticHra from '../modules/staticHRA';
import HealthCheckUP from '../modules/staticHealthCheckUp';
import TalkToDoctor from '../modules/staticDoctor';
import CartNavigation from './CartNavigation';

const Stack = createStackNavigator();

const ServicesNav = () => {
  const {
    auth: {loggedIn},
  } = useSelector(state => state);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeService"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OPD"
        component={loggedIn !== 'loggedIn' ? CashlessOPD : OPDNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HRA"
        component={loggedIn !== 'loggedIn' ? StaticHra : HRANavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Diagnostics"
        component={loggedIn !== 'loggedIn' ? HealthCheckUP : DiagnosticNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TalkToDoctor"
        component={
          loggedIn !== 'loggedIn' ? TalkToDoctor : TalkToDoctorNavigation
        }
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfessionalServices"
        component={ProfessionalServices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Authentication}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ServicesNav;
