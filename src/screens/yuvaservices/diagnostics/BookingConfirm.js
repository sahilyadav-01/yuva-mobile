import React from 'react';
import {SafeAreaView} from 'react-native';
import BookingConfirm from '../../../modules/diagnostic/BookingConfirm';
import {styles} from '../../styles';

const BookingConfirmScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BookingConfirm />
    </SafeAreaView>
  );
};

export default BookingConfirmScreen;
