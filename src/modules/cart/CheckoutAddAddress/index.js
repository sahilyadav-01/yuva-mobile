import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
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
    <View style={styles.screenContainer}>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} hideMenu={true} showCart={true} />
     <View style={styles.contentContainer}>
     <KeyboardAvoidingView style={styles.fullViewContainer} behavior={Platform.isIOS ? 'position' : null}>
      <ScrollView nestedScrollEnabled style={styles.fullViewContainer}>
        <AddNewAddressContainer isScreen={'CheckoutAddressList'} />
      </ScrollView>
      </KeyboardAvoidingView>
     </View>
    </View>
  );
};

export default CheckoutAddAddressList;
