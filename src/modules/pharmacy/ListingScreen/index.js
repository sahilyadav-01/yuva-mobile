import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './style';
import Header from '../../../components/Header';
import { HEADER_TITLE, SEARCH_PLACEHOLDER_PHARMACY, NO_PHARMACY_FOUND } from '../constants';
import PharmacyCards from '../../../components/PharmacyCards';
import { useListingScreen } from './hooks/useListingScreen';
import { useRoute } from '@react-navigation/native';

const ListingScreen = () => {
  const route = useRoute();
  const { prescriptionId } = route?.params;
  const { pharmacyData, onSearch, isSearch, onEndReached, pharmacyDataSearch } = useListingScreen(prescriptionId);
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
    <View style={styles.mainViewContainerStyle}>
      <Header title={HEADER_TITLE} showBackButton={true} showSearch={true} searchPlaceholder={SEARCH_PLACEHOLDER_PHARMACY} onSearch={onSearch} hideMenu={false} />
      {pharmacyData?.length > 0 ? (
        <View style={styles.CardViewContainerStyle}>
          <FlatList 
            style={styles.mainViewContainerStyle}
            renderItem={renderItem}
            data={isSearch ? pharmacyDataSearch : pharmacyData}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.NoOrderText}>{NO_PHARMACY_FOUND}</Text>
        </View>
      )}
    </View>
  );
};
export default ListingScreen;