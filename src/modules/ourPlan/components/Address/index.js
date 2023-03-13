
import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../../../components/Header";
import { ADDRES, CHECKOUT, CONFIRM_DETAILS, PAYMENT } from "./constants";
import { styles } from "./styles";
import { useOurPlanAddress } from "./hooks/useAddress";
import AddressList from "../../../../components/Address";
import ProgressBar from "../../../../components/ProgressBar";

const OurPlanAddress = () => {
    const { AddressAdded } = useOurPlanAddress();

    return (
        <View>
            <Header showBackButton={true} title={CHECKOUT} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.progressBar}>
                    <ProgressBar progress={0} />
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