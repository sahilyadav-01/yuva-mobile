import React from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import {styles as style} from './style';
import {SVG} from '../../../../assets';

const styles = style();

const CartItems = ({item,onPressRemove}) => {
  const discount = item?.cost > item?.discountedCost;
  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <View style={styles.iconContainer}>
        {item?.imageFilepath ? <Image source={{uri:item?.imageFilepath}} style={styles.iconStyle}/> : <SVG.BOOK_TEST_SVG_ICON/>}
        </View>
        <View style={{marginLeft:10}}>
        <Text style={styles.itemName}>{item?.name}</Text>
        <View style={styles.priceContainer}>
        <Text style={[styles.itemCost,{textDecorationLine:discount ? 'line-through' : 'none'}]}>₹ {item?.cost}</Text>
        {discount ? <Text style={styles.discountText}>₹ {item?.discountedCost}</Text> : null}
        </View>
        </View>
      </View>
     <TouchableOpacity onPress={()=>onPressRemove(item)}>
     <SVG.DeleteItem />
     </TouchableOpacity>
    </View>
  );
};

export default CartItems;
