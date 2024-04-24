import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServicesNav from './ServicesNav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ANAKIVA,MARINER} from '../styles/colors';
import {CART, HOME, MY_REPORTS, PROFILE} from './constants';
import Authentication from './Authentication';
import {useDispatch, useSelector} from 'react-redux';
import ProfileNavigation from './ProfileNavigation';
import CartNavigation from './CartNavigation';
import ReportNav from './ReportNav';
import { styles } from './bottomTabStyle';
import { logoutThunk, resetRoute as clearRoutes, setUnauthorisedStatus } from '../store/reducers/AuthSlice';
import { profileThunk } from '../store/reducers/ProfileSlice';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {loggedIn,resetRoute} = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.cart);
  const badgeCount = cart?.itemDtoList?.length || 0;
  const style = styles();
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
  useEffect(()=>{
    if(resetRoute > 0){
    dispatch(profileThunk());
    dispatch(clearRoutes());
    navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]});
    dispatch(setUnauthorisedStatus(false));
    }
    else if(resetRoute === -1) {
      dispatch(clearRoutes());
      dispatch(logoutThunk());
      navigation.navigate('Home',{screen:'LoginScreen'});
      dispatch(setUnauthorisedStatus(false));
    }
  },[resetRoute])

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: MARINER,
        tabBarStyle: style.tabBarStyle,
        tabBarLabelStyle: style.tabBarLabelStyle,
        tabBarItemStyle: style.tabBarItemStyle,
      }}
      initialRouteName={HOME}>
      <Tab.Screen
        name={HOME}
        component={ServicesNav}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home-outline"
                size={35}
                color={focused ? MARINER : ANAKIVA}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={MY_REPORTS}
        component={ReportNav}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="clipboard-text-clock-outline"
                size={35}
                color={focused ? MARINER : ANAKIVA}
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
                  color={focused ? MARINER : ANAKIVA}
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
            unmountOnBlur: true,
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="account-outline"
                  size={35}
                  color={focused ? MARINER : ANAKIVA}
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
            unmountOnBlur: true,
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="account-outline"
                  size={35}
                  color={focused ? MARINER : ANAKIVA}
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
