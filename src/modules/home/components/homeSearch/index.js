import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {SVG} from '../../../../../assets';
import {styles} from './style';
import {useHomeSearch} from './hooks/useHomeSearch';
import {FlatList} from 'react-native';
import {
  CLEAR_ALL,
  EMPTY_SEARCH,
  POPULAR_SEARCH,
  POPULAR_TEST_PACKAGE,
  SEARCH_HISTORY,
  SEARCH_PLACEHOLDER,
} from './constants';

export const HomeSearch = () => {
  const {
    data,
    popularTestsData,
    onListEndReached,
    onSearch,
    onSubmit,
    results,
    onResultPress,
    text,
    onClearPress,
  } = useHomeSearch();
  const style = styles();

  const renderListItem = ({item}) => {
    return (
      <View style={style.listItemContainer}>
        <Text style={style.listItem}>{item?.name}</Text>
      </View>
    );
  };

  const renderLatestSearch = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onResultPress(item)}
        style={style.resultItem}>
        <Text style={style.listItem}>{item}</Text>
        <SVG.LatestSearch />
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.rowContainer}>
        <View style={style.searchContainer}>
          <SVG.SearchIcon type="small" />
        </View>
        <TextInput
          onSubmitEditing={onSubmit}
          placeholder={SEARCH_PLACEHOLDER}
          style={style.textInputStyle}
          onChangeText={onSearch}
          value={text}
        />
      </View>
      <View style={style.popularSearchContainer}>
        <Text style={style.popularText}>{POPULAR_SEARCH}</Text>
        <View style={style.searchRow}>
          {data?.map(item => {
            return (
              <TouchableOpacity
                style={style.iconContainer}
                onPress={item?.onPress}>
                {SVG[item?.icon](item?.props)}
                <Text numberOfLines={2} style={style.iconText}>
                  {item?.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={style.listContainer}>
        <Text style={[style.popularText, style.listHeaderStyle]}>
          {POPULAR_TEST_PACKAGE}
        </Text>
        <FlatList
          data={popularTestsData}
          keyExtractor={(_, index) => index}
          renderItem={renderListItem}
          onEndReached={onListEndReached}
          nestedScrollEnabled={true}
        />
      </View>
      <View style={style.searchRowSpace}>
        <View style={style.searchRowContainer}>
          <Text style={style.popularText}>{SEARCH_HISTORY}</Text>
          <Text onPress={onClearPress} style={style.clearText}>
            {CLEAR_ALL}
          </Text>
        </View>
        {results?.length === 0 && (
          <FlatList
            data={results}
            keyExtractor={(_, index) => index}
            renderItem={renderLatestSearch}
            nestedScrollEnabled={true}
            ListEmptyComponent={() => {
              return (
                <View style={style.emptyContainerView}>
                  <Text style={style.popularText}>{EMPTY_SEARCH}</Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};
