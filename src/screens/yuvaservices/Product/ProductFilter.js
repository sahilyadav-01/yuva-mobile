import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import Filter from '../../../modules/product/filter';

const ProductFilter = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Filter navigation={props?.navigation} params={props?.route?.params}/>
    </SafeAreaView>
  );
};

export default ProductFilter;
