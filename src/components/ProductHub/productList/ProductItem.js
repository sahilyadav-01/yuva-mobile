import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles as style, width} from './style';

const RenderProducts = ({item, index, onAdd}) => {
  const styles = style();
  return (
    <View
      style={[
        styles.subCategoryItem,
        {
          marginRight: index % 2 === 0 ? (width - 40) / 7 : undefined,
        },
      ]}>
      <Image source={{uri: item?.imageFilepath}} style={styles.categoryImage} />
      <View style={styles.separator} />
      <View style={styles.subCategoryDescription}>
        <Text style={styles.productName}>{item?.name}</Text>
      </View>
      <View style={styles.rowContainer}>
        {item?.discountPercentage ? (
          <Text style={styles.discount}>-{item?.discountPercentage}%</Text>
        ) : null}
        <Text style={styles.finalPrice}>₹ {item?.finalPrice}</Text>
      </View>
      <Text style={styles.originalPrice}>M.R.P. ₹ {item?.originalPrice}</Text>
      <TouchableOpacity
        onPress={() => onAdd(item?.productId)}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderProducts;
