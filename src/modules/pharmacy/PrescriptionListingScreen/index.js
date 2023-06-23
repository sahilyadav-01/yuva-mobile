import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { usePrescriptionListingScreen } from './hooks/usePrescriptionListingScreen';
import { styles } from './style';
import Header from '../../../components/Header';
import { BUTTON_TEXT, PATIENT, PATIENT_PINCODE, PRESCRIPTION_ID, SEARCH_PLACEHOLDER_PHARMACY } from './constants';
import { DARK_GRAY } from '../../../styles/colors';
import Search from '../../../components/Search';

const PrescriptionListingScreen = () => {
  const { prescriptionData, onPress } = usePrescriptionListingScreen();
  const renderPatient = (item, index) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.CardView} key={index}>
          <View style={styles.HeadingTextContainer}>
            <Text style={styles.HeadingText}>{item.item.patientName}</Text>
            <Text style={styles.PincodeText}>
              {PATIENT_PINCODE}
              {item.item.pinCode}
            </Text>
          </View>
          <Text style={styles.SubText}>
            {PRESCRIPTION_ID}
            {item.item.prescriptionId}
          </Text>
          <View style={styles.NameView}>
            <Text style={styles.SubText}>{item.item.doctorName}</Text>
            <Text style={styles.SubText}>{item.item.hospitalName}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.Button} onPress={() => onPress(item)}>
              <Text style={styles.ButtonText}>{BUTTON_TEXT}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header showBackButton={true} />
      <View style={styles.search}>
        <Search
          placeholder={SEARCH_PLACEHOLDER_PHARMACY}
          placeholderTextColor={DARK_GRAY}
        // onChangeText={onChangeSearch}
        // value={searchQuery}
        />
      </View>
      <View style={styles.PatientHeader}>
        <Text style={styles.PatientText}>{PATIENT}</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.scrollViewContainer}>
      <ScrollView>
        <View>
          <FlatList
            renderItem={renderPatient}
            data={prescriptionData}
            nestedScrollEnabled={true}
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      </View>
    </>
  );
};
export default PrescriptionListingScreen;