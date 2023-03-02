import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HealthPackages from '../modules/healthPackages';
import { styles } from './styles';

const HealthPackagesScreen = (props) => {
    return (
        <SafeAreaView style={styles.homeScreenContainer}>
        <HealthPackages index={props?.route?.params?.index}/>
        </SafeAreaView>
    );
}

export default HealthPackagesScreen;