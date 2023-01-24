import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HRAHome from '../../screens/yuvaservices/hra/HRAHome';
import Section1 from '../../screens/yuvaservices/hra/Section1';
import Section2 from '../../screens/yuvaservices/hra/Section2';
import Section3 from '../../screens/yuvaservices/hra/Section3';
import Section4 from '../../screens/yuvaservices/hra/Section4';
import Section5 from '../../screens/yuvaservices/hra/Section5';
import Section6 from '../../screens/yuvaservices/hra/Section6';
import Section7 from '../../screens/yuvaservices/hra/Section7';
import Section8 from '../../screens/yuvaservices/hra/Section8';
import Section9 from '../../screens/yuvaservices/hra/Section9';
import Section10 from '../../screens/yuvaservices/hra/Section10';

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
