import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import { HEADER_TITLE } from '../EmrmHome/constants';
// import { styles } from './styles';

const EmrmCreateRecord = () => {
    return (
        <>
            <Header title={HEADER_TITLE} isScreen={true} hideMenu={false} showBackButton={true} />
            <View>
                <ScrollView>
                    <Text >{'5500-EmrmCreateRecord-0668'}</Text>
                </ScrollView>
            </View>
        </>
    );
};
export default EmrmCreateRecord;