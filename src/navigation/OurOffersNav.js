import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Authentication from './Authentication';
import ComingSoon from '../components/ComingSoon';
import OnMood9Screen from '../screens/OnMood9';

const Stack = createStackNavigator();

const OurOfferNav = () => {
  const {
    auth: {loggedIn},
  } = useSelector(state => state);
  return (
    <Stack.Navigator initialRouteName='MentalWellness'>
            <Stack.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Authentication}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name='MentalWellness'
      component={OnMood9Screen}
      options={{headerShown: false,animationEnabled:false}}
      />
    </Stack.Navigator>
  );
};

export default OurOfferNav;
