import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { WHITE } from '../../styles/colors';
import { AMOUNT_TO_BE_PAID, DISCOUNT, PRICE, RUPEE_SYMOL, DISCOUNT_PRICE } from './constants';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { redeemCouponsSliceThunk, removeCoupon } from '../../store/reducers/CouponSlice';
import { removeCouponCart } from '../../store/reducers/CartSlice';

const PriceDetails = props => {
  const { heading, totalCost, totalDiscount, amountToBePaid, coupon } = props;
  const { cart } = useSelector(state => state.cart);
  const { couponViewCart, itemDtoList, cartCouponDiscount } = cart || {};
  const { detailsContainer, headingText, priceContainer, priceText, titleView, priceView, appliedStyle, couponContainer, descStyle, crossStyle, iconStyle, couponDiscountStyle } = styles();
  const { couponView, appliedAmountToBePaid, appliedTotalCost, appliedTotalDiscount ,couponDiscount} = coupon;
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
            <Text style={priceText}>{RUPEE_SYMOL} {couponViewCart ? totalCost : (appliedTotalCost || totalCost)}</Text>
          ) : (
            <Text style={priceText}>{RUPEE_SYMOL} {couponViewCart ? totalCost : (appliedTotalCost || totalCost)}</Text>
          )}
        </View>
      </View>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{DISCOUNT}</Text>
        </View>
        <View style={priceView}>
          {loggedIn === 'loggedIn' ? (
            <Text style={priceText}>{RUPEE_SYMOL} {couponViewCart ? totalDiscount : (appliedTotalDiscount || totalDiscount)}</Text>
          ) : (
            <Text style={priceText}>{RUPEE_SYMOL} {couponViewCart ? totalDiscount : (appliedTotalDiscount || totalDiscount)}</Text>
          )}
        </View>
      </View>
      <View style={priceContainer}>
        <View style={titleView}>
          <Text style={priceText}>{AMOUNT_TO_BE_PAID}</Text>
        </View>
        <View style={priceView}>
          {loggedIn === 'loggedIn' ? (
            <Text style={priceText}>{RUPEE_SYMOL} {couponViewCart ? amountToBePaid : (appliedAmountToBePaid || amountToBePaid)}</Text>
          ) : (
            <Text style={priceText}>{RUPEE_SYMOL} {couponViewCart ? amountToBePaid : (appliedAmountToBePaid || amountToBePaid)}</Text>
          )}
        </View>
      </View>
      {(couponViewCart || couponView) && itemDtoList.length > 0 && <View style={[couponContainer, { backgroundColor: WHITE }]}>
        <View style={descStyle}>
          <View >
            <Icons name="local-offer" size={15} style={iconStyle} />
          </View>
          <View>
            <Text style={appliedStyle}>{selectedCouponCode ? couponView : couponViewCart}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={crossAction}>
              <Icon name="x" size={11} style={crossStyle} />
            </TouchableOpacity>
          </View>
        </View>
         <View >
          <Text style={couponDiscountStyle}>{DISCOUNT_PRICE(couponDiscount !== undefined && couponDiscount !== null && couponDiscount !== 0 ? couponDiscount : cartCouponDiscount)}</Text>
        </View> 
      </View>}
    </View>
  );
};

export default PriceDetails;