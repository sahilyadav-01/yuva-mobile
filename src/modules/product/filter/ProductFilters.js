import React from 'react';
import {View, FlatList, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {styles as style} from './style';
import {CYAN_BLUE, GREEN} from '../../../styles/colors';

function ProductFilters({data, onCheck}) {
  const styles = style();
  const RenderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Checkbox.Android
          color={GREEN}
          uncheckedColor={CYAN_BLUE}
          onPress={() => onCheck({id: element?.id, index})}
          status={item?.status}
        />
        <Text style={styles.titleText}>{item?.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.filterView}>
      {data.map((element, i) => {
        return (
          <View style={styles.categoryContainer}>
            <Text>{element?.title}</Text>
            <View style={styles.separator} />
            <FlatList
              style={styles.listStyle}
              data={element?.data}
              keyExtractor={(_, index) => `filter-child-${i}-${index}`}
              renderItem={<RenderItem />}
            />
          </View>
        );
      })}
    </View>
  );
}

export default ProductFilters;
