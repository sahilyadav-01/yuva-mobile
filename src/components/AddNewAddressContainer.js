import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { ADDRESSLINE, ADDRESSLINE2, ADD_ADDRESS, ADD_NEW_ADDRESS, CITY, CITYNAME, CONTACT, ERROR_TEXT_CONTACT_NUMBER, ERROR_TEXT_LOCATION, ERROR_TEXT_PINCODE, HOME, LOCATION, PINCODE, SAVE_AS } from './constants';
import { useAddNewAddress } from './hooks/useAddNewAddress';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';

const AddNewAddressContainer = (isScreen) => {
    const {selected,
        setSelected, addAddress, onChangePincode,
        onChangeLocation, onChangeContact, onChangeCity, onChangeLocation2, errorState, errorPincode, errorAddress } = useAddNewAddress(isScreen);
      
        return (
        <View>
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    <Text style={styles.AddNewAddress}>
                        {ADD_NEW_ADDRESS}
                    </Text>
                    <View style={styles.borderAddNewAddress}>
                        <Text style={styles.AddAddressLine}>{ADDRESSLINE}</Text>
                        <TextInput
                            multiline={true}
                            style={styles.textInputStyle}
                            placeholder={LOCATION}
                            onChangeText={onChangeLocation}
                        />
                        {errorAddress && (
                            <Text style={styles.errorContact}>{ERROR_TEXT_LOCATION}</Text>
                        )}
                        <Text style={styles.AddAddressLine}>{ADDRESSLINE2}</Text>
                        <TextInput
                            multiline={true}
                            style={styles.textInputStyle}
                            placeholder={LOCATION}
                            onChangeText={onChangeLocation2}
                        />
                        <Text style={styles.AddAddressLine}>{CITY}</Text>
                        <TextInput
                            multiline={true}
                            style={styles.textInputStyle}
                            placeholder={CITYNAME}
                            onChangeText={onChangeCity}
                        />
                        <Text style={styles.AddAddressLine}>{PINCODE}</Text>
                        <TextInput
                            keyboardType='numeric'
                            multiline={false}
                            maxLength={6}
                            style={styles.textInputStyle}
                            placeholder={PINCODE}
                            onChangeText={onChangePincode}
                        />
                        {errorPincode && (
                            <Text style={styles.errorContact}>{ERROR_TEXT_PINCODE}</Text>
                        )}
                        <Text style={styles.AddAddressLine}>{CONTACT}</Text>
                        <TextInput
                            keyboardType='phone-pad'
                            multiline={false}
                            maxLength={10}
                            style={styles.textInputStyle}
                            placeholder={CONTACT}
                            onChangeText={onChangeContact}

                        />
                        {errorState && (
                            <Text style={styles.errorContact}>{ERROR_TEXT_CONTACT_NUMBER}</Text>
                        )}
                        <Text style={styles.AddAddressLine}>{SAVE_AS}</Text>
                        <View>
                        <Picker
                            selectedValue={selected}
                            mode={'dropdown'}
                            style={styles.boxStyles}
                            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
                        >
                            <Picker.Item label="Home" value="false" />
                            <Picker.Item label="Away" value="true" />
                        </Picker>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={addAddress}
                        style={styles.touchableButton}>
                        <Text style={styles.textBook}>
                            {ADD_ADDRESS}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View >
    )
}
export default AddNewAddressContainer;
