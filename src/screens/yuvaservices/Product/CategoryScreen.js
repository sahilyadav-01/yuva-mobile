import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './styles';
import Category from '../../../modules/product/category';

const CategoryScreen = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Category navigation={props?.navigation}/>
    </SafeAreaView>
  )
}

export default CategoryScreen;