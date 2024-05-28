import React from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Header from '../../../../components/Header';
import {styles} from './styles';
import TermsContainer from '../../../cart/PaymentReconfirmList/TermsContainer';
import { getPlatform } from '../../../../utils/utils';
import PriceBreakdown from '../../../cart/PaymentReconfirmList/PriceBreakdown';
import CouponCard from '../../../../components/CouponContainer';
import { useCheckout } from './hooks/useCheckout';

const Separator = () => {
  return <View style={styles.separator} />;
};

const CheckoutOurPlan = () => {
const platform = getPlatform();
const {
  onCheckout,
  planUuid,
  planAmountToBePaid,
  planType,
  checked,
  onCheckboxPress,
} = useCheckout();
 
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Summary'}
        showSearch={false}
        showBackButton={true}
        hideMenu={true}
        showCart={true}
      />
      <KeyboardAvoidingView
        behavior={platform.isIOS ? 'padding' : null}
        style={{paddingHorizontal: 20, flex: 1}}>
        <PriceBreakdown
          plan={true}
          priceBreakup={{
            price: Object.values(planAmountToBePaid)[0]?.price,
            totalDiscount: Object.values(planAmountToBePaid)[0]?.totalDiscount,
            amountToBePaid: Object.values(planAmountToBePaid)[0]?.amountToBePaid,
          }}
        />
        <View style={{flex: 1}}>
          <CouponCard isPlan={true} planType={planType[0]} planUuid={planUuid}/>
          <Separator />
          <TermsContainer checked={checked} onCheckboxPress={onCheckboxPress} />
          <TouchableOpacity
            onPress={onCheckout}
            style={styles.placeOrder}>
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CheckoutOurPlan;
