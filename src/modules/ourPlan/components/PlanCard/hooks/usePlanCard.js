
import { useNavigation } from "@react-navigation/native";
import { OURPLAN } from "../../../constant";

export const usePlanCard = () => {
    const navigation = useNavigation()
    const onDetailsScreen = () => {
        navigation.navigate(OURPLAN);
    }
    return {
        onDetailsScreen,
    }
}
