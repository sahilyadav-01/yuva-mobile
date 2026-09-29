import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentStatusScreen from '../screens/PaymentStatusScreen';
import {fonts} from '../styles/fonts';
import {CYAN_BLUE} from '../styles/colors';

const Stack = createStackNavigator();

const PaymentNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'PaymentScreen'}
        component={PaymentScreen}
        options={{
          headerShown: true,
          headerLeft: () => null,
          headerTitle: 'Payment',
          headerTitleStyle: {
            fontFamily: fonts.family.rubik500,
            fontSize: fonts.size.fontSize14,
            lineHeight: 17,
            color: CYAN_BLUE,
          },
        }}
      />
      <Stack.Screen
        name={'PaymentStatus'}
        component={PaymentStatusScreen}
        options={{
          headerShown: true,
          headerLeft: () => null,
          headerTitle: 'Thank you',
          headerTitleStyle: {
            fontFamily: fonts.family.rubik500,
            fontSize: fonts.size.fontSize14,
            lineHeight: 17,
            color: CYAN_BLUE,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default PaymentNavigation;
