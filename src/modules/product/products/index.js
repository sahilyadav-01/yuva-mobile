import React from 'react';
import {FlatList, View, ActivityIndicator,Text, TouchableOpacity} from 'react-native';
import {useProducts} from './useProducts';
import {styles as style} from './styles';
import RenderProducts from '../productHub/productList/ProductItem';
import Header from '../../../components/Header';
import { SVG } from '../../../../assets';
import LoaderContext from '../../../components/LoaderContext';

const Products = ({navigation}) => {
  const {onAdd, productList,categories,applyFilter,onFilterPress,onAdvanceFiltersPress} = useProducts(navigation);
  const styles = style();

  const ProductList = () => {
    if (productList?.data?.length === 0 && productList?.loading && !applyFilter) {
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

  const FilterView = () => {
    return (
      <View style={styles.filterContainer}>
      {categories?.slice(0,3)?.map((item)=>{
        const itemExists = productList?.productFilter?.categoryIdList.includes(item?.id);
        return (
          <TouchableOpacity onPress={()=>onFilterPress(item)} style={[styles.filterCard,itemExists?styles.filterCardActive:styles.filterCardInactive]}>
            <Text style={[styles.filterText,itemExists?styles.filterTextActive:styles.filterTextInactive]}>{item?.name}</Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity onPress={onAdvanceFiltersPress} style={styles.filterCard}>
         <SVG.ArrowRight/>
      </TouchableOpacity>
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        initial={null}
        showSearch={false}
        showLocation={false}
        homeSearch={true}
        title={'Products'}
      />
      <LoaderContext showLoader={productList?.loading || applyFilter}/>
      <FilterView/>
      <ProductList />
    </View>
  );
};

export default Products;
