import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import OurPlanAddress from '../modules/ourPlan/components/Address';
import NewAddress from '../modules/ourPlan/components/NewAddAddress';
import CheckoutOurPlan from '../modules/ourPlan/components/CheckoutScreen';
import OurPlanDetailsGuest from '../modules/ourPlanDetails/components/OurPlanDetailsGuest';
import OurPlanScreen from '../screens/OurPlanScreen/OurPlanScreen';

const Stack = createStackNavigator();

const OurPlanNav = (props) => {
  const data = props?.route?.params?.params?.data ?? null;  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OurPlanDetails"
        component={OurPlanScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OurPlanDetailsGuest"
        component={()=><OurPlanDetailsGuest data={data}/>}
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