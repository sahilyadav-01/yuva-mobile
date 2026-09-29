import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import ListItem from './components/ListItem';
import {usePurchase} from './hooks/usePurchase';
import {styles} from './style';
import {ERROR_FETCHING_ITEMS, NO_ITEMS_LEFT} from './constants';
import PlanItem from './components/PlanItem';
import {MARINER} from '../../styles/colors';

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
    planListLoading,
    purchasesListLoading,
  } = usePurchase(plan);
  const {container, separatorStyle, emptyContainer, emptyText, footerLoader} =
    styles();
  const renderItem = ({item, index}) => {
    return tabIndex === 0 ? (
      <PlanItem item={item} index={index} />
    ) : (
      <ListItem item={item} index={index} renderList={tabIndex === 0} />
    );
  };

  const ItemSeparator = () => {
    return <View style={separatorStyle} />;
  };

  const ListFooterComponent = () => {
    if (
      (tabIndex === 0 && planListLoading) ||
      (tabIndex === 1 && purchasesListLoading)
    ) {
      return (
        <ActivityIndicator
          size={'small'}
          style={footerLoader}
          color={MARINER}
        />
      );
    }
  };

  if ((tabIndex === 0 && loading) || (tabIndex === 1 && purchasesLoader)) {
    return (
      <View style={emptyContainer}>
        <ActivityIndicator size={'small'} color={MARINER} />
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
          keyExtractor={(item, index) => `${index}`}
          nestedScrollEnabled={true}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
          onEndReached={onEndReached}
          ListFooterComponent={ListFooterComponent}
        />
      </View>
    );
  }
};

export default MyPurchases;
