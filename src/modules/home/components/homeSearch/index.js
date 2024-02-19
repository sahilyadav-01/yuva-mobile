import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Cross from 'react-native-vector-icons/Entypo';
import {SVG} from '../../../../../assets';
import {styles} from './style';
import {useHomeSearch} from './hooks/useHomeSearch';
import {
  CLEAR_ALL,
  EMPTY_PACKAGE_TEST_LIST,
  EMPTY_SEARCH,
  POPULAR_SEARCH,
  POPULAR_TEST_PACKAGE,
  SEARCH_HISTORY,
  SEARCH_PLACEHOLDER,
} from './constants';
import {BLACK, MANATEE} from '../../../../styles/colors';

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
    onCrossPress,
    elasticSearchData,
    overlay,
    onItemPress,
  } = useHomeSearch();
  const style = styles();

  const renderListItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          onItemPress({name: item.name, attributeUuid: item.id, item: text})
        }
        style={style.listItemContainer}>
        <Text style={style.listItem}>{item?.name}</Text>
      </TouchableOpacity>
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

  const renderSearchResults = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onItemPress({
            name: item?.packageName ?? item?.testName,
            attributeUuid: item.packageUuid ?? item?.testId,
            item: text,
          })
        }
        }
        style={style.listItemContainer}>
        <Text style={style.listItem}>
          {item?.packageName ?? item?.testName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true} style={style.container}>
      <View style={style.headerContainer}>
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
            placeholderTextColor={MANATEE}
            returnKeyType='search'
          />
        </View>
        <View style={style.spaceContainer} />
        <View style={style.popularSearchContainer}>
          <Text style={style.popularText}>{POPULAR_SEARCH}</Text>
          <View style={style.searchRow}>
            {data?.map(item => {
              return (
                <TouchableOpacity
                  style={style.iconContainer}
                  onPress={item?.onPress}>
                  {SVG[item?.icon](item?.props)}
                  <Text style={style.iconText}>{item?.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
      {popularTestsData.length > 0 && (
        <View style={style.listContainer}>
          <Text style={[style.popularText, style.listHeaderStyle]}>
            {POPULAR_TEST_PACKAGE}
          </Text>
          <FlatList
            style={style.flatListStyle}
            data={popularTestsData}
            keyExtractor={(_, index) => index}
            renderItem={renderListItem}
            onEndReached={onListEndReached}
            nestedScrollEnabled={true}
            onEndReachedThreshold={0.001}
          />
        </View>
      )}

      <View style={[style.searchRowSpace]}>
        <View style={style.searchRowContainer}>
          <Text style={style.popularText}>{SEARCH_HISTORY}</Text>
          <Text onPress={onClearPress} style={style.clearText}>
            {CLEAR_ALL}
          </Text>
        </View>
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
      </View>
      {overlay && (
        <View style={style.searchResultContainer}>
          <TouchableOpacity onPress={onCrossPress} style={style.crossContainer}>
            <Cross name='cross' size={18} color={BLACK}/>
          </TouchableOpacity>
          {elasticSearchData.length === 0 && (
            <View style={{paddingBottom: 10}}>
            <Text style={style.elasticSearchEmptyText}>{EMPTY_PACKAGE_TEST_LIST}</Text>
            </View>
          )}
          {elasticSearchData.length > 0 && (
            <FlatList
              keyboardShouldPersistTaps="handled"
              style={style.searchResultListContainer}
              data={elasticSearchData}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderSearchResults}
            />
          )}
        </View>
      )}
    </ScrollView>
  );
};
