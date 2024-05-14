import React from 'react';
import {SafeAreaView } from 'react-native';
import RescheduleAndCancel from '../../../modules/diagnostic/RescheduleAndCancel';

const RescheduleTestAndPackage = () => {
    return (
        <SafeAreaView style={{flex:1}}>
        <RescheduleAndCancel/>
        </SafeAreaView>
    );
};

export default RescheduleTestAndPackage;