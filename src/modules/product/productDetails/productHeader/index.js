import React from 'react';
import {Text, FlatList, View, TouchableOpacity, Image} from 'react-native';
import {styles as style, width} from './style';
import {PNG, SVG} from '../../../../../assets';

const ProductHeader = ({flatListRef, onArrowPress, productData}) => {
  const styles = style();
  const ProductItem = ({item, index}) => {
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => onArrowPress(false, index)}
          style={styles.leftContainer}>
          <SVG.ArrowRight color="#000" transform={[{rotateY: '180deg'}]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onArrowPress(true, index)}
          style={styles.rightContainer}>
          <SVG.ArrowRight color="#000" />
        </TouchableOpacity>
        <Image source={{uri: item?.imageFilepath}} style={styles.imageStyle} resizeMode='cover'/>
      </View>
    );
  };
  return (
    <>
      <FlatList
        ref={ref => (flatListRef.current = ref)}
        initialNumToRender={1}
        horizontal
        scrollEnabled={false}
        data={productData.productImageList}
        keyExtractor={(_, index) => `productDetails${index}`}
        renderItem={({item, index}) => (
          <ProductItem item={item} index={index} />
        )}
      />
      <Text style={styles.productName}>{productData?.name}</Text>
    </>
  );
};

export default ProductHeader;
