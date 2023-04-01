import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import ListItem from './components/ListItem';
import { usePurchase } from './hooks/usePurchase';
import {styles} from './style';

const MyPurchases = ({plan}) => {
  const {tabIndex,planList, onEndReached} = usePurchase(plan);
  const {container, separatorStyle} = styles();
  const renderItem = ({item, index}) => {
    return <ListItem item={item} index={index} renderList={tabIndex === 0}/>;
  };
  const ItemSeparator = () => {
    return <View style={separatorStyle} />;
  };

  if(planList){
  return (
    <View style={container}>
      <FlatList
        data={planList}
        keyExtractor={index => index}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReached}
      />
    </View>
  );
  }
};

export default MyPurchases;
