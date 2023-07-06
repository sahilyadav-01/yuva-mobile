import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EmrmHomeScreen from '../screens/yuvaservices/EMRM/EmrmHomeScreen';
import EmrmListingScreen from '../screens/yuvaservices/EMRM/EmrmListingScreen';
import EmrmCreateRecordScreen from '../screens/yuvaservices/EMRM/EmrmCreateRecordScreen';


const Stack = createStackNavigator();
const EmrmNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmrmHome"
        component={EmrmHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmrmListing"
        component={EmrmListingScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="EmrmCreateRecord"
        component={EmrmCreateRecordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default EmrmNavigation;