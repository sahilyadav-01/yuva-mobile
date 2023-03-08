import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerContent from '../screens/DrawerContent';
import { getWindowDimensions } from '../utils/utils';
import BottomTabs from './BottomTabs';

const DrawerNav = props => {
  const Drawer = createDrawerNavigator();
  
  return (
      <Drawer.Navigator drawerContent={DrawerContent} defaultStatus='open' initialRouteName="Initial" screenOptions={{drawerStyle:{width:getWindowDimensions().width},headerShown:false,drawerPosition:'right'}}>
        <Drawer.Screen
          name="Initial"
          component={BottomTabs}
        />
      </Drawer.Navigator>
    
  );
};

export default DrawerNav;
