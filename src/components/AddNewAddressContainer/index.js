import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {Picker} from '@react-native-picker/picker';
import {styles} from './style';
import {BLACK, DARK_GRAY} from '../../styles/colors';
import {useAddNewAddress} from '../hooks/useAddNewAddress';
import {
  ADD_ADDRESS,
  CITY,
  CONTACT,
  ERROR_TEXT_CONTACT_NUMBER,
  ERROR_TEXT_LOCATION,
  ERROR_TEXT_PINCODE,
  PINCODE,
  SAVE_AS,
} from '../constants';

const AddNewAddressContainer = isScreen => {
  const {
    selected,
    setSelected,
    addAddress,
    onChangePincode,
    onChangeLocation,
    onChangeContact,
    onChangeCity,
    onChangeLocation2,
    errorState,
    errorPincode,
    errorAddress,
    cityId,
    setSelectedCity,
  } = useAddNewAddress(isScreen);

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.borderAddNewAddress}>
        <Text style={styles.AddAddressLine}>Address</Text>
        <TextInput
          multiline={true}
          style={styles.textInputStyle}
          placeholder={'Type your Address here'}
          placeholderTextColor={DARK_GRAY}
          onChangeText={onChangeLocation}
          numberOfLines={5}
        />
        {errorAddress && (
          <Text style={styles.errorContact}>{ERROR_TEXT_LOCATION}</Text>
        )}
        {/* <Text style={styles.AddAddressLine}>{ADDRESSLINE2}</Text>
                        <TextInput
                            multiline={true}
                            style={styles.textInputStyle}
                            placeholder={LOCATION}
                            placeholderTextColor={DARK_GRAY}
                            onChangeText={onChangeLocation2}
                        /> */}
        <Text style={styles.AddAddressLine}>{CITY}</Text>
        <SelectList
          setSelected={setSelectedCity}
          search={false}
          data={cityId}
          placeholder={'Select your City'}
          placeholderTextColor={DARK_GRAY}
          boxStyles={styles.textInputStyle}
          inputStyles={{color: BLACK}}
          dropdownTextStyles={{color: BLACK}}
        />
        <Text style={styles.AddAddressLine}>{PINCODE}</Text>
        <TextInput
          keyboardType="numeric"
          multiline={false}
          maxLength={6}
          style={styles.textInputStyle}
          placeholder={'Type your Pin Code here'}
          placeholderTextColor={DARK_GRAY}
          onChangeText={onChangePincode}
        />
        {errorPincode && (
          <Text style={styles.errorContact}>{ERROR_TEXT_PINCODE}</Text>
        )}
        <Text style={styles.AddAddressLine}>{CONTACT}</Text>
        <TextInput
          keyboardType="phone-pad"
          multiline={false}
          maxLength={10}
          style={styles.textInputStyle}
          placeholder={'Type your Contact Number here'}
          placeholderTextColor={DARK_GRAY}
          onChangeText={onChangeContact}
        />
        {errorState && (
          <Text style={styles.errorContact}>{ERROR_TEXT_CONTACT_NUMBER}</Text>
        )}
        <Text style={styles.AddAddressLine}>{SAVE_AS}</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selected}
            mode={'dropdown'}
            style={styles.boxStyles}
            onValueChange={itemValue => setSelected(itemValue)}>
            <Picker.Item label="Home" value="false" />
            <Picker.Item label="Away" value="true" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity onPress={addAddress} style={styles.touchableButton}>
        <Text style={styles.textBook}>{ADD_ADDRESS}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddNewAddressContainer;
