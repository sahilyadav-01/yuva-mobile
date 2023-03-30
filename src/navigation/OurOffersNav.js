import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Authentication from './Authentication';
import ComingSoon from '../components/ComingSoon';

const Stack = createStackNavigator();

const OurOfferNav = () => {
  const {
    auth: {loggedIn},
  } = useSelector(state => state);
  return (
    <Stack.Navigator>
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

    </Stack.Navigator>
  );
};

export default OurOfferNav;
