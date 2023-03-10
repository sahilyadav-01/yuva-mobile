import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import ProgressBar from '../../../components/ProgressBar';
import Header from '../../../components/Header';

import {styles} from './styles';
import AddressList from '../../../components/Address';
import OrderDetails from '../../../components/OrderDetails';

const CartAddressList = props => {
  const [progress, setProgress] = useState('');

  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} />
      <OrderDetails />
      <View style={styles.bodyContainer}>
        <ProgressBar progress="0" showDateTimeSection={true} />
      </View>
      <AddressList />
    </ScrollView>
  );
};

export default CartAddressList;
