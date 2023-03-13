import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CardButton from '../../components/CardButton';
import CartDetails from '../../components/CartDetails';
import CouponCard from '../../components/CouponCard';
import Header from '../../components/Header';
import PriceDetails from '../../components/PriceDetails';
import { LIGHT_GREEN, RED } from '../../styles/colors';
import {
  CART_DETAILS,
  CROSS_BUTTON,
  MY_CART,
  PRICE_DETAILS,
} from './constants';
import { useCart } from './hooks/useCart';
import { styles } from './styles';

const Cart = props => {
  const { cart, coupon, redeemCoupons, couponView, onPress, crossAction, buttonText, onRemove } = useCart();
  const { itemDtoList, totalCost, amountToBePaid, totalDiscount } = cart || {};
  const { totalCost: appliedTotalCost, amountToBePaid: appliedAmountToBePaid, totalDiscount: appliedTotalDiscount } = coupon || {};

  return (
    <ScrollView style={styles.container}>
      <Header title={MY_CART} showSearch={false} showBackButton={true} />
      {couponView && redeemCoupons.length > 0 && <View style={[styles.descStyle, { backgroundColor: couponView ? LIGHT_GREEN : RED }]}>
        <View>
          <Text style={styles.appliedStyle}>{redeemCoupons}</Text>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity onPress={crossAction}>
            <Text style={styles.crossStyle}>{CROSS_BUTTON}</Text>
          </TouchableOpacity>
        </View>
      </View>
      }
      <View style={styles.bodyContainer}>
        <CartDetails
          data={itemDtoList}
          heading={CART_DETAILS}
          onRemove={onRemove}
        />
        <PriceDetails heading={PRICE_DETAILS} totalCost={totalCost} totalDiscount={totalDiscount} amountToBePaid={amountToBePaid} coupon={{ couponView, appliedAmountToBePaid, appliedTotalCost, appliedTotalDiscount }} />
        <CardButton
          text={buttonText}
          onPress={onPress}
          containerStyle={styles.containerStyle}
          textStyle={styles.textStyle}
        />
      </View>
      <CouponCard />
    </ScrollView>
  );
};

export default Cart;
