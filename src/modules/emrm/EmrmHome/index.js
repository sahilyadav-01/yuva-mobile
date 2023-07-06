import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { PNG } from '../../../../assets';
import Header from '../../../components/Header';
import { BOTTOM_BUTTON_TEXT, HEADER_TITLE, HEADING_TEXT, SUB_TEXT, TOP_BUTTON_TEXT } from './constants';
import { styles } from './styles';
import { useEmrmHome } from './hooks/useEmrmHome';

const EmrmHome = () => {
    const { onPressButton } = useEmrmHome();
    return (
        <>
            <Header title={HEADER_TITLE} isScreen={true} hideMenu={false} showBackButton={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                bounces={false}>
                <View style={styles.mainContainer}>
                    <View style={styles.headingTextContainerStyle}><Text style={styles.headingTextStyle}>{HEADING_TEXT}</Text></View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={onPressButton}>
                        <Text style={styles.buttonText}>{TOP_BUTTON_TEXT}</Text>
                    </TouchableOpacity>
                    <View style={styles.subHeadingTextContainerStyle}><Text style={styles.subHeadingTextStyle}>{HEADING_TEXT}</Text></View>
                    <View style={styles.subTextContainerStyle}><Text style={styles.subTextStyle}>{SUB_TEXT}</Text></View>
                    <Image source={PNG.EmrmHomeImage} style={{ width: '100%' }} resizeMode='cover' />
                    <TouchableOpacity style={styles.buttonContainer} onPress={onPressButton}>
                        <Text style={styles.buttonText}>{BOTTOM_BUTTON_TEXT}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};
export default EmrmHome;