import React from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Header from '../../../../components/Header';
import { ADDRESS } from './constants';
import { styles } from './styles';
import AddNewAddressContainer from '../../../../components/AddNewAddressContainer';
import { getPlatform } from '../../../../utils/utils';

const NewAddress = () => {
    const Platform = getPlatform();
    return (
        <SafeAreaView style={styles.contentContainerStyle}>
            <Header showBackButton={true} title={'Add Address'} hideMenu={true} showCart={false} />
            <KeyboardAvoidingView behavior={Platform.isIOS ? 'padding' : null} style={styles.keyboardAvoidView}>
            <AddNewAddressContainer isScreen={ADDRESS} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default NewAddress;

