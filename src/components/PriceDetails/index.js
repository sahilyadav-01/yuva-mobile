import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AMOUNT_TO_BE_PAID, DISCOUNT, PRICE, RUPEE_SYMOL } from './constants';
import { styles } from './styles';

const PriceDetails = props => {
  const { heading, totalCost, totalDiscount, amountToBePaid, coupon } = props;
  const { cart } = useSelector(state => state.cart);
  const { couponViewCart } = cart || {};
  const { detailsContainer, headingText, priceContainer, priceText, titleView, priceView } = styles();
  const { couponView, appliedAmountToBePaid, appliedTotalCost, appliedTotalDiscount } = coupon;
  // console.log("couponView",couponView);
  console.log("couponViewCart", couponViewCart);
  console.log("appliedAmountToBePaid", appliedAmountToBePaid);
  console.log("amountToBePaid", amountToBePaid);



  return (
    <View style={detailsContainer}>
      <Text style={headingText}>{heading}</Text>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{PRICE}</Text>
        </View>
        <View style={priceView}>
          {couponViewCart === false ? (
            <Text style={priceText}>{RUPEE_SYMOL} {appliedTotalCost}</Text>
          ) : (
            <Text style={priceText}>{RUPEE_SYMOL} {couponView ? appliedTotalCost : totalCost}</Text>
          )}
        </View>
      </View>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{DISCOUNT}</Text>
        </View>
        <View style={priceView}>
          {couponViewCart === false ? (
            <Text style={priceText}>{RUPEE_SYMOL} {appliedTotalDiscount}</Text>
          ) : (
            <Text style={priceText}>{RUPEE_SYMOL} {couponView ? appliedTotalDiscount : totalDiscount}</Text>
          )}
        </View>
      </View>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{AMOUNT_TO_BE_PAID}</Text>
        </View>
        <View style={priceView}>
          {couponViewCart === false ? (
            <Text style={priceText}>{RUPEE_SYMOL} {appliedAmountToBePaid}</Text>
          ) : (
            <Text style={priceText}>{RUPEE_SYMOL} {couponView ? appliedAmountToBePaid : amountToBePaid}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default PriceDetails;