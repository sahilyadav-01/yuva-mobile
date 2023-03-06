import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const CartNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Cart"} component={CartScreen} options={{headerShown: false}} />
      <Stack.Screen name={"CheckoutAddressList"} component={() => <></>} options={{headerShown: false}} />
      <Stack.Screen name={"CheckoutNewAddress"} component={() => <></>} options={{headerShown: false}} />
      <Stack.Screen name={"CheckoutSchedule"} component={() => <></>} options={{headerShown: false}} />
      <Stack.Screen name={"PaymentReconfirm"} component={() => <></>} options={{headerShown: false}} />
      <Stack.Screen name={"PaymentSuccess"} component={() => <></>} options={{headerShown: false}} />
      <Stack.Screen name={"OrderDetails"} component={() => <></>} options={{headerShown: false}} />
      <Stack.Screen name={"PackageDetails"} component={() => <></>} options={{headerShown: false}} />
    </Stack.Navigator>    
  );
};

export default CartNavigation;