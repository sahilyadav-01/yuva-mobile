import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import OurPlanDetails from '../modules/ourPlan/components/OurPlanDetails'

const Stack = createStackNavigator();

const OurPlanNav = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OurPlanDetails"
        component={OurPlanDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  );
};

export default OurPlanNav;