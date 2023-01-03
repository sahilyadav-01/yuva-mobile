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
import DiagnosticHeader from '../../../components/DiagnosticHeader';
import { styles } from '../../styles';

const Diagnostics = () => {
    const { jwt } = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    useEffect(() => {
        let isActive = "true";
        dispatch(bookingTestAndPackageThunk({ jwt, isActive }));
        isActive = "false";
        dispatch(bookingTestAndPackageThunk({ jwt, isActive }));
    }, []);

    const Stack = createStackNavigator();

    return (
        <SafeAreaView style={styles.container}>
            <YuvaStatusBar />
           
                <MainHeader />
                <DiagnosticHeader />
                <LabSearch />
              
                    <CarouselContainerDiagnosis />
               
                <View className="h-[500]">
                    <Stack.Navigator>
                        <Stack.Screen
                            name="DiagnosticsNavigation"
                            component={DiagnosticsNavigation}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </View>
          
        </SafeAreaView>
    )
}

export default Diagnostics;
