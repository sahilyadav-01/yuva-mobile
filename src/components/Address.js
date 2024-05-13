
import React from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { ADD_NEW, SELECT_ADRESS } from "./constants";
import { styles } from "./styles";
import { useOurAddress } from "./hooks/useAddress";
import { SVG } from "../../assets";
import { Checkbox } from 'react-native-paper';
import { ANAKIVA, CYAN_BLUE, GREEN, MARINER, VERY_LIGHT_GREY, WHITE } from "../styles/colors";
import AddNewAddressContainer from './AddNewAddressContainer'
const AddressList = (isNavScreen) => {
    const { userAddress, checked, setChecked, AddNewAddress, userAttribute, userAddressListing } = useOurAddress(isNavScreen);
    const renderAddress = ({ item:listItem, index }) => {
        const item = listItem
        if (!item) {
            return null;
        }
        return (
            <View key={index} style={[styles.border, { backgroundColor: (checked === index || isNavScreen?.isNavScreen?.booked) ? VERY_LIGHT_GREY : WHITE }]}>

                <View style={styles.checkboxAddress} disabled={isNavScreen?.isNavScreen?.booked}>
                    <View style={styles.addressTextField}>
                        <Text style={styles.adressName}>{item?.address}</Text>
                        <Text style={styles.CityName}>{item?.cityName}-{item?.pinCode}</Text>
                    </View>
                    <Checkbox.Android
                        color={MARINER} uncheckedColor={ANAKIVA}
                        disabled={isNavScreen?.isNavScreen?.booked}
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
    return (
        <View>
            {userAddressListing.length>0 && <View style={styles.AddressCheck} >
                <Text style={styles.selectDate}>
                    {SELECT_ADRESS}
                </Text>
                <TouchableOpacity disabled={userAddress?.[checked] || !userAddressListing?.length ||isNavScreen?.isNavScreen?.booked} onPress={AddNewAddress} >
                    <View style={[styles.AddNewAdd, { opacity: (userAddress?.[checked] ||isNavScreen?.isNavScreen?.booked) && 0.5 }]} >
                        <SVG.AddNewAdress style={styles.svg} />
                        <Text style={styles.addNew}>
                            {ADD_NEW}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>}
            <View >
                {userAddressListing?.length > 0 ?
                <FlatList
                    renderItem={renderAddress}
                    data={userAddressListing.map(item=>{
                        if(item?.addressAdded) return Object.values(item)[0]
                        return item;
                    })}
                    nestedScrollEnabled={true}
                    keyExtractor={(item, index) => `${index}`}
                    showsHorizontalScrollIndicator={false}
                />:<AddNewAddressContainer isScreen={isNavScreen?.isNavScreen}/>}
            </View>
        </View>
    )
};
export default AddressList;