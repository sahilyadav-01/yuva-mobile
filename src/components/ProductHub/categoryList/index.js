import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PRODUCT_HUB, VIEW_ALL} from './constants';
import {styles as style} from './style';

const CategoryList = ({
  categories,
  onCategoryViewAllPress,
  onSelectCategory,
  activeIndex,
  renderHeading,
}) => {
  const styles = style();
  if (renderHeading)
    return (
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{PRODUCT_HUB} </Text>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => onCategoryViewAllPress()}>
              <Text style={styles.viewAll}>{VIEW_ALL}</Text>
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

export default CategoryList;
