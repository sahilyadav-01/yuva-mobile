import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { styles } from './style';
import Header from '../../../components/Header';
import { HEADER_TITLE, SEARCH_PLACEHOLDER_PHARMACY } from '../constants';
import PharmacyCards from '../../../components/PharmacyCards';
import Search from '../../../components/Search';
import { DARK_GRAY } from '../../../styles/colors';
import { useListingScreen } from './hooks/useListingScreen';
import { useRoute } from '@react-navigation/native';

const ListingScreen = () => {
  const route= useRoute();
  const {prescriptionId}= route?.params;
  const { search, scrollViewContainer } = styles();
  const { data } = useListingScreen();
  const renderItem = ({ item, index }) => {
    return (
      <PharmacyCards
        key={index}
        name={item?.pharmacyName}
        address={item?.address}
        number={item?.contactPersonNumber}
        available={item?.available}
        id={prescriptionId}
      />
    );
  };
  return (
    <>
      <Header showBackButton={true} isScreen={false} title={HEADER_TITLE} hideMenu={false} />
          <View style={search}>
            <Search
              placeholder={SEARCH_PLACEHOLDER_PHARMACY}
              placeholderTextColor={DARK_GRAY}
            // onChangeText={onChangeSearch}
            // value={searchQuery}
            />
          </View>
           <View style={scrollViewContainer}>
          <ScrollView>
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
    </>
  );
};
export default ListingScreen;