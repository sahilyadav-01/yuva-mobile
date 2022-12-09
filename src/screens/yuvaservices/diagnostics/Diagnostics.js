import React, { useEffect } from 'react'
import YuvaStatusBar from '../../../components/YuvaStatusBar'
import { View, Text, Image, SafeAreaView, StatusBar } from 'react-native';
import MainHeader from '../../../components/MainHeader';
import LabSearch from "./LabSearch";
import { useSelector, useDispatch } from 'react-redux';
import { viewMyTestAndPackageThunk } from '../../../store/reducers/DiagnosticsSlice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DiagnosticsNavigation from './DiagnosticNaviagtion';
import { createStackNavigator } from '@react-navigation/stack';
const Diagnostics = () => {


    const Stack = createStackNavigator();
    return (
        <View>
            <YuvaStatusBar />
            <View>
                <MainHeader />
                <LabSearch />      
                <View className="h-[500px] mt-[-10px]">    
                <Stack.Navigator>
                    <Stack.Screen
                        name="DiagnosticsNavigation"
                        component={DiagnosticsNavigation}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
                </View> 
         </View>
        </View>
    )
}

export default Diagnostics;
