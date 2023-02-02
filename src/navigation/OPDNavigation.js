import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppointmentNav from './AppointmentNav';
import MyPlansNav from './MyPlansNav';
import {useSelector} from 'react-redux';
const Tab = createMaterialTopTabNavigator();

const OPDNavigation = () => {
  const {tabBarVisible} = useSelector(state => state.doctor);

  return (
    <Tab.Navigator
      className="flex mt-[15px]"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, marginTop: 15},
        tabBarStyle: {
          color: '#1D2334',
          height: 70,
          display: !tabBarVisible ? 'none' : undefined,
        },
        swipeEnabled: true, // fixes a bug in react navigation
        lazy: false, // fixes a bug in react navigation
      }}>
      <Tab.Screen name="My Plans" component={MyPlansNav} />
      <Tab.Screen name="Appointments" component={AppointmentNav} />
    </Tab.Navigator>
  );
};

export default OPDNavigation;
