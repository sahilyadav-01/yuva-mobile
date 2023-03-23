import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HealthScreen from '../../screens/yuvaservices/talkToDoctor/HealthScreen';
import ChatScreen from '../../screens/yuvaservices/talkToDoctor/ChatScreen';
import MyPlansScreen from '../../screens/yuvaservices/talkToDoctor/MyPlansScreen';

const Stack = createStackNavigator();

const TalkToDoctorNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPlansScreen"
        component={MyPlansScreen}
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
