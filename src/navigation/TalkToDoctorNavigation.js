import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HealthScreen from '../screens/yuvaservices/talkToDoctor/HealthScreen';
import ChatScreen from '../screens/yuvaservices/talkToDoctor/ChatScreen';
import MemberSelectScreen from '../screens/yuvaservices/talkToDoctor/MemberSelectScreen';
import TalkToDoctorNav from './TalkToDoctorNav';

const Stack = createStackNavigator();

const TalkToDoctorNavigation = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <Stack.Navigator>
      <Stack.Screen
        name="TalkToDoctor"
        component={TalkToDoctorNav}
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
         <Stack.Screen
        name="MemberSelectScreen"
        component={MemberSelectScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    </SafeAreaView>
  );
};

export default TalkToDoctorNavigation;
