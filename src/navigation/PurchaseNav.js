import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import {CYAN_BLUE, ORANGE} from '../styles/colors';
import {SafeAreaView, Text, View} from 'react-native';
import { fonts } from '../styles/fonts';
import MyPlanPurchases from '../screens/MyPlanPurchases';

const Tab = createMaterialTopTabNavigator();

const PurchaseNav = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Header title={'Purchase History'} showBackButton={true} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 14, fontFamily:fonts.family.rubik600, lineHeight:21, color:CYAN_BLUE},
          tabBarStyle: {
            display: undefined,
            paddingVertical:8
          },
          tabBarIndicatorStyle:{backgroundColor:ORANGE,width:'15%',height:3,marginHorizontal:'10%'},
          swipeEnabled: true,
          lazy: false,
        }}>
        <Tab.Screen
          name={'Subscription History'}
          component={MyPlanPurchases}
        />
        <Tab.Screen
          name={'Purchase History'}
          component={() => (
            <View>
              <Text>Purchase</Text>
            </View>
          )}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default PurchaseNav;
