import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Authentication from './Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { initialLoad } from '../store/reducers/AuthSlice';

const Stack = createStackNavigator();

const IntroStackNav = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initialLoad())
  }, []);
  const {loggedIn, isAppReady} = useSelector(state => state.auth);
  
  if(!isAppReady){
    return null;
  };
  
  return (
    <Stack.Navigator>
    {loggedIn === 'loggedIn' ? 
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      :
      <Stack.Screen
        name="Login"
        component={Authentication}
        options={{headerShown: false}}
    />}
    </Stack.Navigator>
  );
};

export default IntroStackNav;
