import React from 'react';
import { View, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Header from '../../../../components/Header';
import { CHECK_OUT, ADDRESS } from './constants';
import { styles } from './styles';
import AddNewAddressContainer from '../../../../components/AddNewAddressContainer';
import { getPlatform } from '../../../../utils/utils';

const NewAddress = () => {
    const Platform = getPlatform();
    return (
        <SafeAreaView style={styles.contentContainerStyle}>
            <Header showBackButton={true} title={CHECK_OUT} hideMenu={true} showCart={false} />
            <KeyboardAvoidingView behavior={Platform.isIOS ? 'padding' : null} style={styles.contentContainerStyle}>
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    <AddNewAddressContainer isScreen={ADDRESS} />
                </View>
            </ScrollView >
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default NewAddress;

