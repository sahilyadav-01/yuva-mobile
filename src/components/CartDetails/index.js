import React, {useMemo} from 'react';
import {Text, View, FlatList} from 'react-native';
import CartItems from './CartItem';
import {styles} from './style';

const {headingText} = styles();

const CartHeader = ({totalItems}) => {
  return useMemo(
    () => <Text style={headingText}>Total Items ({totalItems})</Text>,
    [totalItems],
  );
};

const CartDetails = props => {
  const {data, onRemove} = props;
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{height: 8}} />}
      ListHeaderComponent={() => <CartHeader totalItems={data?.length} />}
      data={data}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({item, index}) => (
        <CartItems item={item} onPressRemove={onRemove} />
      )}
    />
  );
};

export default CartDetails;
