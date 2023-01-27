import { useNavigation } from "@react-navigation/native";
import { SECTION_1 } from "../constant";

export const useHRASectionContainer = () => {
    const navigation = useNavigation();
    const goToSection1 = () => {
        navigation.navigate(SECTION_1);
    };
    return {
        goToSection1,
    };
};