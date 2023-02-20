import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HRAHome from '../screens/yuvaservices/hra/homeScreen';
import Section1 from '../screens/yuvaservices/hra/section_1';
import Section2 from '../screens/yuvaservices/hra/section_2';
import Section3 from '../screens/yuvaservices/hra/section_3';
import Section4 from '../screens/yuvaservices/hra/section_4';
import Section5 from '../screens/yuvaservices/hra/section_5';
import Section6 from '../screens/yuvaservices/hra/section_6';
import Section7 from '../screens/yuvaservices/hra/section_7';
import Section8 from '../screens/yuvaservices/hra/section_8';
import Section9 from '../screens/yuvaservices/hra/section_9';
import Section10 from '../screens/yuvaservices/hra/section_10';

const Stack = createStackNavigator();

const HRANavigation = () => {
  return (
    <Stack.Navigator initialRouteName='HRAHome'>
      <Stack.Screen
        name="HRAHome"
        component={HRAHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section1"
        component={Section1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section2"
        component={Section2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section3"
        component={Section3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section4"
        component={Section4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section5"
        component={Section5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section6"
        component={Section6}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section7"
        component={Section7}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section8"
        component={Section8}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section9"
        component={Section9}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="section10"
        component={Section10}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HRANavigation;
