import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';

import ServicesNav from './ServicesNav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: '#ffffff',
        tabBarInactiveBackgroundColor: '#2D354E',
        tabBarActiveTintColor: '#2D354E',
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={ServicesNav}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home-outline"
                size={35}
                color={focused ? '#2D354E' : '#ffffff'}
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
                name="message-outline"
                size={35}
                color={focused ? '#2D354E' : '#ffffff'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="cog"
                size={35}
                color={focused ? '#2D354E' : '#ffffff'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
