import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {CATEGORIES, PRODUCT_HUB, VIEW_ALL} from './constant';
import {styles as style} from './styles';
import {PNG} from '../../../../../assets';

const ProductHub = ({onCategoryViewAllPress}) => {
  const styles = style();
  return (
    <View style={{backgroundColor: '#F2EFEA'}}>
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
      {[0, 0].map(() => (
        <>
          <View style={styles.subCategoryNameContainer}>
            <View style={styles.subLine} />
            <Text style={styles.subCategoryNameStyle}>{'Food'} </Text>
            <View style={styles.subLine} />
          </View>
          <FlatList
            style={styles.subCategoryList}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            horizontal
            data={[0, 0, 0]}
            keyExtractor={(_, index) => `product${index}`}
            renderItem={() => {
              return (
                <View style={styles.subCategoryItem}>
                  <Image
                    source={PNG.product_image}
                    style={styles.categoryImage}
                  />
                  <View style={styles.separator} />
                  <View style={styles.subCategoryDescription}>
                    <Text style={styles.productName}>
                      DiabeSmart Low GI rice
                    </Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <Text style={styles.discount}>-20%</Text>
                    <Text>799.00</Text>
                  </View>
                  <Text>MRP 1000</Text>
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </>
      ))}
    </View>
  );
};
export default ProductHub;
