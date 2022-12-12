import React, { useEffect } from 'react'
import YuvaStatusBar from '../../../components/YuvaStatusBar'
import { View, Text, Image, SafeAreaView, StatusBar } from 'react-native';
import MainHeader from '../../../components/MainHeader';
import LabSearch from "./LabSearch";
import { useSelector, useDispatch } from 'react-redux';
import { viewMyTestAndPackageThunk } from '../../../store/reducers/DiagnosticsSlice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DiagnosticsNavigation from './DiagnosticNaviagtion';

import { bookingTestAndPackageThunk } from '../../../store/reducers/DiagnosticsSlice';
import { createStackNavigator } from '@react-navigation/stack';
import CarouselContainerDiagnosis from '../../../components/CarousalContainerDiagnosis';

const Diagnostics = () => { 
    const { jwt } = useSelector(state => state.auth.user)
   const dispatch=useDispatch();
    useEffect(() => {
         let isActive = "true";
         dispatch(bookingTestAndPackageThunk({ jwt, isActive }));
         isActive="false";
        dispatch(bookingTestAndPackageThunk({ jwt, isActive}));
    }, []);
 
        const Stack = createStackNavigator();

    return (
        <View>
            <YuvaStatusBar />
            <View>
                <MainHeader />

                <LabSearch /> 
                <View className="h-[500px] mt-[-40px]">  
                <CarouselContainerDiagnosis />  
                </View> 
                <View className="h-[500px] mt-[-185px]">  
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
