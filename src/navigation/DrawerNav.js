import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerContent from '../screens/DrawerContent';
import { getPlatform, getWindowDimensions } from '../utils/utils';
import BottomTabs from './BottomTabs';

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  const width = getWindowDimensions()?.width;
  const Platform = getPlatform();
  return (
      <Drawer.Navigator useLegacyImplementation={Platform.isIOS ?? undefined} drawerContent={DrawerContent} initialRouteName="HomeDrawer" screenOptions={{drawerStyle:{width},headerShown:false,drawerPosition:'right',swipeEnabled:false}}>
        <Drawer.Screen
          name="HomeDrawer"
          component={BottomTabs}
        />
      </Drawer.Navigator>
    
  );
};

export default DrawerNav;
