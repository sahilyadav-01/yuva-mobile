import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles as style} from './style';
import {SVG} from '../../../../../assets';
import {BLACK} from '../../../../styles/colors';

function SearchFilter({onFilterPress, onSearch, filterData}) {
  const styles = style();
  const filterApplied =
    filterData?.categoryIdList?.length > 0 ||
    filterData?.subCategoryIdList?.length > 0 ||
    filterData?.brandIdList?.length > 0;
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.searchFilter}>
        <TouchableOpacity onPress={onFilterPress} style={styles.iconContainer}>
          <SVG.ProductFilter />
          {filterApplied && (
            <View
              style={{
                position: 'absolute',
                width: 8,
                height: 8,
                borderRadius: 16,
                right: 5,
                top: 5,
                backgroundColor: 'red',
              }}
            />
          )}
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <SVG.ProductSearch />
          <TextInput
            onChangeText={onSearch}
            style={styles.search}
            placeholder="Search Product"
            placeholderTextColor={BLACK}
          />
        </View>
      </View>
    </View>
  );
}

export default SearchFilter;
