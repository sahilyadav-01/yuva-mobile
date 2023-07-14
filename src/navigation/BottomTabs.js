import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServicesNav from './ServicesNav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BLACK, CYAN_BLUE, ORANGE} from '../styles/colors';
import {HEALTH_PLANS, HOME, OUR_OFFERS, PROFILE} from './constants';
import {CENTER} from '../styles/constants';
import {fonts} from '../styles/fonts';
import Authentication from './Authentication';
import {useSelector} from 'react-redux';
import OurOfferNav from './OurOffersNav';
import { getPlatform } from '../utils/utils';
import OurPlanNav from './OurPlanNav';
import ProfileNavigation from './ProfileNavigation';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {loggedIn} = useSelector(state => state.auth);
  const Platform = getPlatform();
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        showLabel: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: ORANGE,
        tabBarStyle: {
          height: 72,
          paddingBottom:Platform.isIOS ? 8 : undefined,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowColor: BLACK,
          elevation: 10,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          shadowRadius: 12,
        },
        tabBarLabelStyle: {
          marginVertical: 4,
          fontFamily: fonts.family.rubik400,
          fontSize: fonts.size.fontSize12,
          fontWeight: fonts.weight.fontWeight500,
        },
        tabBarItemStyle: {
          marginHorizontal: 4,
          paddingVertical: 4,
          justifyContent: CENTER,
          alignItems: CENTER,
        },
      }}
      initialRouteName={HOME}>
      <Tab.Screen
        name={HOME}
        component={ServicesNav}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home-outline"
                size={35}
                color={focused ? ORANGE : CYAN_BLUE}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={HEALTH_PLANS}
        component={OurPlanNav}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="plus-box-outline"
                size={35}
                color={focused ? ORANGE : CYAN_BLUE}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={OUR_OFFERS}
        component={OurOfferNav}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="tag-outline"
                size={35}
                color={focused ? ORANGE : CYAN_BLUE}
              />
            );
          },
        }}
      />
      {loggedIn !== 'loggedIn' ? (
        <Tab.Screen
          name={PROFILE}
          component={Authentication}
          initialParams={{from: PROFILE}}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="account-outline"
                  size={35}
                  color={focused ? ORANGE : CYAN_BLUE}
                />
              );
            },
          }}
        />
      ) : (
        <Tab.Screen
          name={PROFILE}
          component={ProfileNavigation}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="account-outline"
                  size={35}
                  color={focused ? ORANGE : CYAN_BLUE}
                />
              );
            },
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabs;
