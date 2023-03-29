import React from 'react';
import { View } from 'react-native';
import MyPurchases from '../modules/myPurchases';
import {styles} from './styles'

const MyPlanPurchases = () => {
    return (
        <View style={styles.homeScreenContainer}>
           <MyPurchases/>
        </View>
    );
}

export default MyPlanPurchases;