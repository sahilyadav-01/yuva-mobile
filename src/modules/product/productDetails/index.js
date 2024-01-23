import React from 'react';
import {ScrollView, View, ActivityIndicator, Text} from 'react-native';
import {styles as style, width} from './style';
import {useProductDetails} from './hooks/useProductDetails';
import Product from './productDetails/index';
import Header from '../../../components/Header';
import ProductHeader from './productHeader';
import ProductDescription from './productDescription';

const ProductDetails = () => {
  const {
    productDetails,
    flatListRef,
    onArrowPress,
    activeIndex,
    onSelectSize,
    onSelectQuantity,
    quantity,
    onAddToCartPress,
    onHeadingPress,
  } = useProductDetails();
  const styles = style();
  return (
    <>
      <Header
        initial={null}
        showSearch={false}
        showLocation={false}
        homeSearch={true}
      />
      {productDetails.loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {productDetails.error && (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>Error Fetching Product Details</Text>
        </View>
      )}
      {!productDetails.loading && productDetails?.data === null && (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>Unable to fetch Product Details </Text>
        </View>
      )}
      {!productDetails.loading && productDetails?.data !== null && (
        <ScrollView style={styles.scrollViewContainer}>
          <ProductHeader
            flatListRef={flatListRef}
            onArrowPress={onArrowPress}
            productData={productDetails.data}
          />
          <Product
            onSelectSize={onSelectSize}
            onSelectQuantity={onSelectQuantity}
            activeIndex={activeIndex}
            quantity={quantity}
            onAddToCartPress={onAddToCartPress}
            productData={productDetails.data}
          />
          <ProductDescription onHeadingPress={onHeadingPress} />
        </ScrollView>
      )}
    </>
  );
};

export default ProductDetails;
