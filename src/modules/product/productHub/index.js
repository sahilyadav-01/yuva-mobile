import React from 'react';
import {View} from 'react-native';
import {styles as style} from './styles';
import ProductList from './productList';
import CategoryList from './categoryList';

const ProductHub = ({onCategoryViewAllPress, showHeading, data, onAdd}) => {
  const styles = style();
  const renderHeading = showHeading ?? true;
  return (
    <View style={styles.contentContainer}>
      <CategoryList
        onCategoryViewAllPress={onCategoryViewAllPress}
        renderHeading={renderHeading}
      />
      <ProductList productList={data} onAdd={onAdd} />
    </View>
  );
};
export default ProductHub;
