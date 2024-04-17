import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles as style} from './style';
import {SVG} from '../../../../../assets';

const styles = style();

const CartContainer = ({onAddProduct}) => {
  return (
    <TouchableOpacity onPress={onAddProduct} style={styles.iconContainer}>
      <SVG.ProductCart />
    </TouchableOpacity>
  );
};

const Details = ({item}) => {
  return (
    <View>
      <View style={styles.rowView}>
        <Text style={styles.priceText}>₹ {item?.originalPrice}</Text>
        <View style={styles.itemGap} />
        <DiscountContainer
          discountPercentage={item?.discountPercentage ?? ''}
        />
      </View>
      <Text style={styles.discountPrice}>₹ {item?.finalPrice}</Text>
    </View>
  );
};

const DetailsContainer = ({item, onAddProduct}) => {
  return (
    <View style={styles.rowContainer}>
      <Details item={item} />
      <CartContainer onAddProduct={onAddProduct} />
    </View>
  );
};

const ProductName = ({name}) => {
  return (
    <View style={styles.headingContainer}>
    <Text numberOfLines={2} style={styles.heading}>
      {name}
    </Text>
    </View>
  );
};

const DiscountContainer = ({item}) => {
  return item?.discountPercentage ? (
    <View style={styles.discountContainer}>
      <Text style={styles.offerText}>-{discountPercentage}%</Text>
    </View>
  ) : null;
};

function ProductItem({item,onAdd,leftAlign,marginRight,container}) {
  const onAddProduct = () => onAdd(item);
  return (
    <View style={[style(leftAlign,marginRight ?? 16).productItemContainer,container]}>
      <Image
        source={{uri: item?.imageFilepath}}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <ProductName name={item?.name} />
      <DetailsContainer item={item} onAddProduct={onAddProduct} />
    </View>
  );
}

export default ProductItem;
