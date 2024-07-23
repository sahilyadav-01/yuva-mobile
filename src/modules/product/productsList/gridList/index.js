import React from 'react';
import {FlatList, View} from 'react-native';
import ProductItem from './ProductItem';
import {styles as style} from './style';

function GridList({data, onEndReached, onAdd}) {
  const styles = style();
  return (
    <FlatList
      numColumns={2}
      data={data}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({item, index}) => (
        <ProductItem
          item={item}
          index={index}
          onAdd={onAdd}
          leftAlign={{left: index % 2 === 0}}
        />
      )}
      style={styles.listStyle}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={onEndReached}
    />
  );
}

export default GridList;
