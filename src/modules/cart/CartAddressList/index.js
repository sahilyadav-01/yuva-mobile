import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
 import ProgressBar from '../../../components/ProgressBar';
import Header from '../../../components/Header';

import { styles } from './styles';

const CartAddressList = (props) => {

    const [progress ,setProgress]=useState('')

    return (
        <ScrollView style={styles.container}>
         <Header title={"Checkout"} showSearch={false} showBackButton={true}/>
         <View style={styles.bodyContainer}>
            <ProgressBar
            progress='0'
            showDateTimeSection = {true} 
            />
         </View>
        </ScrollView>
    );
}

export default CartAddressList;