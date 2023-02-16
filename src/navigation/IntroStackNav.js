import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Authentication from './Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { initialLoad } from '../store/reducers/AuthSlice';
import IntroScreen from '../screens/Intro/IntroScreen';
import { getExistingUser, getProfileStatus } from '../store/LocalStore';
import { updateProfileStatus } from '../store/reducers/ProfileSlice';

const Stack = createStackNavigator();

const IntroStackNav = () => {
  const dispatch = useDispatch();
  const [initialRouteName, setInitialRouteName] = useState(null);
  useEffect(() => {
    getInitialRoute().then(initialRoute => setInitialRouteName(initialRoute))
    dispatch(initialLoad())
    getProfileStatus().then((status)=>
      dispatch(updateProfileStatus(status)))
  }, []);
  const { loggedIn, isAppReady } = useSelector(state => state.auth);
  const getInitialRoute = async () => {
    const existingUser = await getExistingUser();
    if (existingUser) return 'HomeScreen';
    return 'IntroScreen';
  };

  if (!isAppReady || !initialRouteName) {
    return null;
  };

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
    <Stack.Screen
        name="HomeScreen"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default IntroStackNav;