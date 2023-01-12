import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Backbutton from '../components/Backbutton';
import {CurrentRenderContext, useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppointmentNav from './AppointmentNav';
import DoctorScreen from '../screens/yuvaservices/opd/doctors/Doctor';
// import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createMaterialTopTabNavigator();

const OPDNavigation = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const goBack = () => navigation.goBack();
  return (
    <Tab.Navigator
      className="flex mt-[15px]"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, marginTop: 15},
        tabBarStyle: {color: '#1D2334', height: 70},
        swipeEnabled: true, // fixes a bug in react navigation
        lazy: false, // fixes a bug in react navigation
      }}>
      <Tab.Screen name="Doctor" component={DoctorScreen} />
      <Tab.Screen name="Appointments" component={AppointmentNav} />
    </Tab.Navigator>
  );
};

export default OPDNavigation;
const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    right: 0,

    bottom: 10,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    backgroundColor: 'white',

    height: 26,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,

    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
