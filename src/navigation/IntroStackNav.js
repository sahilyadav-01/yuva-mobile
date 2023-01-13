import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import { useDispatch, useSelector } from 'react-redux';
import { initialLoad } from '../store/reducers/AuthSlice';

const Stack = createStackNavigator();

const IntroStackNav = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initialLoad())
  }, []);
  const {loggedIn, isAppReady} = useSelector(state => state.auth);
  const {jwt} = useSelector(state => state.auth.user);
  
  if(!isAppReady){
    return null;
  };
  
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabs}
        options={{headerShown: false,loggedIn}}
      />
      <Stack.Screen
        name="IntroScreen"
        component={()=><></>}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default IntroStackNav;
