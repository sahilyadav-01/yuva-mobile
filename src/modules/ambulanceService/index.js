import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { PNG, SVG } from "../../../assets";
import { DETIALS_TEXT, FIRSTCARD_HEADING, FIRSTCARD_SUBHEADING, HEADING, SECONDCARD_HEADING, SECONDCARD_SUBHEADING, SUBHEADING, THIRDCARD_HEADING, THIRDCARD_SUBHEADING } from "./constant";
import { styles } from "./styles";
const AmbulanceScreen = () => {
    const AmbulanceServiceCards = () => {
        const data = [
            { heading: FIRSTCARD_HEADING, subHeading: FIRSTCARD_SUBHEADING, image: SVG['AMBULANCESERVICE_SUBIMAGE1'] },
            { heading: SECONDCARD_HEADING, subHeading: SECONDCARD_SUBHEADING, image: SVG['AMBULANCESERVICE_SUBIMAGE2'] },
            { heading: THIRDCARD_HEADING, subHeading: THIRDCARD_SUBHEADING, image: SVG['AMBULANCESERVICE_SUBIMAGE3'] }
        ];
        return data.map(item => {
            return (
                <View style={styles.serviceCardMainContainer}>
                    <View style={styles.serviceCardSubContainer}>
                        <Text style={styles.subContainerTextStyle}>{item?.heading}</Text>
                        <View style={styles.subContainerImageStyle}>
                            {item?.image()}
                        </View>
                    </View>
                    <Text style={styles.subContainerBottomTextStyle}>{item?.subHeading}</Text>
                </View>
            )
        })
    }
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <Text style={styles.headingStyle}>{HEADING}</Text>
                <Image source={PNG.AmbulanceImage} style={styles.mainImageStyle} resizeMode='cover' />
                <Text style={styles.subHeadingStyle}>{SUBHEADING}</Text>
                <Text style={styles.detialsTextStyle}>{DETIALS_TEXT}</Text>
                <AmbulanceServiceCards />
            </ScrollView>
        </View>
    )
}

export default AmbulanceScreen; 