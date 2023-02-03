import React from 'react'
import { View, SafeAreaView } from 'react-native';
import DiagnosticNav1 from '../../navigation/DiagnosticNav';
import { styles } from './styles';
import Header from '../../components/Header';
import { useDiagnostic } from './hooks/useDiagnostic';

const Diagnostic = () => {

    const {
        onPressRightIcon,
        loggedIn
    } = useDiagnostic();

    return (
        <SafeAreaView style={styles.container}>

            <Header
                isLoggedIn={loggedIn === 'loggedIn'}
                onPressRightIcon={onPressRightIcon}
            />
            <View style={styles.height}>
                <DiagnosticNav1 />
            </View>
        </SafeAreaView>
    )
}

export default Diagnostic;