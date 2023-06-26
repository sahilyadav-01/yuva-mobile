import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SVG } from '../../../assets';
import Header from '../../components/Header';
import { LOGOUT, MY_BOOKINGS, My_Corporate_Program, MY_PRESCRIPTIONS, MY_REPORTS } from './constants';
import { useDrawer } from './hooks/useDrawer';
import { styles } from './style';

const Drawer = () => {
  const { onReportsPress, onOrdersPress, onLogoutPress, onPrescriptionsPress, isEmployee, onCorporateProgramPress } = useDrawer();
  const {
    container,
    drawerContentContainer,
    textStyle,
    secondarySeparator,
    logoutContainer,
    separator,
    rowContainer,
    contentContainerStyle,
  } = styles();
  return (<>
   <Header showSearch={false} title='Menu'/>
    <View style={container}>
    <ScrollView style={contentContainerStyle}>
      <View style={drawerContentContainer}>
        <TouchableOpacity style={rowContainer} onPress={onReportsPress}>
        <SVG.Reports/>
          <Text style={textStyle}>{MY_REPORTS}</Text>
        </TouchableOpacity>
        <View style={separator} />
        <TouchableOpacity style={rowContainer} onPress={onPrescriptionsPress}>
        <SVG.Prescriptions/>
          <Text style={textStyle}>{MY_PRESCRIPTIONS}</Text>
        </TouchableOpacity>
        <View style={separator} />
        <TouchableOpacity style={rowContainer} onPress={onOrdersPress}>
        <SVG.Bookings/>
          <Text style={textStyle}>{MY_BOOKINGS}</Text>
        </TouchableOpacity>
        {isEmployee && (
            <>
              <View style={separator} />
              <TouchableOpacity style={rowContainer} onPress={onCorporateProgramPress}>
                <SVG.CorporateProgram />
                <Text style={textStyle}>{My_Corporate_Program}</Text>
              </TouchableOpacity>
            </>
          )}
      </View>
      <View style={secondarySeparator} />
      <TouchableOpacity onPress={onLogoutPress} style={logoutContainer}>
        <SVG.Logout/>
        <Text style={textStyle}>{LOGOUT}</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
    </>
  );
};

export default Drawer;
