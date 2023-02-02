import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyPlansScreen from '../screens/yuvaservices/opd/plans/Plans';
import DoctorScreen from '../screens/yuvaservices/opd/doctors/Doctors';

const Stack = createStackNavigator();

const MyPlansNav = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Plans"
        component={MyPlansScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Doctor"
        component={DoctorScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyPlansNav;
