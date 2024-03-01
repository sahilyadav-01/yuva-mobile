import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Header from '../../../components/Header';
import ProductFilters from './ProductFilters';
import {useFilter} from './useFilter';
import {styles as style} from './style';

const ProductFilter = ({navigation}) => {
  const {
    data,
    onCheck,
    categoryDropdown,
    subCategoryDropdown,
    brandsDropdown,
    onApplyFilter,
    onClearFilter,
    getListEmptyText,
  } = useFilter(navigation);
  const styles = style();

  const FilterButtons = () => {
    const filterDisable = categoryDropdown?.data?.length === 0 && subCategoryDropdown?.data?.length === 0 && brandsDropdown?.data?.length === 0;
    return (
      <View style={styles.filterButtonContainer}>
        <TouchableOpacity disabled={filterDisable} onPress={onApplyFilter} style={styles.filterContainer}>
          <Text style={styles.buttonText}>Apply Filter</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeparator}/>
        <TouchableOpacity onPress={onClearFilter} style={styles.filterContainer}>
          <Text style={styles.buttonText}>Clear Filter</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Content = () => {
    if (
      (categoryDropdown?.loading &&
        subCategoryDropdown?.loading &&
        brandsDropdown?.loading) ||
      data.length < 3
    ) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    } else if (
      categoryDropdown?.error &&
      subCategoryDropdown?.error &&
      brandsDropdown?.error
    ) {
      return (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>Error Fetching Product Details</Text>
        </View>
      );
    } else if (data.length === 3)
      return (
        <View style={styles.contentContainer}>
          <FilterButtons />
          <ProductFilters
            data={data}
            onCheck={onCheck}
            brandsData={brandsDropdown?.data}
            categoryData={categoryDropdown?.data}
            subCategoryData={subCategoryDropdown?.data}
            getListEmptyText={getListEmptyText}
          />
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
      <Content />
    </View>
  );
};

export default ProductFilter;
