import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import ListItem from './components/ListItem';
import {usePurchase} from './hooks/usePurchase';
import {styles} from './style';
import {ERROR_FETCHING_ITEMS, NO_ITEMS_LEFT} from './constants';

const MyPurchases = ({plan}) => {
  const {
    tabIndex,
    planList,
    onEndReached,
    loading,
    plansError,
    purchasesLoader,
    purchasesList,
    purchasesError,
  } = usePurchase(plan);
  const {container, separatorStyle, emptyContainer, emptyText} = styles();
  const renderItem = ({item, index}) => {
    return <ListItem item={item} index={index} renderList={tabIndex === 0} />;
  };
  const ItemSeparator = () => {
    return <View style={separatorStyle} />;
  };

  if ((tabIndex === 0 && loading) || (tabIndex === 1 && purchasesLoader)) {
    return (
      <View style={emptyContainer}>
        <ActivityIndicator size={'small'} />
      </View>
    );
  }

  if (
    (tabIndex === 0 && plansError && planList.length === 0) ||
    (tabIndex === 1 && purchasesError && purchasesList.length === 0)
  ) {
    return (
      <View style={emptyContainer}>
        <Text style={emptyText}>{ERROR_FETCHING_ITEMS}</Text>
      </View>
    );
  }
  if (
    (tabIndex === 0 && planList.length === 0) ||
    (tabIndex === 1 && purchasesList.length === 0)
  ) {
    return (
      <View style={emptyContainer}>
        <Text style={emptyText}>{NO_ITEMS_LEFT}</Text>
      </View>
    );
  }
  if (
    (tabIndex === 0 && planList.length > 0) ||
    (tabIndex === 1 && purchasesList.length > 0)
  ) {
    return (
      <View style={container}>
        <FlatList
          data={tabIndex === 0 ? planList : purchasesList}
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
