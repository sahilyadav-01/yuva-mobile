import React from 'react';
import {SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import {BLACK, MARINER} from '../styles/colors';
import {fonts} from '../styles/fonts';
import MyPlanPurchases from '../screens/MyPlanPurchases';
import {useDispatch} from 'react-redux';
import {toggleTab} from '../store/reducers/PurchasesSlice';

const Tab = createMaterialTopTabNavigator();

const PurchaseNav = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        title={'Purchase History'}
        showBackButton={true}
        hideMenu={true}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: fonts.family.montserrat600,
            lineHeight: 21,
            color: BLACK,
          },
          tabBarStyle: {
            display: undefined,
            paddingVertical: 8,
          },
          tabBarIndicatorStyle: {
            backgroundColor: MARINER,
            width: '15%',
            height: 3,
            marginHorizontal: '10%',
          },
          swipeEnabled: false,
          lazy: false,
        }}>
        <Tab.Screen
          name={'Subscription History'}
          component={MyPlanPurchases}
          initialParams={{plan: true}}
          listeners={{
            tabPress: e => {
              dispatch(toggleTab(0));
            },
          }}
        />
        <Tab.Screen
          name={'Purchase History'}
          component={MyPlanPurchases}
          initialParams={{plan: false}}
          listeners={{
            tabPress: e => {
              dispatch(toggleTab(1));
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default PurchaseNav;
