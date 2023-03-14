import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import { ALERT, CHECK_OUT_SCREEN, PLEASE_CHECK_ADDRESS } from "../constants";


export const useOurPlanAddress = () => {
    const route = useRoute();
    const { quarterlyPrice, halfYearlyPrice, yearlyPrice, plan } = route?.params || {};
    const navigation = useNavigation();
    const [checked, setChecked] = useState(null);
    const { userAddress, selectedAddress } = useSelector(state => state?.profile);
    const checkoutData = {
        ...selectedAddress,
        quarterlyPrice,
        halfYearlyPrice,
        yearlyPrice
    }
    const AddressAdded = () => {
        if (selectedAddress?.address) {
            navigation.navigate(CHECK_OUT_SCREEN, {...checkoutData,plan:plan ?? null})
        } else {
            Alert.alert(ALERT, PLEASE_CHECK_ADDRESS);
        }
    }
    return {
        userAddress,
        setChecked,
        checked,
        AddressAdded

    }
}