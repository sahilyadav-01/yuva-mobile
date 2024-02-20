import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {useProducts} from './useProducts';
import {styles as style} from './styles';
import RenderProducts from '../productHub/productList/ProductItem';
import Header from '../../../components/Header';

const Products = () => {
  const {onAdd, productList} = useProducts();
  const styles = style();
  const ProductList = () => {
    if (productList?.data?.length === 0 && productList?.loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
    const ListFooter = () => {
        return (
            <View style={{marginTop:8,alignItems:'center'}}>
                <ActivityIndicator size={'small'}/>
            </View>
        );
    }
    return (
      <FlatList
        key={(_, index) => `product${index}`}
        numColumns={2}
        style={styles.subCategoryList}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        data={productList?.data}
        renderItem={({item, index}) => (
          <RenderProducts index={index} item={item} onAdd={() => onAdd(item)} />
        )}
        ListFooterComponent={ListFooter}
      />
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
      <ProductList />
    </View>
  );
};

export default Products;
