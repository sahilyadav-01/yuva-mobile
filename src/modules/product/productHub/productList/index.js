import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles as style} from './style';
import RenderProducts from './ProductItem';
import {useProductList} from './useProductList';

const ProductList = ({productList, onAdd, categoryId, hideFooter:hideFooterButton}) => {
  const {onViewAll} = useProductList();
  const styles = style();
  const hideFooter = hideFooterButton ?? false;
  const ListFooter = (item) => {
    if(hideFooter) return null;
    return (
      <TouchableOpacity onPress={() => onViewAll({...item, categoryId})} style={styles.footerContainer}>
        <Text style={styles.viewAllText}>View All Products</Text>
      </TouchableOpacity>
    );
  };
  return productList?.map(item => (
    <>
      <View style={styles.subCategoryNameContainer}>
        {item?.subCategoryId && (
          <>
            <View style={styles.subLine} />
            <Text style={styles.subCategoryNameStyle}>
              {item?.subCategoryName}{' '}
            </Text>
            <View style={styles.subLine} />
          </>
        )}
      </View>
      {item?.productResponseDtoForUserList?.length > 0 && (
        <FlatList
          key={(_, index) => `product${index}`}
          numColumns={2}
          style={styles.subCategoryList}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          data={item?.productResponseDtoForUserList}
          renderItem={({item, index}) => (
            <RenderProducts index={index} item={item} onAdd={onAdd} />
          )}
          ListFooterComponent={ListFooter}
        />
      )}
    </>
  ));
};

export default ProductList;
