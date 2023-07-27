import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './style';
import Header from '../../../components/Header';
import { HEADER_TITLE, SEARCH_PLACEHOLDER_PHARMACY, NO_PHARMACY_FOUND } from '../constants';
import PharmacyCards from '../../../components/PharmacyCards';
import { useListingScreen } from './hooks/useListingScreen';
import { useRoute } from '@react-navigation/native';

const ListingScreen = () => {
  const route = useRoute();
  const { prescriptionId } = route?.params;
  const { data, onSearch } = useListingScreen();
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
    <View>
      <Header title={HEADER_TITLE} showBackButton={true} showSearch={true} searchPlaceholder={SEARCH_PLACEHOLDER_PHARMACY} onSearch={onSearch} hideMenu={false} />
      {data?.length > 0 ? (
        <View style={styles.CardViewContainerStyle}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
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