import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { useCouponCard } from './hooks/useCouponCard';
import {
  APPLY_COUPON,
  CAPITALIZE_TEXT,
  COUPON_APPLIED,
  PLACEHOLDER_TEXT,
  COUPON_LABEL,
  DISCOUNT,
  DISCOUNT_PERCENTAGE,
  DISCOUNT_UPTO,
  USE_COUPON,
  COUPON_CODE,
} from './constant';
import { GREEN, SLATE_BLUE, WHITE } from '../../styles/colors';
import { redeemCouponsPlanSliceThunk, redeemCouponsSliceThunk, selectedCoupon, selectedPlaneCouponCode } from '../../store/reducers/CouponSlice';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { getCartGuestThunk, getCartUserThunk } from '../../store/reducers/CartSlice';

const CouponCard = (props) => {
  const { isPlane, planeType, planUuid } = props;
  const {
    couponName, setCouponName, coupon, couponView, onApply, onCouponValue
  } = useCouponCard(isPlane, planeType, planUuid);
  const { loggedIn } = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const dispatch = useDispatch();
  const renderItem = ({ item }) => {
    const onSuccess = () => {
      let couponCode = item.couponCode
      dispatch(selectedCoupon({ couponCode }));
      setCouponName(item.couponName);
      if (isPlane) {
        dispatch(selectedPlaneCouponCode({ couponCode: couponCode }));
        dispatch(redeemCouponsPlanSliceThunk({ couponCode, planeType, planUuid }));
      } else {
        dispatch(redeemCouponsSliceThunk({ isLoggedIn, couponCode }));
      }
      if (isLoggedIn) {
        dispatch(getCartUserThunk());
      } else {
        dispatch(getCartGuestThunk());
      }
    };
    return (
      <TouchableOpacity style={styles.buttonStyles} onPress={onSuccess}>
        <View style={[styles.couponContainer, { borderColor: item.couponName === couponName ? (couponView ? GREEN : SLATE_BLUE) : SLATE_BLUE }]}>
          <View style={styles.viewStyles}>
            {item.maxDiscount ? <Text style={styles.textStyle1}>{DISCOUNT_PERCENTAGE(item.discountAmountOrPercentage)}</Text> : <Text style={styles.textStyle1}>{DISCOUNT(item.discountAmountOrPercentage)}</Text>}
            {item.maxDiscount != null && (<Text style={styles.textStyle2}>{DISCOUNT_UPTO(item.maxDiscount)}</Text>)}
            <Text style={styles.textStyle}>{COUPON_CODE(item.couponCode)}</Text>
          </View>
          <View style={[styles.useCouponStyle]}>
            <Text style={[
              styles.useCouponTextStyle3,
              item.couponName === couponName && couponView ? GREEN : null,
              item.couponName === couponName && couponView ? styles.useCouponTextStyle1 : null,
            ]}>
              {item.couponName === couponName && couponView ? COUPON_APPLIED : USE_COUPON}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textStyling}>{APPLY_COUPON}</Text>
      <View style={styles.viewCoupon}>
        <TextInput
          style={styles.textInputStyles}
          placeholder={PLACEHOLDER_TEXT}
          onChangeText={onCouponValue}
          autoCapitalize={CAPITALIZE_TEXT}
        />
        <TouchableOpacity style={styles.applyStyles} onPress={onApply}>
          <Icon name="arrow-long-right" color={WHITE} size={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.couponLabelStyles}>{COUPON_LABEL}</Text>
      <FlatList
        data={coupon}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CouponCard;