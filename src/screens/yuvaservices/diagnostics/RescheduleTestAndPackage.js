import React from 'react';
import {SafeAreaView } from 'react-native';
import { styles } from './styles';
import RescheduleAndCancel from '../../../modules/diagnostic/RescheduleAndCancel';
const RescheduleTestAndPackage = (props) => {

    return (
        <SafeAreaView style={styles.container}>
        <RescheduleAndCancel params={props?.route?.params}/>
        </SafeAreaView>
    );
};

export default RescheduleTestAndPackage;