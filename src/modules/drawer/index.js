import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import { useDrawer } from './hooks/useDrawer';
import {styles} from './style';

const Drawer = props => {
  const {onSubscriptionPress, onReportsPress, onOrdersPress, onLogoutPress} = useDrawer();
  const {
    container,
    drawerContentContainer,
    textStyle,
    secondarySeparator,
    logoutContainer,
    separator,
  } = styles();
  return (<>
   <Header showSearch={false} title='Menu'/>
    <View style={container}>
      <View style={drawerContentContainer}>
        <TouchableOpacity onPress={onSubscriptionPress}>
          <Text style={textStyle}>My Subscriptions</Text>
        </TouchableOpacity>
        <View style={separator} />
        <TouchableOpacity onPress={onReportsPress}>
          <Text style={textStyle}>My Reports</Text>
        </TouchableOpacity>
        <View style={separator} />
        <TouchableOpacity onPress={onOrdersPress}>
          <Text style={textStyle}>My Orders</Text>
        </TouchableOpacity>
      </View>
      <View style={secondarySeparator} />
      <TouchableOpacity onPress={onLogoutPress} style={logoutContainer}>
        <Text style={textStyle}>Logout</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default Drawer;
