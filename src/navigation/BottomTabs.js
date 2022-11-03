import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';

import {HomeIcon, CogIcon, ChatIcon} from 'react-native-heroicons/outline';
import ServicesNav from './ServicesNav';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarShowLabel: false,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={ServicesNav}
        options={{
          tabBarIcon: ({focused}) => {
            // return <HomeIcon className="h-5 w-5 text-blue-500"/>
            return (
              <Icon
                name="home-outline"
                size={35}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="chat-outline"
                size={35}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="setting"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="cog-outline"
                size={35}
                color="black"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
