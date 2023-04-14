import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../../../../components/Header';
import { CHECK_OUT, ADDRESS } from './constants';
import { styles } from './styles';
import AddNewAddressContainer from '../../../../components/AddNewAddressContainer';

const NewAddress = () => {

    return (
        <View>
            <Header showBackButton={true} title={CHECK_OUT} />
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    <AddNewAddressContainer isScreen={ADDRESS} />
                </View>
            </ScrollView >
        </View >
    )
}
export default NewAddress;

