import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import {DARK_BLUE} from '../styles/colors';
import {CONSULTATIONS, MY_PLANS, TALK_TO_DOCTOR} from './constants';

import Patient from '../modules/talkToDoctorMyplans';
import Consultations from '../modules/talkToDoctorConsultations';

const Tab = createMaterialTopTabNavigator();

const TalkToDoctorNav = () => {
  return (
    <>
      <Header title={TALK_TO_DOCTOR} showBackButton={true} />
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
        <Tab.Screen name={MY_PLANS} component={Patient} />
        <Tab.Screen name={CONSULTATIONS} component={Consultations} />
      </Tab.Navigator>
    </>
  );
};

export default TalkToDoctorNav;
