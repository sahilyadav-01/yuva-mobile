import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles as style} from './styles';
import {MARINER} from '../../../styles/colors';

const ProductFooter = ({pageNo, productList}) => {
  const styles = style();
  if (pageNo > 0 && pageNo < productList?.totalPages) {
    return (
      <View style={styles.listLoader}>
        <ActivityIndicator size={'small'} color={MARINER} />
      </View>
    );
  }
};

export default ProductFooter;
