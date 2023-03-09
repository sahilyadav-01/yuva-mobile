
import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../../../components/Header";
import { ADDRES, CHECKOUT, CONFIRM_DETAILS, PAYMENT } from "./constants";
import { styles } from "./styles";
import { useOurPlanAddress } from "./hooks/useAddress";
import AddressList from "../../../../components/Address";

const OurPlanAddress = () => {
    const { AddressAdded } = useOurPlanAddress();

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
                <AddressList />
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