import { useNavigation } from "@react-navigation/native";

export const useHRASectionContainer = () => {
    const navigation = useNavigation();
    const goToSection1 = () => {
        navigation.navigate("section1");
    };
    return {
        goToSection1,
    };
};