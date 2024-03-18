import React from 'react';
import {View} from 'react-native';
import {styles as style} from './styles';
import {useProducts} from './useProducts';
import ProductList from './ProductList';
import FilterView from './FilterView';
import Header from '../../../components/Header';
import LoaderContext from '../../../components/LoaderContext';

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
      <FilterView
        categories={categories}
        productList={productList}
        onFilterPress={onFilterPress}
        onAdvanceFiltersPress={onAdvanceFiltersPress}
      />
      <ProductList
        productList={productList}
        applyFilter={applyFilter}
        data={data}
        pageNo={pageNo}
        onEndReached={onEndReached}
        onAdd={onAdd}
      />
    </View>
  );
};

export default Products;
