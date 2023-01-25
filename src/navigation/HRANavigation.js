import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HRAHome from '../modules/hra/HRAHome';
import Section1 from '../modules/hra/Section1';
import Section2 from '../modules/hra/Section2';
import Section3 from '../modules/hra/Section3';
import Section4 from '../modules/hra/Section4';
import Section5 from '../modules/hra/Section5';
import Section6 from '../modules/hra/Section6';
import Section7 from '../modules/hra/Section7';
import Section8 from '../modules/hra/Section8';
import Section9 from '../modules/hra/Section9';
import Section10 from '../modules/hra/Section10';

const Stack = createStackNavigator();

const HRANavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HRAHome"
        component={HRAHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section1"
        component={Section1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section2"
        component={Section2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section3"
        component={Section3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section4"
        component={Section4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section5"
        component={Section5}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section6"
        component={Section6}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section7"
        component={Section7}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section8"
        component={Section8}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section9"
        component={Section9}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="section10"
        component={Section10}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HRANavigation;
