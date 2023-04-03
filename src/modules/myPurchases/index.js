import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import ListItem from './components/ListItem';
import {usePurchase} from './hooks/usePurchase';
import {styles} from './style';

const MyPurchases = ({plan}) => {
  const {tabIndex, planList, onEndReached,loading, plansError} = usePurchase(plan);
  const {container, separatorStyle, emptyContainer, emptyText} = styles();
  const renderItem = ({item, index}) => {
    return <ListItem item={item} index={index} renderList={tabIndex === 0} />;
  };
  const ItemSeparator = () => {
    return <View style={separatorStyle} />;
  };

  if(loading) {
    return (
      <View style={emptyContainer}>
        <ActivityIndicator size={'small'}/>
      </View>
    );
  }

  if(plansError) {
    return (
      <View style={emptyContainer}>
        <Text style={emptyText}>Error fetching plans</Text>
      </View>
    );
  }
  if (planList.length === 0) {
    return (
      <View style={emptyContainer}>
        <Text style={emptyText}>No Plans left</Text>
      </View>
    );
  }
  if (planList.length > 0) {
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
