import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import Header from '../../../components/Header';
import OrderDetails from '../../../components/OrderDetails';
import {styles} from './styles';
import ProgressBar from '../../../components/ProgressBar';
import AddNewAddressContainer from '../../../components/AddNewAddressContainer';
const CheckoutAddAddressList = () => {
  return (
    <>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} />
      <ScrollView>
        <OrderDetails />
        <View style={styles.bodyContainer}>
          <ProgressBar progress="0" showDateTimeSection={true} />
        </View>
        <AddNewAddressContainer isScreen={'CheckoutAddressList'} />
      </ScrollView>
    </>
  );
};

export default CheckoutAddAddressList;
