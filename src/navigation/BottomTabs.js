import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServicesNav from './ServicesNav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CYAN_BLUE, ORANGE} from '../styles/colors';
import {CART, HOME, MY_REPORTS, PROFILE} from './constants';
import Authentication from './Authentication';
import {useSelector} from 'react-redux';
import ProfileNavigation from './ProfileNavigation';
import CartNavigation from './CartNavigation';
import ReportNav from './ReportNav';
import { styles } from './bottomTabStyle';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {loggedIn} = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.cart);
  const badgeCount = cart?.itemDtoList?.length || 0;
  const style = styles()
  const BadgeIcon = () => {
    if(badgeCount > 0)
    return (
      <View
        style={style.badgeContainer}>
        <Text
          style={style.badgeText}>
          {badgeCount}
        </Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        showLabel: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: ORANGE,
        tabBarStyle: style.tabBarStyle,
        tabBarLabelStyle: style.tabBarLabelStyle,
        tabBarItemStyle: style.tabBarItemStyle,
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
        name={MY_REPORTS}
        component={ReportNav}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="clipboard-text-clock-outline"
                size={35}
                color={focused ? ORANGE : CYAN_BLUE}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={CART}
        component={CartNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <BadgeIcon/>
                <Icon
                  name="cart-outline"
                  size={35}
                  color={focused ? ORANGE : CYAN_BLUE}
                />
              </View>
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
