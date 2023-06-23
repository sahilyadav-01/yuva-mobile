import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import OrderDetails from '../../../components/OrderDetails';
import {styles} from './styles';
import ProgressBar from '../../../components/ProgressBar';
import AddNewAddressContainer from '../../../components/AddNewAddressContainer';
import { getPlatform } from '../../../utils/utils';
const CheckoutAddAddressList = () => {
  const Platform = getPlatform();
  return (
    <>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} hideMenu={true} showCart={true} />
      <KeyboardAvoidingView behavior={Platform.isIOS ? 'position' : null}>
      <ScrollView>
        <OrderDetails />
        <View style={styles.bodyContainer}>
          <ProgressBar progress="0" showDateTimeSection={true} />
        </View>
        <AddNewAddressContainer isScreen={'CheckoutAddressList'} />
      </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CheckoutAddAddressList;
