import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../screens/yuvaservices/Product/CategoryScreen';
import CategoryDetails from '../screens/yuvaservices/Product/CategoryDetails';

const Stack = createStackNavigator();
const ProductNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProductNavigation;
