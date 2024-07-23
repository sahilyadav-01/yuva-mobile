import React from 'react';
import {SafeAreaView} from 'react-native';
import CategoryDetailsScreen from '../../../modules/product/categoryDetails';
import {styles} from './styles';

const CategoryDetails = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CategoryDetailsScreen
        navigation={props?.navigation}
        params={props?.route?.params}
      />
    </SafeAreaView>
  );
};

export default CategoryDetails;
