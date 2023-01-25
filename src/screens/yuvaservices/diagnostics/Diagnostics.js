import React, { useEffect } from 'react'
import YuvaStatusBar from '../../../components/YuvaStatusBar'
import { View, SafeAreaView } from 'react-native';
import MainHeader from '../../../components/MainHeader';
import LabSearch from "./LabSearch";
import { useSelector, useDispatch } from 'react-redux';
import DiagnosticNav1 from '../../../navigation/DiagnosticNav';
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
        dispatch(bookingTestAndPackageThunk({ isActive }));
        isActive = "false";
        dispatch(bookingTestAndPackageThunk({ isActive }));
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
                <DiagnosticNav1 />
            </View>
        </SafeAreaView>
    )
}

export default Diagnostics;
