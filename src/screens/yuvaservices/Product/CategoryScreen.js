import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './styles';
import Category from '../../../modules/product/category';

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Category />
    </SafeAreaView>
  )
}

export default CategoryScreen;