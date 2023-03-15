import React from 'react';
import { ScrollView,View,Text,TouchableOpacity } from 'react-native';
import CardButton from '../../components/CardButton';
import CartDetails from '../../components/CartDetails';
import CouponCard from '../../components/CouponCard';
import Header from '../../components/Header';
import PriceDetails from '../../components/PriceDetails';
import { LIGHT_GREEN } from '../../styles/colors';
import { CART_DETAILS, MY_CART, PRICE_DETAILS , CROSS_BUTTON, COUPON_APPLIED_SUCCESS} from './constants';
import { useCart } from './hooks/useCart';
import { styles } from './styles';

const Cart = props => {
  const { cart, coupon, redeemCoupons,couponView, onPress, crossAction, buttonText, onRemove } = useCart();
  const { itemDtoList, totalCost, amountToBePaid, totalDiscount, couponViewCart } = cart || {};
  const { totalCost: appliedTotalCost, amountToBePaid: appliedAmountToBePaid, totalDiscount: appliedTotalDiscount } = coupon || {};
  // console.log("couponView",couponView);
  // console.log("couponViewCart",couponViewCart);

  return (
    <>
      <Header title={MY_CART} showSearch={false} showBackButton={true} />
      <ScrollView style={styles.container}>
      {(couponViewCart ||couponView) && <View style={[styles.descStyle, { backgroundColor: LIGHT_GREEN }]}>
        <View>
          <Text style={styles.appliedStyle}>{COUPON_APPLIED_SUCCESS}</Text>
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
    </>
  
  );
};

export default Cart;
