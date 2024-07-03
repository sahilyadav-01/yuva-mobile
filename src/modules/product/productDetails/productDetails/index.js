import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles as style} from './style';
import { ANAKIVA, MARINER } from '../../../../styles/colors';

const ProductDetails = ({
  onSelectSize,
  activeIndex,
  onAddToCartPress,
  productData,
  disabled
}) => {
  const styles = style();
  const RenderItem = ({item, index}) => {
    if (item !== null)
      return (
        <TouchableOpacity onPress={() => onSelectSize(index)} style={{...styles.sizeContainer,backgroundColor:activeIndex === index ? MARINER : '#FAFAFA',marginLeft:8}}>
        <Text style={styles.itemText}>{item?.unit} {item?.productUnit}</Text>
       </TouchableOpacity>
      );
  };
  if (
    typeof productData?.productPriceResponseDtoForUserList === 'object' &&
    productData?.productPriceResponseDtoForUserList?.length > 0
  ) {
    const productItem =
      productData?.productPriceResponseDtoForUserList[activeIndex];
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.priceContainer}>
          <Text
            style={styles.finalPriceText}>{`₹${productItem.finalPrice}`}</Text>
          {productItem.discountPercentage ? (
            <>
              <Text style={styles.originalPriceText}>
                {`₹${productItem.originalPrice}`}
              </Text>
              <Text style={styles.discountText}>
                {`${productItem.discountPercentage}% off`}
              </Text>
            </>
          ) : null}
        </View>
        <View style={styles.quantityContainer}>
         <View style={styles.sizeContainer}>
          <Text style={styles.itemText}>Size / Weight</Text>
         </View>
         <ScrollView horizontal>
         {productData?.productPriceResponseDtoForUserList.map((item,index)=><RenderItem item={item} index={index}/>)}
          </ScrollView>
        </View>
        <TouchableOpacity
          disabled={disabled}
          onPress={onAddToCartPress}
          style={[styles.buttonContainer,{backgroundColor:disabled ? ANAKIVA: MARINER}]}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default ProductDetails;
