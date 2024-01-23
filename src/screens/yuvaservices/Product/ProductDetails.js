import React from 'react';
import {SafeAreaView} from 'react-native';
import Product from '../../../modules/product/productDetails';
import {styles} from './styles';

const ProductDetails = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Product />
    </SafeAreaView>
  );
};

export default ProductDetails;
