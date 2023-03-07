
import React from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import Header from "../../../../components/Header";
import { ADDRES, ADD_NEW, CHECKOUT, CONFIRM_DETAILS, PAYMENT, SELECT_ADRESS } from "./constants";
import { styles } from "./styles";
import { useOurAddress } from "./hooks/useAddress";
import { SVG } from "../../../../../assets";
import { Checkbox } from 'react-native-paper';

const OurPlanAddress = () => {
    const { userAddress, checked, setChecked, AddNewAddress, userAttribute, AddressAdded, userAddressListing } = useOurAddress();
    const renderAddress = ({ item, index }) => {
        if (!item) {
            return null;
        }
            return (
                <View style={styles.border}>

                    <View style={styles.checkboxAddress} >
                        <Checkbox
                            disabled={userAttribute?.[0]?.address}
                            status={checked === index ? 'checked' : 'unchecked'}
                            onPress={() => {
                                checked !== index ? setChecked(index) : setChecked(null);
                            }}

                        />
                    </View>
                    <Text style={styles.adressName}>{item?.address}</Text>
                    <Text style={styles.adressName}>{item?.cityName}-{item?.pinCode}</Text>
                    <View style={styles.Images}>
                        <Text style={styles.adressCheck}>{item?.contactNumber}</Text>
                        {item?.away ?
                            (<SVG.AwayImage style={styles.Image} />) : (
                                <SVG.HomeImage style={styles.Image} />
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
                <Header showBackButton={true} title={CHECKOUT} />
                <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                    <View style={styles.progressBar}>
                        <View style={styles.circle}>
                            <View style={styles.circles}></View>
                            <View style={styles.Line}></View>
                            <View style={styles.circles}></View>
                        </View>
                    </View>
                    <View style={styles.progress}>
                    <Text style={styles.AddText}>{ADDRES}</Text>
                    <Text style={styles.check}>{PAYMENT}</Text>
                    </View>
                 
                    <View style={styles.address} >
                        <Text style={styles.selectDate}>
                            {SELECT_ADRESS}
                        </Text>
                        <TouchableOpacity disabled={userAddress?.[checked]} onPress={AddNewAddress} >

                            <View style={styles.Add} >
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
                <TouchableOpacity
                    onPress={AddressAdded}
                    style={styles.touchableButton}>
                    <Text style={styles.tobePaid}>
                        {CONFIRM_DETAILS}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};
export default OurPlanAddress;