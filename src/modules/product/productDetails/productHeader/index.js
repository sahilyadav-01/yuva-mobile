import React from 'react';
import {Text, FlatList, View, TouchableOpacity, Image} from 'react-native';
import {styles as style} from './style';
import {SVG} from '../../../../../assets';

const ProductHeader = ({
  flatListRef,
  productData,
  currentIndex: activeIndex,
  onSelectQuantity,
  quantity,
}) => {
  const styles = style();
  const ProductItem = ({item, index}) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item?.imageFilepath}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>
    );
  };
  return (
    <>
      <FlatList
        ref={ref => (flatListRef.current = ref)}
        initialNumToRender={1}
        horizontal
        scrollEnabled={true}
        data={productData.productImageList}
        keyExtractor={(_, index) => `productDetails${index}`}
        renderItem={({item, index}) => (
          <ProductItem item={item} index={index} />
        )}
      />
      <View style={styles.scrollIndicatorContainer}>
        {productData.productImageList?.map((_, index) => {
          const currentIndex = activeIndex === index;
          return <View style={style({currentIndex}).scrollIndicator} />;
        })}
      </View>
      <View style={styles.productNameContainer}>
        <Text style={styles.productName}>{productData?.name}</Text>
        <View style={styles.quantityDetails}>
          <TouchableOpacity
            onPress={() => onSelectQuantity(false)}
            style={styles.quantityContainer}>
            <SVG.ProductRemove />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => onSelectQuantity(true)}
            style={styles.quantityContainer}>
            <SVG.ProductAdd />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProductHeader;
