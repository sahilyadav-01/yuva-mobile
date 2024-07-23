import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {usePrescriptionListingScreen} from './hooks/usePrescriptionListingScreen';
import {styles} from './style';
import Header from '../../../components/Header';
import {
  BUTTON_TEXT,
  PRESCRIPTION,
  PATIENT_PINCODE,
  PRESCRIPTION_ID,
  SEARCH_PLACEHOLDER_PHARMACY,
  NO_PRESCRIPTION_FOUND,
} from './constants';

const PrescriptionListingScreen = () => {
  const {
    pharmacyDataLoading,
    prescriptionDataList,
    prescriptionDataListSearch,
    onPress,
    onSearch,
    onEndReached,
    isSearch,
  } = usePrescriptionListingScreen();
  const renderPatient = (item, index) => {
    if (!item || !item?.item) {
      return null;
    }
    const onItemPress = () => {
      onPress(item);
    };
    return (
      <View style={styles.CompleteView}>
        <TouchableOpacity onPress={onItemPress}>
          <View style={styles.CardView} key={index}>
            <View style={styles.NameView}>
              <Text style={styles.NameText}>{item?.item?.patientName}</Text>
              <Text style={styles.PincodeText}>
                {PATIENT_PINCODE}
                {item?.item?.pinCode}
              </Text>
            </View>
            <Text style={styles.PresText}>
              {PRESCRIPTION_ID}
              {item?.item?.prescriptionId}
            </Text>
            <View style={styles.NameView}>
              <Text style={styles.PresText}>{item?.item?.doctorName}</Text>
              <Text style={styles.PresText}>{item?.item?.hospitalName}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.Button} onPress={onItemPress}>
                <Text style={styles.ButtonText}>{BUTTON_TEXT}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainContainerStyle}>
      <Header
        title={PRESCRIPTION}
        showBackButton={true}
        showSearch={true}
        searchPlaceholder={SEARCH_PLACEHOLDER_PHARMACY}
        onSearch={onSearch}
      />
      {!pharmacyDataLoading && prescriptionDataList?.length === 0 ? (
        <View>
          <Text style={styles.NoOrderText}>{NO_PRESCRIPTION_FOUND}</Text>
        </View>
      ) : (
        <View style={styles.CardViewContainerStyle}>
          <FlatList
            style={styles.mainContainerStyle}
            renderItem={renderPatient}
            data={isSearch ? prescriptionDataListSearch : prescriptionDataList}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
          />
        </View>
      )}
    </View>
  );
};
export default PrescriptionListingScreen;
