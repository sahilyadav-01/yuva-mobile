import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {
  APPLY,
  APPLY_COUPON,
  COUPON,
  COUPON_APPLIED,
  COUPON_CODE,
  USE_COUPON,
} from './constant';
import BackgroundImage from '../../../assets/background';
import {CYAN_BLUE, GREEN, RED} from '../../styles/colors';

const CouponCard = () => {
  const [couponName, setCouponName] = useState('');

  const renderItem = ({item}) => {
    const Success = () => {
      setCouponName(item.name);
    };
    return (
      <TouchableOpacity style={styles.buttonStyles} onPress={Success}>
        <View style={styles.couponContainer}>
          <View style={styles.viewStyles}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text style={styles.textStyle1}>{item.data}</Text>
          </View>
          <View
            style={[
              styles.useCouponStyle,
              {backgroundColor: item.name == couponName ? GREEN : CYAN_BLUE},
            ]}>
            {item.name == couponName ? (
              <Text style={styles.useCouponTextStyle}>{COUPON_APPLIED}</Text>
            ) : (
              <Text style={styles.useCouponTextStyle}>{USE_COUPON}</Text>
            )}
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
          value={couponName}
          placeholder={COUPON_CODE}
        />
        <TouchableOpacity style={styles.applyStyles}>
          <Text style={styles.applyButtonStyles}>{APPLY}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={COUPON}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CouponCard;
