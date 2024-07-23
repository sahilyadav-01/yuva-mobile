import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {styles as style} from './style';
import {CYAN_BLUE, GREEN} from '../../../styles/colors';

function ProductFilters({onCheck, data, getListEmptyText}) {
  const styles = style();
  const ListEmptyComponent = ({id}) => {
    const emptyText = getListEmptyText(id);
    return <Text>{emptyText}</Text>;
  };
  const RenderItem = ({item, index, element}) => {
    let disabled;
    if (element?.id !== 1) {
      disabled = false;
    } else {
      disabled = item?.disabled;
    }
    return (
      <View style={styles.itemContainer}>
        <Checkbox.Android
          disabled={disabled}
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
      {data.map((element, i) => {
        return (
          <View style={styles.categoryContainer}>
            <Text style={styles.titleStyle}>{element?.title}</Text>
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
