import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HRAHome from '../screens/yuvaservices/hra/HomeScreen';
import Section1 from '../screens/yuvaservices/hra/Section_1';
import Section2 from '../screens/yuvaservices/hra/Section_2';
import Section3 from '../screens/yuvaservices/hra/Section_3';
import Section4 from '../screens/yuvaservices/hra/Section_4';
import Section5 from '../screens/yuvaservices/hra/Section_5';
import Section6 from '../screens/yuvaservices/hra/Section_6';
import Section7 from '../screens/yuvaservices/hra/Section_7';
import Section8 from '../screens/yuvaservices/hra/Section_8';
import Section9 from '../screens/yuvaservices/hra/Section_9';
import Section10 from '../screens/yuvaservices/hra/Section_10';

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
        name="Section1"
        component={Section1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section2"
        component={Section2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section3"
        component={Section3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section4"
        component={Section4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section5"
        component={Section5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section6"
        component={Section6}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section7"
        component={Section7}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section8"
        component={Section8}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section9"
        component={Section9}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section10"
        component={Section10}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HRANavigation;
