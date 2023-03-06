import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { ADDRESSLINE, ADDRESSLINE2, ADD_ADDRESS, ADD_NEW_ADDRESS, CITY, CITYNAME, CONTACT, HOME, LOCATION, PINCODE, SAVE_AS } from './constants';
import { useAddNewAddress } from './hooks/useAddNewAddress';
import SelectList from 'react-native-dropdown-select-list'
import { styles } from './styles';

const AddNewAddres = (isScreen) => {
    const { 
        setSelected, data, addAddress, onChangePincode,
        onChangeLocation, onChangeContact, onChangeCity, onChangeLocation2 } = useAddNewAddress(isScreen);
    return (
        <View>
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    <Text style={styles.AddNewAddress}>
                        {ADD_NEW_ADDRESS}
                    </Text>
                    <View style={styles.border}>
                        <Text style={styles.AddAddressLine}>{ADDRESSLINE}</Text>
                        <TextInput
                            multiline={true}
                            style={styles.textInputStyle}
                            placeholder={LOCATION}
                            onChangeText={onChangeLocation}
                        />
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
                            multiline={true}
                            style={styles.textInputStyle}
                            placeholder={PINCODE}
                            onChangeText={onChangePincode}
                        />
                        <Text style={styles.AddAddressLine}>{CONTACT}</Text>
                        <TextInput
                            multiline={true}
                            style={styles.textInputStyle}
                            placeholder={CONTACT}
                            onChangeText={onChangeContact}
                        />
                        <Text style={styles.AddAddressLine}>{SAVE_AS}</Text>
                        <SelectList
                            boxStyles={styles.boxStyles}
                            defaultOption={{ key: null, value: HOME }}
                            setSelected={setSelected}
                            data={data}
                        />
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
export default AddNewAddres;
