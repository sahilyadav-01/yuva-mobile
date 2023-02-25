import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import packagesAndTestList from '../screens/yuvaservices/HealthCheckupsTests/packagesAndTestList';
 
const Stack = createStackNavigator();

const HealthCheckupsStackNav = () => {
  return (
    <Stack.Navigator initialRouteName='HRAHome'>
      <Stack.Screen
        name="packagesAndTestList"
        component={packagesAndTestList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HealthCheckupsStackNav;
