import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {styles as style} from './style';
import {CYAN_BLUE, GREEN} from '../../../styles/colors';

function ProductFilters({onCheck, data1}) {
  const styles = style();
  const ListEmptyComponent = ({id}) => {
    let emptyText;
    switch (id) {
      case 0:
        emptyText = 'No Categories';
        break;
      case 1:
        emptyText = 'No Sub Categories';
        break;
      case 2:
        emptyText = 'No Brands';
        break;
    }
    return <Text>{emptyText}</Text>;
  };
  const RenderItem = ({item, index, element}) => {
    return (
      <View style={styles.itemContainer}>
        <Checkbox.Android
          color={GREEN}
          uncheckedColor={CYAN_BLUE}
          onPress={() => onCheck({id: element?.id, index})}
          status={item?.status}
        />
        <Text style={styles.titleText}>{item?.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.filterView}>
      {data1.map((element, i) => {
        return (
          <View style={styles.categoryContainer}>
            <Text>{element?.title}</Text>
            <View style={styles.separator} />
            <FlatList
              style={styles.listStyle}
              data={element?.data}
              keyExtractor={(_, index) => `filter-child-${i}-${index}`}
              renderItem={({item, index}) => (
                <RenderItem item={item} index={index} element={element} />
              )}
              ListEmptyComponent={() => <ListEmptyComponent id={element?.id} />}
            />
          </View>
        );
      })}
    </View>
  );
}

export default ProductFilters;
