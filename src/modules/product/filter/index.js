import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../../components/Header';
import ProductFilters from './ProductFilters';
import {useFilter} from './useFilter';
import {styles as style} from './style';

const ProductFilter = () => {
  const {data, onCheck} = useFilter();
  const styles = style();

  const FilterButtons = () => {
    return (
      <View style={styles.filterButtonContainer}>
        <TouchableOpacity style={styles.filterContainer}>
          <Text>Apply Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterContainer}>
          <Text>Clear Filter</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        initial={null}
        showSearch={false}
        showLocation={false}
        homeSearch={true}
        title={'Product Filters'}
      />
      <View style={styles.contentContainer}>
        <FilterButtons />
        <ProductFilters data={data} onCheck={onCheck} />
      </View>
    </View>
  );
};

export default ProductFilter;
