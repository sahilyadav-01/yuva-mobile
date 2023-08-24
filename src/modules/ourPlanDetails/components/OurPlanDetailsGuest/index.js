import React from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList, Image } from "react-native";
import Header from "../../../../components/Header";
import { PLAN_DETAILS, TERMS_AND_CONDITION, BUY_NOW, Carouselt, PLAN, INCLUDES,RUPEE } from "./constants";
import { styles } from "./styles";
import { PNG } from "../../../../../assets";
import CarouselItem from '../../../../components/CarouselItem';
import CarouselContainer from '../../../../components/CarouselContainer';
import { ourPlanDetailsGuest } from "./hooks/ourPlanDetailsGuest";
import { termsAndCondition } from "../../constants";
const OurPlanDetailsGuest = (props) => {
    const {  planDetails, bookOurPlan, pricePerMonth, planName } = ourPlanDetailsGuest(props);
    const renderItem = ({ item, index }) => {
        return (
            <View key={index}>
                <View style={styles.starIcon}>
                    <Image style={styles.ImageStyle}source={PNG.dot} />
                    <Text style={styles.details}>{item}</Text>
                </View>
            </View>
        )
    }
    return (
        <View>
             <Header showBackButton={true} title={PLAN_DETAILS} hideMenu={true}/>
            <ScrollView contentContainerStyle={styles.contentContainerStyle} nestedScrollEnabled={true}>
                <View style={styles.planDetailsCard}>
                    <View style={styles.headerView}>
                        <Text style={styles.planDetails}>{planName}</Text>
                    </View>
                    <View style={styles.PlanText}>
                        <Text style={styles.planAlso}>{PLAN}</Text>
                        <Text style={styles.includes}>{INCLUDES}</Text>
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
                            keyExtractor={(item, index) => `${index}`}
                            nestedScrollEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        />}
                    <Text style={styles.termsCondition}>{TERMS_AND_CONDITION}</Text>
                    <FlatList
                        renderItem={renderItem}
                        data={termsAndCondition}
                        keyExtractor={(item, index) => `${index}`}
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text style={styles.PricePerMonth}>As low as<Text style={styles.rupee}>{"  "}{RUPEE} {pricePerMonth} {'/'}month</Text></Text>
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
export default OurPlanDetailsGuest;