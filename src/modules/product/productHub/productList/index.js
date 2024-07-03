import React from 'react';
import {View, ScrollView} from 'react-native';
import ProductItem from '../../productsList/gridList/ProductItem';
import {styles as style} from './style';

const ProductList = ({productList, onAdd}) => {
  const styles = style();
  if (productList?.data?.length > 0) {
    return (
      <ScrollView horizontal>
        {productList?.data?.map((item, index) => {
          return (
            <View style={{flex: 1}}>
              <ProductItem
                item={item}
                index={index}
                onAdd={() => onAdd(item?.productId)}
                leftAlign={true}
                marginRight={0}
                container={styles.productItemContainerStyle}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
};

export default ProductList;
