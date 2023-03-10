import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import OrderDetails from '../../components/OrderDetails';
import AddNewAddressContainer from '../../components/AddNewAddressContainer';
import ProgressBar from '../../components/ProgressBar';
import styles from './styles';
const CheckoutAddAddress = () => {
  return (
    <ScrollView>
      <OrderDetails />
      <View style={styles.bodyContainer}>
        <ProgressBar progress="0" showDateTimeSection={true} />
      </View>
      <AddNewAddressContainer />
    </ScrollView>
  );
};

export default CheckoutAddAddress;
