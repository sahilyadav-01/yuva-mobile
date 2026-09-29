import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OurPlanAddress from '../modules/ourPlanDetails/components/Address';
import NewAddress from '../modules/ourPlanDetails/components/NewAddAddress';
import CheckoutOurPlan from '../modules/ourPlanDetails/components/CheckoutScreen';
import OurPlanScreen from '../screens/OurPlanScreen/OurPlanScreen';

const Stack = createStackNavigator();

const OurPlanNav = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OurPlanDetails"
        component={OurPlanScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OurPlanAddress"
        component={OurPlanAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewAddress"
        component={NewAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutOurPlan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OurPlanNav;
