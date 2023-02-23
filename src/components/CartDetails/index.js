import React from 'react';
import {Text, View, FlatList} from 'react-native';
import CartItem from './CartItem';
import {styles} from './style';

const CartDetails = props => {
  const {heading,data} = props;
  const {detailsContainer, headingText} = styles();
  const RenderItem = ({item, index}) => {
    return <CartItem item={item} index={index} />;
  };
  return (
    <View style={detailsContainer}>
      <Text style={headingText}>{heading}</Text>
      <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default CartDetails;
