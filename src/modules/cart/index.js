import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CardButton from '../../components/CardButton';
import CartDetails from '../../components/CartDetails';
import CouponCard from '../../components/CouponCard';
import Header from '../../components/Header';
import PriceDetails from '../../components/PriceDetails';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import {
  CART_DETAILS,
  COUPON_APPLIED_SUCCESS,
  CROSS_BUTTON,
  MY_CART,
  PRICE_DETAILS,
} from './constants';
import {useCart} from './hooks/useCart';
import {styles} from './styles';

const Cart = props => {
  const {cart, onPress, buttonText, onRemove} = useCart();
  const {itemDtoList, totalCost} = cart || {};
  return (
    <ScrollView style={styles.container}>
      <Header title={MY_CART} showSearch={false} showBackButton={true} />

      <View style={styles.descStyle}>
        <View>
          <Text style={styles.appliedStyle}>{COUPON_APPLIED_SUCCESS}</Text>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity>
            <Text style={styles.crossStyle}>{CROSS_BUTTON}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <CartDetails
          data={itemDtoList}
          heading={CART_DETAILS}
          onRemove={onRemove}
        />
        <PriceDetails heading={PRICE_DETAILS} totalCost={totalCost} />
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
