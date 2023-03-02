import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import OurPlanDetails from '../modules/ourPlan/components/OurPlanDetails'
import OurPlanAddress from '../modules/ourPlan/components/Address';
import NewAddress from '../modules/ourPlan/components/NewAddAddress';
import CheckoutOurPlan from '../modules/ourPlan/components/CheckoutScreen';

const Stack = createStackNavigator();

const OurPlanNav = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OurPlanDetails"
        component={OurPlanDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OurPlanAddress"
        component={OurPlanAddress}
        options={{ headerShown: false }}
      />
          <Stack.Screen
        name="NewAddress"
        component={NewAddress}
        options={{ headerShown: false }}
      />
            <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutOurPlan}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>


  );
};

export default OurPlanNav;