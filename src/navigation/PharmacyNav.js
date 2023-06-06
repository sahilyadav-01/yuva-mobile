import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetialsScreen from '../modules/pharmacy/DetialsScreen';
import PharmacyListing from '../screens/yuvaservices/pharmacy/PharmacyListing';

const Stack = createStackNavigator();
const PharmacyNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PHARMACY"
        component={PharmacyListing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PharmacyDescription"
        component={DetialsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PharmacyNavigation;