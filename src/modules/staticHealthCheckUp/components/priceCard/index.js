import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PRICE, PRICE_1, PRICE_2, PRICE_3} from '../../constant';

const PriceCard = () => {
  return (
    <View style={styles.priceContainer}>
      <View style={styles.marketPrice}>
        <Text style={styles.mPriceText}>{PRICE}</Text>
        <Text style={styles.price}>{PRICE_2}</Text>
      </View>
      <View style={styles.offerPrice}>
        <Text style={styles.oPriceText}>{PRICE_1}</Text>
        <Text style={styles.price}>{PRICE_3}</Text>
      </View>
    </View>
  );
};

export default PriceCard;
