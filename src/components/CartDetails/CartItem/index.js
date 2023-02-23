import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SVG} from '../../../../assets';
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
  const {item: {packageName:text, discount, price, tests}} = props;
  return (
    <>
      <View style={packageContainer}>
        <Text numberOfLines={2} style={packageName}>
          {text}
        </Text>
        <View style={priceContainer}>
          <Text style={discountText}>{discount}</Text>
          <Text style={priceText}>{price}</Text>
        </View>
      </View>
      <View style={detailsContainer}>
        <Text style={testText}>{tests}</Text>
        <TouchableOpacity style={buttonContainer}>
          <SVG.minus />
          <Text style={removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartItem;
