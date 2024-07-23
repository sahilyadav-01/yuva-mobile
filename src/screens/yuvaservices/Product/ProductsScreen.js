import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import ProductsList from '../../../modules/product/productsList';

const Products = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ProductsList />
    </SafeAreaView>
  );
};

export default Products;
