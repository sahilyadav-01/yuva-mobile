import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import ListItem from './components/ListItem';
import { usePurchase } from './hooks/usePurchase';
import {styles} from './style';

const MyPurchases = () => {
  const {tabIndex,planList} = usePurchase();
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
        data={planList.userPlanOrderHistoryResponseDtoList}
        keyExtractor={index => index}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
  }
};

export default MyPurchases;
