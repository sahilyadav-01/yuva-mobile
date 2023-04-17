import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { WHITE } from '../../styles/colors';
import { ORDER_AMOUNT, DISCOUNT, PRICE, RUPEE_SYMOL, DISCOUNT_PRICE, GST_TEXT, COLLECTION_CHARGES, APPLICABLE_TEXT } from './constants';
import { styles } from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { redeemCouponsSliceThunk, removeCoupon } from '../../store/reducers/CouponSlice';
import { removeCouponCart } from '../../store/reducers/CartSlice';

const PriceDetails = props => {
  const { heading, totalCost, coupon } = props;
  const { cart } = useSelector(state => state.cart);
  const { couponViewCart, itemDtoList, cartCouponDiscount, orderAmount, discountBeforeCoupon, processingCharge } = cart || {};
  const { detailsContainer, headingText, priceContainer, priceText, discountPriceTextStyle, titleView, priceView, appliedStyle, couponContainer, descStyle, crossStyle, iconStyle, couponDiscountStyle, gstText, collectionChargesText, applicableText, processingChargeContainer } = styles();
  const { couponView, couponDiscount } = coupon;
  const { loggedIn } = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const dispatch = useDispatch();
  const { selectedCouponCode } = useSelector(state => state.coupon);

  const crossAction = () => {
    dispatch(redeemCouponsSliceThunk({ isLoggedIn }));
    dispatch(removeCoupon());
    dispatch(removeCouponCart());
  }
  return (
    <View style={detailsContainer}>
      <Text style={headingText}>{heading}</Text>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{PRICE}</Text>
        </View>
        <View style={priceView}>
          {loggedIn === 'loggedIn' ? (
            <Text style={priceText}>{RUPEE_SYMOL} {totalCost}</Text>
          ) : (
            <Text style={priceText}>{RUPEE_SYMOL} {totalCost}</Text>
          )}
        </View>
      </View>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{DISCOUNT}</Text>
        </View>
        <View style={priceView}>
          {loggedIn === 'loggedIn' ? (
            <Text style={discountPriceTextStyle}> {DISCOUNT_PRICE(discountBeforeCoupon)}</Text>
          ) : (
            <Text style={discountPriceTextStyle}> {DISCOUNT_PRICE(discountBeforeCoupon)}</Text>
          )}
        </View>
      </View>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{ORDER_AMOUNT}</Text>
          <Text style={gstText}>{GST_TEXT}</Text>
        </View>
        <View style={priceView}>
          {loggedIn === 'loggedIn' ? (
            <Text style={priceText}>{RUPEE_SYMOL} {orderAmount}</Text>
          ) : (
            <Text style={priceText}>{RUPEE_SYMOL} {orderAmount}</Text>
          )}
        </View>
      </View>
      {(couponViewCart || couponView) && itemDtoList.length > 0 && <View style={[couponContainer, { backgroundColor: WHITE }]}>
        <View style={descStyle}>
          <View >
            <MaterialIcon name="local-offer" size={15} style={iconStyle} />
          </View>
          <View>
            <Text style={appliedStyle}>{selectedCouponCode ? couponView : couponViewCart}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={crossAction}>
              <FeatherIcon name="x" size={11} style={crossStyle} />
            </TouchableOpacity>
          </View>
        </View>
        <View >
          <Text style={couponDiscountStyle}>{DISCOUNT_PRICE(couponDiscount !== undefined && couponDiscount !== null && couponDiscount !== 0 ? couponDiscount : cartCouponDiscount)}</Text>
        </View>
      </View>}
      {processingCharge > 0 && 
        <View style={processingChargeContainer}>
          <View>
            <Text style={collectionChargesText}>{COLLECTION_CHARGES}</Text>
            <Text style={applicableText}>{APPLICABLE_TEXT}</Text>
          </View>
          <Text style={collectionChargesText}>
            {RUPEE_SYMOL} {processingCharge}
          </Text>
        </View>}
    </View>
  );
};

export default PriceDetails;