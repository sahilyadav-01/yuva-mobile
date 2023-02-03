import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { PNG } from "../../../../../assets";
import { styles } from './styles';
import { useHRASectionContainer } from "./hooks/useHRASectionContainer";
import { BUTTON_TEXT } from "./constant";
const HRASectionContainer = () => {
    const { goToSection1 } = useHRASectionContainer();

    return (
        <View style={styles.mainContainer}>
            <View >
                <Image source={PNG.HRA_HOMEImage} />
            </View>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.touchableOpacityContainer}
                    onPress={goToSection1}>
                    <Text style={styles.textContainer}>{BUTTON_TEXT}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HRASectionContainer;
