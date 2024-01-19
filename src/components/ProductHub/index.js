import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {CATEGORIES, PRODUCT_HUB, VIEW_ALL} from './constant';
import {styles as style, width} from './styles';

const ProductHub = ({
  onCategoryViewAllPress,
  showHeading,
  data,
}) => {
  const styles = style();
  const renderHeading = showHeading ?? true;
  const RenderProducts = ({index}) => {
    let obj = data?.productList[index]?.productResponseDtoForUserList[index];
    return (
      <View
        style={[
          styles.subCategoryItem,
          {
            marginRight: index % 2 === 0 ? (width - 40) / 7 : undefined,
          },
        ]}>
        <Image
          source={{uri: obj?.imageFilepath}}
          style={styles.categoryImage}
        />
        <View style={styles.separator} />
        <View style={styles.subCategoryDescription}>
          <Text style={styles.productName}>{obj?.name}</Text>
        </View>
        <View style={styles.rowContainer}>
          {obj?.discountPercentage ? <Text style={styles.discount}>-{obj?.discountPercentage}%</Text> : null}
          <Text>₹ {obj?.finalPrice}</Text>
        </View>
        <Text>M.R.P. ₹ {obj?.originalPrice}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: '#F2EFEA'}}>
      {renderHeading && (
        <>
          <View style={styles.PopularHealthCheckups}>
            <Text style={styles.LandingPageText1}>{PRODUCT_HUB} </Text>
            <View style={styles.textContainer}>
              <TouchableOpacity onPress={() => onCategoryViewAllPress()}>
                <Text style={styles.LandingPageText2}>{VIEW_ALL}</Text>
              </TouchableOpacity>
              <View style={styles.line} />
            </View>
          </View>
          <View style={styles.categoryHeadingContainer}>
            <Text style={styles.categoryName}>{CATEGORIES[0].name}</Text>
            <Text style={[styles.categoryName, {fontSize: 18}]}>
              {CATEGORIES[1].name}
            </Text>
            <Text style={styles.categoryName}>{CATEGORIES[2].name}</Text>
          </View>
        </>
      )}
      {data.productList.map((item, index) => {
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
            {data?.productList[index]?.productResponseDtoForUserList?.length >
              0 && (
              <FlatList
                key={(_, index) => `product${index}`}
                numColumns={2}
                style={styles.subCategoryList}
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparator} />
                )}
                data={data?.productList[index]?.productResponseDtoForUserList}
                renderItem={({_, index}) => <RenderProducts index={index} />}
              />
            )}
          </>
        );
      })}
    </View>
  );
};
export default ProductHub;
