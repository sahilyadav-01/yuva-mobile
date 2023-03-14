import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { useCouponCard } from './hooks/useCouponCard';
import {
  APPLY,
  APPLY_COUPON,
  CAPITALIZE_TEXT,
  COUPON_APPLIED,
  COUPON_CODE,
  COUPON_INVALID,
  USE_COUPON,
} from './constant';
import { CYAN_BLUE, GREEN } from '../../styles/colors';
import { redeemCouponsSliceThunk } from '../../store/reducers/CouponSlice';
import { useDispatch } from 'react-redux';

const CouponCard = () => {
  const {
    couponName, setCouponName, coupon, couponView, onApply, couponValue
  } = useCouponCard();
  const dispatch = useDispatch();
  const renderItem = ({ item }) => {
    const Success = () => {
      let couponCode = item.couponCode
      setCouponName(item.couponName);
      dispatch(redeemCouponsSliceThunk({ couponCode }));
    };
    return (
      <TouchableOpacity style={styles.buttonStyles} onPress={Success}>
        <View style={styles.couponContainer}>
          <View style={styles.viewStyles}>
            <Text style={styles.textStyle}>{item.couponCode}</Text>
            <Text style={styles.textStyle1}>{item.description}</Text>
          </View>
          <View
            style={[
              styles.useCouponStyle,
              { backgroundColor: couponView && item.couponName == couponName ? GREEN : CYAN_BLUE },
            ]}>
            {
              item.couponName === couponName ? (
                couponView ? (
                  <Text style={styles.useCouponTextStyle}>{COUPON_APPLIED}</Text>
                ) : (
                  <Text style={styles.useCouponTextStyle}>{COUPON_INVALID}</Text>
                )
              ) : (
                <Text style={styles.useCouponTextStyle}>{USE_COUPON}</Text>
              )
            }
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textStyle}>{APPLY_COUPON}</Text>
      <View style={styles.viewCoupon}>
        <TextInput
          style={styles.textInputStyles}
          placeholder={COUPON_CODE}
          onChangeText={couponValue}
          autoCapitalize={CAPITALIZE_TEXT}
        />
        <TouchableOpacity style={styles.applyStyles} onPress={onApply}>
          <Text style={styles.applyButtonStyles}>{APPLY}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={coupon}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CouponCard;