import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { SVG } from '../../../assets';
import Header from '../../components/Header';
import { LOGOUT, MY_ORDERS, MY_REPORTS, MY_SUBSCRIPTIONS } from './constants';
import { useDrawer } from './hooks/useDrawer';
import {styles} from './style';

const Drawer = () => {
  const {onSubscriptionPress, onReportsPress, onOrdersPress, onLogoutPress} = useDrawer();
  const {
    container,
    drawerContentContainer,
    textStyle,
    secondarySeparator,
    logoutContainer,
    separator,
    rowContainer
  } = styles();
  return (<>
   <Header showSearch={false} title='Menu'/>
    <View style={container}>
      <View style={drawerContentContainer}>
        <TouchableOpacity style={rowContainer} onPress={onSubscriptionPress}>
          <SVG.Subscriptions/>
          <Text style={textStyle}>{MY_SUBSCRIPTIONS}</Text>
        </TouchableOpacity>
        <View style={separator} />
        <TouchableOpacity style={rowContainer} onPress={onReportsPress}>
        <SVG.Reports/>
          <Text style={textStyle}>{MY_REPORTS}</Text>
        </TouchableOpacity>
        <View style={separator} />
        <TouchableOpacity onPress={onOrdersPress}>
          <Text style={textStyle}>{MY_ORDERS}</Text>
        </TouchableOpacity>
      </View>
      <View style={secondarySeparator} />
      <TouchableOpacity onPress={onLogoutPress} style={logoutContainer}>
        <SVG.Logout/>
        <Text style={textStyle}>{LOGOUT}</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default Drawer;
