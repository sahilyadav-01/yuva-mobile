import React, { useCallback } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import RenderProducts from '../productHub/productList/ProductItem';
import Header from '../../../components/Header';
import LoaderContext from '../../../components/LoaderContext';
import {styles as style} from './styles';
import {SVG} from '../../../../assets';
import {useProducts} from './useProducts';

const Products = ({navigation}) => {
  const {
    onAdd,
    productList,
    categories,
    applyFilter,
    pageNo,
    data,
    onFilterPress,
    onAdvanceFiltersPress,
    onEndReached,
  } = useProducts(navigation);
  const styles = style();

  const ProductList = () => {
    if (
      productList?.data?.length === 0 &&
      productList?.loading &&
      !applyFilter
    ) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }

    const ListFooter = () => {
      if (pageNo > 0 && pageNo < productList?.totalPages)
        return (
          <View style={styles.listLoader}>
            <ActivityIndicator size={'small'} />
          </View>
        );
    };
    return (
      <FlatList
        keyExtractor={useCallback((item) => item?.productId,[])}
        numColumns={2}
        style={styles.subCategoryList}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        data={data}
        renderItem={({item, index}) => (
          <RenderProducts index={index} item={item} onAdd={() => onAdd(item)} />
        )}
        ListFooterComponent={ListFooter}
        onEndReached={onEndReached}
      />
    );
  };

  const FilterView = () => {
    return (
      <View style={styles.filterContainer}>
        {categories?.slice(0, 3)?.map(item => {
          const itemExists =
            productList?.productFilter?.categoryIdList.includes(item?.id);
          let filterContainerStyle = styles.filterCardInactive;
          let filterTextStyle = styles.filterTextInactive;
          if (itemExists) {
            filterContainerStyle = styles.filterCardActive;
            filterTextStyle = styles.filterTextActive;
          }
          return (
            <TouchableOpacity
              onPress={() => onFilterPress(item)}
              style={[styles.filterCard, filterContainerStyle]}>
              <Text style={[styles.filterText, filterTextStyle]}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={onAdvanceFiltersPress}
          style={styles.filterCard}>
          <SVG.ArrowRight />
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
        title={'Products'}
      />
      <LoaderContext showLoader={applyFilter} />
      <FilterView />
      <ProductList />
    </View>
  );
};

export default Products;
