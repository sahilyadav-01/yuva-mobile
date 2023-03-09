import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import Reports from '../screens/ReportsScreen';
import {DARK_BLUE} from '../styles/colors';
import {DIAGNOSTIC_REPORTS, HRA_REPORTS, MY_REPORTS} from './constants';

const Tab = createMaterialTopTabNavigator();

const ReportNav = () => {
  return (
    <>
      <Header title={MY_REPORTS} showBackButton={true} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 16, marginTop: 15},
          tabBarStyle: {
            color: DARK_BLUE,
            height: 70,
            display: undefined,
          },
          swipeEnabled: true,
          lazy: false,
        }}>
        <Tab.Screen name={HRA_REPORTS} component={Reports} />
        <Tab.Screen name={DIAGNOSTIC_REPORTS} component={Reports} />
      </Tab.Navigator>
    </>
  );
};

export default ReportNav;
