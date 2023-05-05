
import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../../../components/Header";
import { CHECKOUT, CONFIRM_DETAILS, OUR_PLAN_ADDRESS } from "./constants";
import { styles } from "./styles";
import { useOurPlanAddress } from "./hooks/useAddress";
import AddressList from "../../../../components/Address";
import ProgressBar from "../../../../components/ProgressBar";

const OurPlanAddress = () => {
    const { AddressAdded,addressListing } = useOurPlanAddress();

    return (
        <View>
            <Header showBackButton={true} title={CHECKOUT} hideMenu={true} showCart={true} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle} nestedScrollEnabled={true}>
                <View style={styles.progressBar}>
                    <ProgressBar progress={0} />
                </View>
                <AddressList isNavScreen={OUR_PLAN_ADDRESS}/>
                <View>
                {addressListing?.length>0 &&
                <TouchableOpacity
                    onPress={AddressAdded}
                    style={styles.touchableButton}>
                    <Text style={styles.tobePaid}>
                        {CONFIRM_DETAILS}
                    </Text>
                </TouchableOpacity>
            } 
            </View>
            </ScrollView>
        </View>
    )
};
export default OurPlanAddress;