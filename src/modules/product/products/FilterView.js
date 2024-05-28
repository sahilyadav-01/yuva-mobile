import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles as style} from './styles';
import {SVG} from '../../../../assets';

const FilterView = ({
  categories,
  productList,
  onFilterPress,
  onAdvanceFiltersPress,
}) => {
  const styles = style();
  return (
    <View style={styles.filterContainer}>
      {categories?.slice(0, 3)?.map(item => {
        const itemExists = productList?.productFilter?.categoryIdList.includes(
          item?.id,
        );
        let filterContainerStyle = styles.filterCardInactive;
        let filterTextStyle = styles.filterTextInactive;
        if (itemExists) {
          filterContainerStyle = styles.filterCardActive;
          filterTextStyle = styles.filterTextActive;
        }
        return (
          <TouchableOpacity
            onPress={() => onFilterPress(item)}
            style={[styles.filterCard, filterContainerStyle]}>
            <Text
              numberOfLines={2}
              style={[styles.filterText, filterTextStyle]}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        onPress={onAdvanceFiltersPress}
        style={[styles.filterCard, styles.advancedFilterCard]}>
        <SVG.ArrowRight />
      </TouchableOpacity>
    </View>
  );
};

export default FilterView;
