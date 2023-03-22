import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppointmentNav from './AppointmentNav';
import MyPlansNav from './MyPlansNav';
import {useSelector} from 'react-redux';
import {DARK_BLUE} from '../styles/colors';
import Header from '../components/Header';
import {Text} from 'react-native';
import {styles} from '../screens/styles';
import {CENTER} from '../styles/constants';
import {OPD_CONSULTATION} from './constants';
import MyPlansScreen from '../screens/yuvaservices/opd/plans/Plans';
import AppointmentHome from '../screens/yuvaservices/opd/appointments/AppointmentHome';

const Tab = createMaterialTopTabNavigator();

const OPDNavigation = () => {
  const {tabBarVisible} = useSelector(state => state.doctor);
  return (
    <>
      <Header title={OPD_CONSULTATION} showBackButton={true} />
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: styles.verticalLine,
          tabBarLabelStyle: {fontSize: 16},
          tabBarStyle: {
            justifyContent: CENTER,
            color: DARK_BLUE,
            height: 70,
            display: !tabBarVisible ? 'none' : undefined,
          },
          swipeEnabled: true,
          lazy: false,
        }}>
        <Tab.Screen
          name="My Plans"
          // component={MyPlansScreen}
          component={MyPlansNav}
          options={{
            tabBarLabel: () => <Text style={styles.textColor}>My Plans</Text>,
          }}
        />
        <Tab.Screen
          name="Appointments"
          // component={AppointmentHome}
          component={AppointmentNav}
          options={{
            tabBarLabel: () => (
              <Text style={styles.textColor}>Appointments</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default OPDNavigation;
