import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import OurPlan from "../..";
import Header from "../../../../components/Header";
import { OURPLAN_DETAILS, OUR_PLANS } from "./constants";
import { useOurPlanDetails } from "./hooks/useOurPlanDetails";
import { styles } from "./styles";

const OurPlanDetails = () => {
const {popularPlan}=useOurPlanDetails();
    return (
        <View>
            <Header showBackButton={true} title={OURPLAN_DETAILS} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    <Text style={styles.textHeader}>
                        {OUR_PLANS}
                    </Text>
                </View>
                <OurPlan />
            </ScrollView>
        </View>
    )
};
export default OurPlanDetails;