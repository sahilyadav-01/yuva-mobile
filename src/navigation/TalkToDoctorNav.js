import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import {DARK_BLUE} from '../styles/colors';
import {CONSULTATIONS, MY_PLANS, TALK_TO_DOCTOR} from './constants';
import Consultations from '../modules/talkToDoctorConsultations';
import {styles} from '../screens/styles';
import {Text} from 'react-native';
import {CENTER} from '../styles/constants';
import MyPlans from '../modules/talkToDoctorMyplans';

const Tab = createMaterialTopTabNavigator();

const TalkToDoctorNav = () => {
  return (
    <>
      <Header title={TALK_TO_DOCTOR} showBackButton={true} />
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: styles.verticalLine,
          tabBarLabelStyle: {fontSize: 16},
          tabBarStyle: {
            justifyContent: CENTER,
            color: DARK_BLUE,
            height: 70,
            display: undefined,
          },
          swipeEnabled: true,
          lazy: false,
        }}>
        <Tab.Screen
          name={MY_PLANS}
          component={MyPlans}
          options={{
            tabBarLabel: () => <Text style={styles.textColor}>My Plans</Text>,
          }}
        />
        <Tab.Screen
          name={CONSULTATIONS}
          component={Consultations}
          options={{
            tabBarLabel: () => (
              <Text style={styles.textColor}>Consultations</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TalkToDoctorNav;
