import { useNavigation } from "@react-navigation/native";
import { SECTION_4 } from "../constant";

export const useHRASectionContainer = () => {
    const navigation = useNavigation();
    const goToSection1 = () => {
        navigation.navigate(SECTION_4);
    };
    return {
        goToSection1,
    };
};