import React from 'react';
import {ScrollView, View, ActivityIndicator, Text} from 'react-native';
import {styles as style} from './style';
import {useProductDetails} from './hooks/useProductDetails';
import Product from './productDetails/index';
import ProductHeader from './productHeader';
import ProductDescription from './productDescription';
import Header from '../../../components/Header';
import {MARINER} from '../../../styles/colors';

const ProductDetails = ({productId, navigation}) => {
  const {
    productDetails,
    flatListRef,
    onArrowPress,
    activeIndex,
    onSelectSize,
    onSelectQuantity,
    quantity,
    onAddToCartPress,
    currentIndex,
    disabled,
    fetchProductDetails,
    fetchNutritionalValue,
  } = useProductDetails(productId, navigation);
  const styles = style();
  return (
    <>
      <Header
        initial={null}
        showSearch={false}
        showLocation={false}
        homeSearch={true}
        title="Product Details"
      />
      {productDetails?.loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={MARINER} />
        </View>
      )}
      {productDetails?.error && (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>Error Fetching Product Details</Text>
        </View>
      )}
      {!productDetails?.loading && productDetails?.data === null && (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>Unable to fetch Product Details </Text>
        </View>
      )}
      {!productDetails?.loading && productDetails?.data !== null && (
        <ScrollView style={styles.scrollViewContainer}>
          <ProductHeader
            flatListRef={flatListRef}
            onArrowPress={onArrowPress}
            productData={productDetails.data}
            currentIndex={currentIndex}
            onSelectQuantity={onSelectQuantity}
            activeIndex={activeIndex}
            quantity={quantity}
          />
          <Product
            onSelectSize={onSelectSize}
            onSelectQuantity={onSelectQuantity}
            activeIndex={activeIndex}
            quantity={quantity}
            onAddToCartPress={onAddToCartPress}
            productData={productDetails.data}
            disabled={disabled}
          />
          <ProductDescription
            productDetails={fetchProductDetails()}
            nutritionalValue={fetchNutritionalValue()}
          />
        </ScrollView>
      )}
    </>
  );
};

export default ProductDetails;
