import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../../components/Header';
import {useAddNewAddress} from './hooks/useAddNewAddress';
import {styles} from './styles';
import AddNewAddressContainer from '../../../components/AddNewAddressContainer';
import {BOOKING_CONFIRM, MY_TESTS} from './constants';

const AddNewAddress = () => {
  const {packageDetails} = useAddNewAddress();
  return (
    <View style={styles.container}>
      <Header showBackButton={true} title={MY_TESTS} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View>
          <Text style={styles.booked}>{packageDetails?.packageName}</Text>
        </View>
        <View style={styles.addressContainer}>
          <AddNewAddressContainer isScreen={BOOKING_CONFIRM} />
        </View>
      </ScrollView>
    </View>
  );
};
export default AddNewAddress;
