import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { TERMS_CONDITION } from "../constants";


export const useCheckout = () => {
    const {termsAndCondtionChecked}=useSelector(state=>state.cart);
    const route = useRoute();
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice, } = route?.params || {};
        const onCheckout=()=>{
            if(!termsAndCondtionChecked){
                alert(TERMS_CONDITION)
            }
        }
    return {
        address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        termsAndCondtionChecked,
        onCheckout
    }
}