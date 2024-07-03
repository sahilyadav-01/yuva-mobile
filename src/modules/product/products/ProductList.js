import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import RenderProducts from '../productHub/productList/ProductItem';
import ProductFooter from './ProductFooter';
import {styles as style} from './styles';
import { MARINER } from '../../../styles/colors';

const ProductList = ({
  productList,
  applyFilter,
  data,
  pageNo,
  onEndReached,
  onAdd
}) => {
  const styles = style();
  if (productList?.data?.length === 0 && productList?.loading && !applyFilter) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} color={MARINER} />
      </View>
    );
  }
  return (
    <FlatList
      keyExtractor={useCallback(item => item?.productId, [])}
      numColumns={2}
      style={styles.subCategoryList}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      data={data}
      renderItem={({item, index}) => (
        <RenderProducts index={index} item={item} onAdd={() => onAdd(item)} />
      )}
      ListFooterComponent={
        <ProductFooter pageNo={pageNo} productList={productList} />
      }
      onEndReached={onEndReached}
    />
  );
};

export default ProductList;
