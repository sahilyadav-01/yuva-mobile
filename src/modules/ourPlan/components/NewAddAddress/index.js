import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../../../../components/Header';
import { CHECKOUT, ADDRESS } from './constants';
import { styles } from './styles';
import AddNewAddres from '../../../../components/AddNewAddres';

const NewAddress = () => {

    return (
        <View>
            <Header showBackButton={true} title={CHECKOUT} />
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    <AddNewAddres isScreen={ADDRESS} />
                </View>
            </ScrollView >
        </View >
    )
}
export default NewAddress;

