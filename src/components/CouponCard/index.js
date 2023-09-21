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
import { GREEN, SLATE_BLUE, WHITE,DARK_GRAY } from '../../styles/colors';
import { redeemCouponsPlanSliceThunk, redeemCouponsSliceThunk, selectedCoupon } from '../../store/reducers/CouponSlice';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { getCartGuestThunk, getCartUserThunk } from '../../store/reducers/CartSlice';
import { useRoute } from '@react-navigation/native';

const CouponCard = (props) => {
  const route = useRoute();
  const { isPlan, planType ,planUuid } = props;
  const { coupon, couponView, onApply, onCouponValue, planeCouponCode ,selectedCouponCode, couponViewCart,planTypee} = useCouponCard( isPlan, planUuid,planType );
  const { loggedIn } = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const dispatch = useDispatch();
  const renderItem = ({ item, index }) => {
    const onSuccess = () => {
      let couponCode = item.couponCode
      dispatch(selectedCoupon({ couponCode }));
      if (isPlan) {
        dispatch(redeemCouponsPlanSliceThunk({ couponCode, planUuid ,planType:planTypee }));
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
      <TouchableOpacity style={styles.buttonStyles} onPress={onSuccess} key={index}>
        <View style={[styles.couponContainer, { borderColor: ((item.couponCode === selectedCouponCode && (couponView||planeCouponCode)) || (item.couponCode === couponViewCart && route.name === 'Cart') ) ? GREEN : SLATE_BLUE }]}>
          <View style={styles.viewStyles}>
            {item.maxDiscount ? <Text style={styles.textStyle1}>{DISCOUNT_PERCENTAGE(item.discountAmountOrPercentage)}</Text> : <Text style={styles.textStyle1}>{DISCOUNT(item.discountAmountOrPercentage)}</Text>}
            {item.maxDiscount != null && (<Text style={styles.textStyle2}>{DISCOUNT_UPTO(item.maxDiscount)}</Text>)}
            <Text style={styles.textStyle}>{COUPON_CODE(item.couponCode)}</Text>
          </View>
          <View style={[styles.useCouponStyle]}>
            <Text style={[
              styles.useCouponTextStyle3,
              ((item.couponCode === selectedCouponCode && (couponView||planeCouponCode)) || (item.couponCode === couponViewCart && route.name === 'Cart'))  ? styles.useCouponTextStyle1 : null,
            ]}>
              {((item.couponCode === selectedCouponCode && (couponView||planeCouponCode)) || (item.couponCode === couponViewCart && route.name === 'Cart')) ? COUPON_APPLIED : USE_COUPON}
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
          placeholderTextColor={DARK_GRAY}
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
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderItem}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default CouponCard;