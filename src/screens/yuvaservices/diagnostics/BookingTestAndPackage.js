import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../styles';
import BookingTestAndPackage from '../../../modules/diagnostic/BookingTestAndPackage';
const BookingTestAndPackageScreen = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BookingTestAndPackage params={props?.route?.params} />
    </SafeAreaView>
  );
};

export default BookingTestAndPackageScreen;
