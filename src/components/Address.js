
import React from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { ADD_NEW, SELECT_ADRESS } from "./constants";
import { styles } from "./styles";
import { useOurAddress } from "./hooks/useAddress";
import { SVG } from "../../assets";
import { Checkbox } from 'react-native-paper';
import { VERY_LIGHT_GREY, WHITE } from "../styles/colors";

const AddressList = (isNavScreen) => {
    const { userAddress, checked, setChecked, AddNewAddress, userAttribute, userAddressListing } = useOurAddress(isNavScreen);
    const renderAddress = ({ item, index }) => {
        if (!item) {
            return null;
        }
        return (
            <View style={[styles.border, { backgroundColor: checked === index ? VERY_LIGHT_GREY : WHITE }]}>

                <View style={styles.checkboxAddress} >
                    <View>
                        <Text style={styles.adressName}>{item?.address}</Text>
                        <Text style={styles.CityName}>{item?.cityName}-{item?.pinCode}</Text>
                    </View>
                    <Checkbox
                        status={checked === index ? 'checked' : 'unchecked'}
                        onPress={() => {
                            checked !== index ? setChecked(index) : setChecked(null);
                        }}
                    />
                </View>
                <View style={styles.AddressImages}>
                    <Text style={styles.AdressCheckBox}>{item?.contactNumber}</Text>
                    {item?.away ?
                        (<SVG.AwayImage style={styles.SvgImage} />) : (
                            <SVG.HomeImage style={styles.SvgImage} />
                        )}
                </View>
            </View>
        )
    }
    if (!userAddress) {
        return null;
    }
    return (
        <View>
            <View style={styles.AddressCheck} >
                <Text style={styles.selectDate}>
                    {SELECT_ADRESS}
                </Text>
                <TouchableOpacity disabled={userAddress?.[checked]} onPress={AddNewAddress} >
                    <View style={[styles.AddNewAdd, { opacity: userAddress?.[checked] && 0.5 }]} >
                        <SVG.AddNewAdress style={styles.svg} />
                        <Text style={styles.addNew}>
                            {ADD_NEW}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <FlatList
                    renderItem={renderAddress}
                    data={userAddressListing}
                    keyExtractor={(item) => item?.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
};
export default AddressList;