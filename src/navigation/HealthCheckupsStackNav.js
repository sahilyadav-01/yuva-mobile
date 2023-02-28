import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import packagesAndTestList from '../screens/yuvaservices/HealthCheckupsTests/packagesAndTestList';
import packagesAndTestDetails from '../screens/yuvaservices/HealthCheckupsTests/packagesAndTestDetails';
 
const Stack = createStackNavigator();

const HealthCheckupsStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="packagesAndTestList"
        component={packagesAndTestList}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="packagesAndTestDetails"
        component={packagesAndTestDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HealthCheckupsStackNav;
