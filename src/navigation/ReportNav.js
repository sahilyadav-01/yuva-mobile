import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import Reports from '../screens/ReportsScreen';
import {DARK_BLUE} from '../styles/colors';
import {DIAGNOSTIC_REPORTS, HRA_REPORTS, MY_REPORTS} from './constants';
import HraReport from '../screens/HraReportScreen';
import {SafeAreaView} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const ReportNav = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={MY_REPORTS} showBackButton={true} hideMenu={true} />
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
        <Tab.Screen name={HRA_REPORTS} component={HraReport} />
        <Tab.Screen name={DIAGNOSTIC_REPORTS} component={Reports} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default ReportNav;
