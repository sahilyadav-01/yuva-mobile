import React from 'react';
import {View} from 'react-native';
import {styles as style} from './styles';
import ProductList from './productList';
import CategoryList from './categoryList';

const ProductHub = ({
  onCategoryViewAllPress,
  showHeading,
  data,
  onAdd,
  categories,
  activeIndex,
  onSelectCategory,
  categoryId,
  hideFooter
}) => {
  const styles = style();
  const renderHeading = showHeading ?? true;
  return (
    <View>
      {categories?.length > 0 && <CategoryList
        categories={categories}
        onCategoryViewAllPress={onCategoryViewAllPress}
        onSelectCategory={onSelectCategory}
        activeIndex={activeIndex}
        renderHeading={renderHeading}
      />}
      <ProductList productList={data?.productList} />
    </View>
  );
};
export default ProductHub;
