import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import ProductList from '../../../modules/product/products';

const Products = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ProductList
        navigation={props?.navigation}
        params={props?.route?.params}
      />
    </SafeAreaView>
  );
};

export default Products;
