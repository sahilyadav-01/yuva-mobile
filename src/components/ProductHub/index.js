import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {PRODUCT_HUB, VIEW_ALL} from './constant';
import {styles as style, width} from './styles';

const ProductHub = ({
  onCategoryViewAllPress,
  showHeading,
  data,
  onAdd,
  categories,
  activeIndex,
  onSelectCategory,
}) => {
  const styles = style();
  const renderHeading = showHeading ?? true;

  const Header = () => {
    if (renderHeading)
      return (
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{PRODUCT_HUB} </Text>
            <View style={styles.textContainer}>
              <TouchableOpacity onPress={() => onCategoryViewAllPress()}>
                <Text style={styles.LandingPageText2}>{VIEW_ALL}</Text>
              </TouchableOpacity>
              <View style={styles.line} />
            </View>
          </View>
          <View style={styles.categoryHeadingContainer}>
            {categories.map((item, index) => {
              return (
                <Text
                  onPress={() => onSelectCategory(index)}
                  style={[
                    styles.categoryName,
                    {fontSize: activeIndex === index ? 18 : undefined},
                  ]}>
                  {item}
                </Text>
              );
            })}
          </View>
        </>
      );
  };

  const ProductList = ({productList}) => {
    return productList.map((item, index) => {
      return (
        <>
          <View style={styles.subCategoryNameContainer}>
            {item?.subCategoryId && (
              <>
                <View style={styles.subLine} />
                <Text style={styles.subCategoryNameStyle}>
                  {item.subCategoryName}{' '}
                </Text>
                <View style={styles.subLine} />
              </>
            )}
          </View>
          {productList[index]?.productResponseDtoForUserList?.length > 0 && (
            <FlatList
              key={(_, index) => `product${index}`}
              numColumns={2}
              style={styles.subCategoryList}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              data={productList[index]?.productResponseDtoForUserList}
              renderItem={({item, index}) => (
                <RenderProducts index={index} item={item} />
              )}
            />
          )}
        </>
      );
    });
  };

  const RenderProducts = ({item, index}) => {
    return (
      <View
        style={[
          styles.subCategoryItem,
          {
            marginRight: index % 2 === 0 ? (width - 40) / 7 : undefined,
          },
        ]}>
        <Image
          source={{uri: item?.imageFilepath}}
          style={styles.categoryImage}
        />
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

  return (
    <View style={styles.container}>
      <Header />
      <ProductList productList={data?.productList} />
    </View>
  );
};
export default ProductHub;
