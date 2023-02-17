import React from 'react';
import {SafeAreaView } from 'react-native';
import { styles } from './styles';
import RescheduleAndCancel from '../../../modules/diagnostic/RescheduleAndCancel';
const RescheduleTestAndPackage = () => {

    return (
        <SafeAreaView style={styles.container}>
        <RescheduleAndCancel/>
        </SafeAreaView>
    );
};

export default RescheduleTestAndPackage;