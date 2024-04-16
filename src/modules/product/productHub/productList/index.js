import React from 'react';
import {View} from 'react-native';
import ProductItem from '../../productsList/gridList/ProductItem';
import {styles as style} from './style';

const ProductList = ({productList}) => {
  const styles = style();
  if (productList[0]?.productResponseDtoForUserList?.length > 0) {
    return (
      <View style={styles.productContainer}>
        {[...productList[0]?.productResponseDtoForUserList]
          ?.splice(0, 3)
          .map((item, index) => {
            return (
              <View style={{flex: 1}}>
                <ProductItem
                  item={item}
                  index={index}
                  onAdd={() => {}}
                  leftAlign={{left: index % 3 < 2}}
                  marginRight={8}
                  container={styles.productItemContainerStyle}
                />
              </View>
            );
          })}
      </View>
    );
  }
};

export default ProductList;
