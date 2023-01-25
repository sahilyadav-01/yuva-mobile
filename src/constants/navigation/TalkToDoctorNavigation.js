import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PatientScreen from '../../screens/yuvaservices/talkToDoctor/PatientScreen';
import HealthScreen from '../../screens/yuvaservices/talkToDoctor/HealthScreen';
import ChatScreen from '../../screens/yuvaservices/talkToDoctor/ChatScreen';

const Stack = createStackNavigator();

const TalkToDoctorNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PatientScreen"
        component={PatientScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
          name="HealthScreen"
          component={HealthScreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default TalkToDoctorNavigation;
