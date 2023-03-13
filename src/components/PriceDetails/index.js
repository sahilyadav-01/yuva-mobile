import React from 'react';
import { Text, View } from 'react-native';
import { AMOUNT_TO_BE_PAID, DISCOUNT, PRICE, RUPEE_SYMOL } from './constants';
import { styles } from './styles';

const PriceDetails = props => {
  const { heading, totalCost, totalDiscount, amountToBePaid, coupon } = props;
  const { detailsContainer, headingText, priceContainer, priceText, titleView, priceView } = styles();
  const { couponView, appliedAmountToBePaid, appliedTotalCost, appliedTotalDiscount } = coupon

  return (
    <View style={detailsContainer}>
      <Text style={headingText}>{heading}</Text>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{PRICE}</Text>
        </View>
        <View style={priceView}>
          <Text style={priceText}>{RUPEE_SYMOL} {couponView ? appliedTotalCost : totalCost}</Text>
        </View>
      </View>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{DISCOUNT}</Text>
        </View>
        <View style={priceView}>
          <Text style={priceText}>{RUPEE_SYMOL} {couponView ? appliedTotalDiscount : totalDiscount}</Text>
        </View>
      </View>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{AMOUNT_TO_BE_PAID}</Text>
        </View>
        <View style={priceView}>
          <Text style={priceText}>{RUPEE_SYMOL} {couponView ? appliedAmountToBePaid : amountToBePaid}</Text>
        </View>
      </View>
    </View>
  );
};

export default PriceDetails;
