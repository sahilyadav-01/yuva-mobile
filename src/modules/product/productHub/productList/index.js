import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles as style} from './style';
import RenderProducts from './ProductItem';

const ProductList = ({productList, onAdd}) => {
  const styles = style();
  return productList?.map((item) => (
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
        />
      )}
    </>
  ));
};

export default ProductList;
