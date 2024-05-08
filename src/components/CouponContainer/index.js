import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import {useCouponCard} from './hooks/useCouponCard';
import {
  APPLY_COUPON,
  CAPITALIZE_TEXT,
  COUPON_APPLIED,
  PLACEHOLDER_TEXT,
  COUPON_LABEL,
  NO_COUPON_TEXT,
  DISCOUNT,
  DISCOUNT_PERCENTAGE,
  DISCOUNT_UPTO,
  USE_COUPON,
  COUPON_CODE,
} from './constant';
import {
  GREEN,
  SLATE_BLUE,
  WHITE,
  DARK_GRAY,
  MARINER,
  BLACK,
} from '../../styles/colors';
import {
  redeemCouponsPlanSliceThunk,
  redeemCouponsSliceThunk,
  selectedCoupon,
} from '../../store/reducers/CouponSlice';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import {getCartUserThunk} from '../../store/reducers/CartSlice';
import {useRoute} from '@react-navigation/native';

const CouponCard = props => {
  const route = useRoute();
  const {isPlan, planType, planUuid} = props;
  const {
    coupon,
    couponView,
    onApply,
    onCouponValue,
    planeCouponCode,
    selectedCouponCode,
    couponViewCart,
    planTypee,
  } = useCouponCard(isPlan, planUuid, planType);
  const {loggedIn} = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const dispatch = useDispatch();
  const renderItem = ({item, index}) => {
    const onSuccess = () => {
      let couponCode = item.couponCode;
      dispatch(selectedCoupon({couponCode}));
      if (isPlan) {
        dispatch(
          redeemCouponsPlanSliceThunk({
            couponCode,
            planUuid,
            planType: planTypee,
          }),
        );
      } else {
        dispatch(redeemCouponsSliceThunk({isLoggedIn, couponCode}));
      }
      dispatch(getCartUserThunk());
    };
    return (
      <TouchableOpacity onPress={onSuccess} key={index}>
        <View
          style={[
            styles.couponContainer,
            {
              borderColor:
                (item.couponCode === selectedCouponCode &&
                  (couponView || planeCouponCode)) ||
                (item.couponCode === couponViewCart && route.name === 'Cart')
                  ? MARINER
                  : SLATE_BLUE,
            },
          ]}>
          <View style={styles.viewStyles}>
            {item.maxDiscount ? (
              <Text style={styles.discount}>
                {DISCOUNT_PERCENTAGE(item.discountAmountOrPercentage)}
              </Text>
            ) : (
              <Text style={styles.discount}>
                {DISCOUNT(item.discountAmountOrPercentage)}
              </Text>
            )}
            <Text style={styles.couponTextStyle}>
              {COUPON_CODE(item.couponCode)}
            </Text>
          </View>

          <Text
            style={[
              styles.couponStatus,
              (item.couponCode === selectedCouponCode &&
                (couponView || planeCouponCode)) ||
              (item.couponCode === couponViewCart && route.name === 'Cart')
                ? styles.useCouponTextStyle1
                : null,
            ]}>
            Applied
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
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
          <Text style={styles.couponText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.couponLabelStyles}>
        {coupon.length >= 1 ? `${COUPON_LABEL} (${coupon?.length})` : NO_COUPON_TEXT}
      </Text>
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
