import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import IntroStaticScreen1 from '../modules/Intro/components/IntroStaticScreen1';
import IntroStaticScreen2 from '../modules/Intro/components/IntroStaticScreen2';

const Stack = createStackNavigator();

const SplashNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IntroStaticScreen1"
        component={IntroStaticScreen1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroStaticScreen2"
        component={IntroStaticScreen2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SplashNav;
