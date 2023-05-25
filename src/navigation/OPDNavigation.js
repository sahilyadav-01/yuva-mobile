import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppointmentNav from './AppointmentNav';
import MyPlansNav from './MyPlansNav';
import {useSelector} from 'react-redux';
import {DARK_BLUE, ORANGE} from '../styles/colors';
import Header from '../components/Header';
import {Dimensions, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {styles} from '../screens/styles';
import {CENTER} from '../styles/constants';
import {OPD_CONSULTATION} from './constants';
import { getPlatform } from '../utils/utils';

const Tab = createMaterialTopTabNavigator();

const OPDNavigation = () => {
  const {tabBarVisible} = useSelector(state => state.doctor);
  const Platform = getPlatform();
  return (
    <SafeAreaView style={{flex:1}}>
      <Header title={OPD_CONSULTATION} showBackButton={true} />
      <KeyboardAvoidingView behavior={Platform.isIOS ? 'padding' : null} style={{flex:1}}>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: ORANGE,
            width: 40,
            height: 3,
            left: (Dimensions.get('window').width / 2 - 50) / 2,
          },
        }}
        screenOptions={{
          tabBarItemStyle: styles.verticalLine,
          tabBarLabelStyle: {fontSize: 1},
          tabBarStyle: {
            justifyContent: CENTER,
            color: DARK_BLUE,
            height: 70,
            display: !tabBarVisible ? 'none' : undefined,
            elevation: 0,
            backgroundColor: 'transparent',
          },
          swipeEnabled: true,
          lazy: false,
        }}>
        <Tab.Screen
          name="My Plans"
          component={MyPlansNav}
          options={{
            tabBarLabel: () => <Text style={styles.textColor}>My Plans</Text>,
          }}
        />
        <Tab.Screen
          name="Appointments"
          component={AppointmentNav}
          options={{
            tabBarLabel: () => (
              <Text style={styles.textColor}>Appointments</Text>
            ),
          }}
        />
      </Tab.Navigator>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OPDNavigation;
