import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles as style} from './styles';

const ProductFooter = ({pageNo, productList}) => {
  const styles = style();
  if (pageNo > 0 && pageNo < productList?.totalPages)
    return (
      <View style={styles.listLoader}>
        <ActivityIndicator size={'small'} />
      </View>
    );
};

export default ProductFooter;
