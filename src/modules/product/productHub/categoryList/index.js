import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PRODUCT_HUB, VIEW_ALL} from './constants';
import {styles as style} from './style';

const CategoryList = ({onCategoryViewAllPress, renderHeading}) => {
  const styles = style();
  if (renderHeading) {
    return (
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{PRODUCT_HUB} </Text>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => onCategoryViewAllPress()}>
              <Text style={styles.viewAll}>{VIEW_ALL}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
};

export default CategoryList;
