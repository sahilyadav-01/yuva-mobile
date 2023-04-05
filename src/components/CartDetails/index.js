import React from 'react';
import {Text, View, FlatList} from 'react-native';
import CartItem from './CartItem';
import {styles} from './style';

const CartDetails = props => {
  const {heading,data, onRemove} = props;
  const {detailsContainer, headingText} = styles();
  const RenderItem = ({item, index}) => {
    const onPressRemove = () => {
      onRemove(item);
    }
    return <CartItem item={item} index={index} key={index} onPressRemove={onPressRemove}/>;
  };
  return (
    <View style={detailsContainer}>
      <Text style={headingText}>{heading}</Text>
      <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={RenderItem}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default CartDetails;
