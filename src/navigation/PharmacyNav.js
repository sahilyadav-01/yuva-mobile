import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetialsScreen from '../modules/pharmacy/DetialsScreen';
import PrescriptionListing from '../screens/yuvaservices/pharmacy/PrescriptionListing';
import ListingScreen from '../modules/pharmacy/ListingScreen';

const Stack = createStackNavigator();
const PharmacyNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PrescriptionListing"
        component={PrescriptionListing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PharmacyListing"
        component={ListingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PharmacyDescription"
        component={DetialsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PharmacyNavigation;
