import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import PriceBreakdown from './PriceBreakdown';
import CouponCard from '../../../components/CouponContainer';
import { styles } from './styles';
import { getDimensions } from '../../../utils/utils';

const PaymentReconfirmList = (props) => {
  return (
    <View style={{flex:1}}>
     <Header title={'Summary'} showSearch={false} showBackButton={true} hideMenu={true} showCart={true}/>
     <View style={{paddingHorizontal:20,flex:1}}>
     <PriceBreakdown/>
     <View style={{flex:1}}>
     <CouponCard/>
     <TouchableOpacity style={styles.placeOrder}>
        <Text>Place Order</Text>
      </TouchableOpacity>
      </View>

     </View>
    </View>
  );
}

export default PaymentReconfirmList;