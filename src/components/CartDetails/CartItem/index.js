import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SVG} from '../../../../assets';
import { REMOVE } from '../constants';
import {styles} from './style';

const CartItem = props => {
  const {
    packageContainer,
    packageName,
    discountText,
    priceText,
    detailsContainer,
    testText,
    buttonContainer,
    removeText,
    priceContainer,
  } = styles();
  const {item: {name:text, discountedCost:discount, cost: price, tests}, onPressRemove} = props;

  const priceComponent = discount === price ? (
    <Text style={priceText}>{`₹ ${price}/-`}</Text>
  ) : (
    <View style={priceContainer}>
      <Text style={discountText}>{`₹ ${price}/-`}</Text>
      <Text style={priceText}>{`₹ ${discount}/-`}</Text>
    </View>
  );

  return (
    <>
      <View style={packageContainer}>
        <Text numberOfLines={2} style={packageName}>
          {text}
        </Text>
        {priceComponent}
      </View>
      <View style={detailsContainer}>
        <Text style={testText}>{tests}</Text>
        <TouchableOpacity style={buttonContainer} onPress={onPressRemove}>
          <SVG.minus />
          <Text style={removeText}>{REMOVE}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartItem;
