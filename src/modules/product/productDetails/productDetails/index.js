import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles as style, width} from './style';

const ProductDetails = ({
  onSelectSize,
  onSelectQuantity,
  activeIndex,
  quantity,
  onAddToCartPress,
  productData,
}) => {
  const styles = style();
  const numColumns = Math.floor((width - 24) / 84);
  const RenderItem = ({item, index}) => {
    if (item !== null)
      return (
        <TouchableOpacity
          onPress={() => onSelectSize(index)}
          style={
            style({
              itemInset: productData?.productPriceResponseDtoForUserList.length / index + 1 !== 1,
              activeItem: activeIndex === index,
            }).quantityTextContainer
          }>
          <Text style={style({activeItem: activeIndex === index}).quantityText}>
            {item?.unit ?? ''}
            {item?.productUnit ?? ''}
          </Text>
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
          <Text style={styles.quantityHeading}>Size</Text>
          <FlatList
            scrollEnabled={false}
            numColumns={numColumns}
            keyExtractor={(_, index) => `size${index}`}
            data={productData?.productPriceResponseDtoForUserList}
            ItemSeparatorComponent={() => <View style={{height: 12}} />}
            renderItem={({item, index}) => (
              <RenderItem item={item} index={index} />
            )}
          />
          <Text style={styles.quantityHeading}>Quantity</Text>
          <View style={styles.quantityPicker}>
            <Text
              onPress={() => onSelectQuantity(false)}
              style={styles.quantityPickerText}>
              -
            </Text>
            <Text style={styles.quantityPickerText}>{quantity}</Text>
            <Text
              onPress={() => onSelectQuantity(true)}
              style={styles.quantityPickerText}>
              +
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onAddToCartPress}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default ProductDetails;
