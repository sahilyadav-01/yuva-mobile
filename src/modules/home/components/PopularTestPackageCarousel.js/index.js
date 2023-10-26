import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PNG } from "../../../../../assets";
import CarouselContainer from "../../../../components/CarouselContainer";
import CarouselItem4 from "../../../../components/CarouselItem4";
import { LANDING_PAGE_TEXT3, LANDING_PAGE_TEXT4 } from "./constant";
import { styles } from './styles'

const PopularTestPackageCarousel = ({ popularTest, onHealthPackagePress }) => {
    return (
        <>
            <View style={styles.PopularHealthCheckups}>
                <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT3} </Text>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => onHealthPackagePress(1)}>
                        <Text style={styles.LandingPageText2}>{LANDING_PAGE_TEXT4}</Text>
                    </TouchableOpacity>
                    <View style={styles.line} />
                </View>
            </View>
            {popularTest && <View style={styles.CarouselContainerStyle}>
                <CarouselContainer
                    data={popularTest.popularTestResponseDtoList}
                    isIndexed={false}>
                    <CarouselItem4
                        imgPath={PNG.POPULARDIAGNOSTICICON}
                    />
                </CarouselContainer>
            </View>}
        </>
    )
}
export default PopularTestPackageCarousel;