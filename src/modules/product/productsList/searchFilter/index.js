import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles as style} from './style';
import {SVG} from '../../../../../assets';

function SearchFilter({onFilterPress, onSearch}) {
  const styles = style();
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.searchFilter}>
        <TouchableOpacity onPress={onFilterPress} style={styles.iconContainer}>
          <SVG.ProductFilter />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <SVG.ProductSearch />
          <TextInput
            onChangeText={onSearch}
            style={styles.search}
            placeholder="Search Product"
          />
        </View>
      </View>
    </View>
  );
}

export default SearchFilter;
