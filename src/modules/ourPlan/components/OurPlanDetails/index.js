
import React from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import OurPlan from "../..";
import Header from "../../../../components/Header";
import { OURPLAN_DETAILS, PLAN_DETAILS, TERMS_AND_CONDITION, termsAndCondition, BUY_NOW, Carouselt } from "./constants";
import { useOurPlanDetails } from "./hooks/useOurPlanDetails";
import { styles } from "./styles";
import { SVG } from "../../../../../assets";
import { RUPEE_SYMOL } from "../../constant";
import CarouselItem from '../../../../components/CarouselItem';
import CarouselContainer from '../../../../components/CarouselContainer';
const OurPlanDetails = () => {
    const { planDetails, bookOurPlan, pricePerMonth } = useOurPlanDetails();
    const renderItem = ({ item, index }) => {
        return (
            <View key={index}>
                <View style={styles.starIcon}>
                    <SVG.StarIcon />
                    <Text style={styles.details}> {item}</Text>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Header showBackButton={true} title={OURPLAN_DETAILS} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <OurPlan isHomeScreen={false} />
                <View style={styles.planDetailsCard}>
                    <View style={styles.headerView}>
                        <Text style={styles.planDetails}>{PLAN_DETAILS}</Text>
                    </View>
                    <View>
                        <CarouselContainer
                            data={Carouselt}
                            isIndexed={true}
                          >
                            <CarouselItem isScreen={"OurPlan"}/>
                        </CarouselContainer>
                    </View>
                    {planDetails &&
                        <FlatList
                            renderItem={renderItem}
                            data={planDetails}
                            keyExtractor={(item) => item?.id}
                            showsHorizontalScrollIndicator={false}
                        />}
                    <Text style={styles.termsCondition}>{TERMS_AND_CONDITION}</Text>
                    <FlatList
                        renderItem={renderItem}
                        data={termsAndCondition}
                        keyExtractor={(item) => item?.id}
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text style={styles.PricePerMonth}>As low as<Text style={styles.rupee}>{"  "}{RUPEE_SYMOL} {pricePerMonth} {'/'}month</Text></Text>
                </View>
                <TouchableOpacity
                    onPress={bookOurPlan}
                    style={styles.touchableButton}>
                    <Text style={styles.buyNow}>
                        {BUY_NOW}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};
export default OurPlanDetails;