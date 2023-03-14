import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/Cart/CartScreen';
import CheckoutAddressList from '../screens/Cart/CheckoutAddressList';
import CheckoutAddAddress from '../screens/Cart/CheckoutAddAddress';
import CheckoutSchedule from '../screens/Cart/CheckoutSchedule';
import PaymentReconfirm from '../screens/Cart/PaymentReconfirm';

const Stack = createStackNavigator();

const CartNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Cart'}
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'CheckoutAddressList'}
        component={CheckoutAddressList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'NewAddress'}
        component={CheckoutAddAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'CheckoutSchedule'}
        component={CheckoutSchedule}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'PaymentReconfirm'}
        component={PaymentReconfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'PaymentSuccess'}
        component={() => <></>}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'OrderDetails'}
        component={() => <></>}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'PackageDetails'}
        component={() => <></>}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CartNavigation;
