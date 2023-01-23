import React from 'react'
import { View, SafeAreaView } from 'react-native';
import LabSearch from "./LabSearch";
import DiagnosticNav1 from '../../../navigation/DiagnosticNav';
import CarouselContainerDiagnosis from '../../../components/CarousalContainerDiagnosis';
import { styles } from './styles';
import Header from '../../../components/Header';
import { useDiagnostic } from './hooks/useDiagnostics';

const Diagnostics = () => {

    const {
        onPressRightIcon,
        loggedIn
    }=useDiagnostic();

    return (
        <SafeAreaView style={styles.container}>

            <Header
                isLoggedIn={loggedIn === 'loggedIn'}
                onPressRightIcon={onPressRightIcon}
            />
            <LabSearch />
            <CarouselContainerDiagnosis />
            <View style={styles.height}>
                <DiagnosticNav1 />
            </View>
        </SafeAreaView>
    )
}

export default Diagnostics;
