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
import { styles } from './styles';
import Header from '../../../components/Header';
import { FALSE, TRUE } from './constants';

const Diagnostics = () => {
    const { jwt } = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    useEffect(() => {
        let isActive = TRUE;
        dispatch(bookingTestAndPackageThunk({ jwt, isActive }));
        isActive = FALSE
        dispatch(bookingTestAndPackageThunk({ jwt, isActive }));
    }, []);

    const Stack = createStackNavigator();

    return (
        <SafeAreaView style={styles.container}>
            {/* <YuvaStatusBar />
            <MainHeader />
            <DiagnosticHeader /> */}
            <Header/>
            <LabSearch />
            <CarouselContainerDiagnosis />
            <View style={styles.height}>
                <DiagnosticNav1 />
            </View>
        </SafeAreaView>
    )
}

export default Diagnostics;
