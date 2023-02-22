import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HealthPackages from '../modules/healthPackages';
import { styles } from './styles';

const HealthPackagesScreen = () => {
    return (
        <SafeAreaView style={styles.homeScreenContainer}>
        <HealthPackages/>
        </SafeAreaView>
    );
}

export default HealthPackagesScreen;