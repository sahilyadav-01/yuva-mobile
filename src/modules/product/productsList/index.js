import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import SearchFilter from './searchFilter';
import GridList from './gridList';
import Header from '../../../components/Header';
import {useProductsList} from './useProductsList';
import {styles as style} from './style';
import { MARINER } from '../../../styles/colors';

function ProductsList() {
  const styles = style();
  const {
    onFilterPress,
    productList,
    applyFilter,
    onEndReached,
    data,
    onSearch,
    onAdd,
    getData
  } = useProductsList();

  if (productList?.data?.length === 0 && productList?.loading && !applyFilter) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} color={MARINER} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header showBackButton={true} title={'Products'} />
      <SearchFilter onFilterPress={onFilterPress} onSearch={onSearch} filterData={productList?.productFilter} />
      <GridList data={getData(data)} onEndReached={onEndReached} onAdd={onAdd} />
    </View>
  );
}

export default ProductsList;
