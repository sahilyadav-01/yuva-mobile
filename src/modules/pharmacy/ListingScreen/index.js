import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { styles } from './style';
import Header from '../../../components/Header';
import { HEADER_TITLE, SEARCH_PLACEHOLDER_PHARMACY } from '../constants';
import PharmacyCards from '../../../components/PharmacyCards/PharmacyCards';
import Search from '../../../components/Search';
import { DARK_GRAY } from '../../../styles/colors';
import { useListingScreen } from './hooks/useListingScreen';

const ListingScreen = () => {
  const { search } = styles();
  const { data } = useListingScreen();
  const renderItem = ({ item, index }) => {
    return (
      <PharmacyCards
        key={index}
        name={item.name}
        address={item.address}
      />
    );
  };
  return (
    <>
      <Header showBackButton={true} isScreen={false} title={HEADER_TITLE} hideMenu={false} />
      <View >
        <View>
          <View style={search}>
            <Search
              placeholder={SEARCH_PLACEHOLDER_PHARMACY}
              placeholderTextColor={DARK_GRAY}
            // onChangeText={onChangeSearch}
            // value={searchQuery}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            bounces={false}>
            <View>
              <FlatList
                renderItem={renderItem}
                data={data}
                keyExtractor={(item, index) => `${index}`}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default ListingScreen;