import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Header from '../../../components/Header'
import { BOOK_NOW } from './constants';



const BookingConfirm = () => {

    return (
        <View>
            <Header />
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.booksID}>

            <Text>ffffffff</Text>
                </View>
                <TouchableOpacity
                    // onPress={bookTestScreen}                        
                    style={styles.touchable}>
                    <Text style={styles.textBook}>
                        {BOOK_NOW}
                    </Text>
                </TouchableOpacity>
                <View>
                </View>
            </ScrollView >
        </View >
    );
};

export default BookingConfirm;