import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PNG } from "../../../../../assets";
import CarouselContainer from "../../../../components/CarouselContainer";
import CarouselItem2 from "../../../../components/CarouselItem2";
import { LANDING_PAGE_TEXT1, LANDING_PAGE_TEXT2 } from "./constant";
import { styles } from './styles'

const PopularHeathCheckupCarousel = ({ popularPackageName, onHealthPackagePress }) => {
    return (
        <>
            <View style={styles.PopularHealthCheckups}>
                <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT1} </Text>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => onHealthPackagePress(0)}>
                        <Text style={styles.LandingPageText2}>{LANDING_PAGE_TEXT2}</Text>
                    </TouchableOpacity>
                    <View style={styles.line} />
                </View>
            </View>
            {popularPackageName && <View style={styles.CarouselContainerStyle}>
                <CarouselContainer
                    data={popularPackageName.popularPackageResponseDtoList}
                    isIndexed={false}>
                    <CarouselItem2
                        imgPath={PNG.POPULARHEALTHICON}
                    />
                </CarouselContainer>
            </View>}

        </>
    )
}
export default PopularHeathCheckupCarousel;