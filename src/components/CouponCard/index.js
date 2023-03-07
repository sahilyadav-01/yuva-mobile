import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {APPLY, APPLY_COUPON, COUPON, COUPON_CODE, USE_COUPON} from './constant';

const CouponCard = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.buttonStyles}>
        <View style={styles.couponContainer}>
          <View style={styles.viewStyles}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text style={styles.textStyle1}>{item.data}</Text>
          </View>
          <View style={styles.useCouponStyle}>
            <Text style={styles.useCouponTextStyle}>{USE_COUPON}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textStyle}>{APPLY_COUPON}</Text>
      <View style={styles.viewCoupon}>
        <TextInput style={styles.textInputStyles} placeholder={COUPON_CODE} />
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
