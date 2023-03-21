import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
import TalkToDoctor from '../modules/staticDoctor';
import OurPlanNav from './OurPlanNav';
import LifestyleTestsAndPackagesScreen from '../screens/LifestyleTestsAndPackages';
import BookingTestAndPackageScreen from '../screens/yuvaservices/diagnostics/BookingTestAndPackage';
import HealthPackagesScreen from '../screens/HealthPackages';
import ViewAppointment from '../screens/yuvaservices/opd/appointments/ViewAppointment';
import CheckInAppointment from '../screens/yuvaservices/opd/appointments/CheckInAppointment';
import EditAppointment from '../screens/yuvaservices/opd/appointments/EditAppointment';
import AppointmentHome from '../screens/yuvaservices/opd/appointments/AppointmentHome';

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
        component={
          loggedIn !== 'loggedIn' ? ProfessionalServices : DiagnosticNav
        }
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={BookingTestAndPackageScreen}
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
        name="HealthCheckupsTests"
        component={HealthPackagesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LifestyleTestsAndPackages"
        component={LifestyleTestsAndPackagesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Authentication}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OurPlan"
        component={OurPlanNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewAppointment"
        component={ViewAppointment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckInAppointment"
        component={CheckInAppointment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditAppointment"
        component={EditAppointment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentHome"
        component={AppointmentHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ServicesNav;
