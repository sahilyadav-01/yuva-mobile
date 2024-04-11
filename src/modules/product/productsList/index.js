import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import SearchFilter from './searchFilter';
import GridList from './gridList';
import Header from '../../../components/Header';
import {useProductsList} from './useProductsList';
import {styles as style} from './style';

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
  } = useProductsList();

  if (productList?.data?.length === 0 && productList?.loading && !applyFilter) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header showBackButton={true} title={'Products'} />
      <SearchFilter onFilterPress={onFilterPress} onSearch={onSearch} />
      <GridList data={data} onEndReached={onEndReached} onAdd={onAdd} />
    </View>
  );
}

export default ProductsList;
