import { useRoute } from "@react-navigation/native";


export const useCheckout = () => {
    const route = useRoute();
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice, } = route?.params || {};
    return {
        address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
    }
}