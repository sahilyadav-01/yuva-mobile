import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile';
import EnterOTP from '../screens/login/EnterOTP';

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'ProfileHome'}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterOTP"
        component={EnterOTP}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
