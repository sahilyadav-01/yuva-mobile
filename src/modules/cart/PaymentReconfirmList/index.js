import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../../components/Header';
import PriceBreakdown from './PriceBreakdown';
import CouponCard from '../../../components/CouponContainer';
import {styles} from './styles';
import {usePaymentReconfirm} from './hooks/usePaymentReconfirm';
import TermsContainer from './TermsContainer';
import PaymentModes from './PaymentModes';

const Separator = () => {
  return <View style={styles.separator} />;
};

const PaymentReconfirmList = () => {
  const {onPayPress, checked, onCheckboxPress,cod, onCodPress, onOnlinePress} = usePaymentReconfirm();
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Summary'}
        showSearch={false}
        showBackButton={true}
        hideMenu={true}
        showCart={true}
      />
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <PriceBreakdown />
        <View style={{flex: 1}}>
          <CouponCard />
          <Separator/>
          <PaymentModes cod={cod} onCodPress={onCodPress} onOnlinePress={onOnlinePress}/>
          <TermsContainer checked={checked} onCheckboxPress={onCheckboxPress} />
          <TouchableOpacity onPress={onPayPress} style={styles.placeOrder}>
            <Text>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentReconfirmList;
