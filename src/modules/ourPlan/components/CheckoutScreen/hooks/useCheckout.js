import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { TERMS_CONDITION } from "../constants";


export const useCheckout = () => {
    const {TermsAndCondtionChecked}=useSelector(state=>state.cart);
    const route = useRoute();
    const navigation = useNavigation();
    const {mainItem} = useSelector(state=>state.programAndPlan);
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        cityId,
        plan } = route?.params || {};
    const onPayPress = () => {
        const bookingRequestDto = {
            address,
            cityId,
            contactNumber:contact,
            packageUuid: [],
            patientId: 0,
            pinCode:pincode,
            plan: true,
            programOrPlanUuid: mainItem?.planUuid,
            relationId: 0,
            testId: [],
            timeSlot: 0,
            userPlanVersion: 0,
            version: 0
          };
        const subscriptionRequestDto = {
            planTypeEnum: "QUARTERLY",
            planUuid: mainItem?.planUuid
          }
        const paymentProps = {plan,bookingRequestDto,subscriptionRequestDto}
        navigation.navigate('PaymentScreen',{paymentProps})
    }

    const onCheckout=()=>{
        if(!TermsAndCondtionChecked){
            alert(TERMS_CONDITION)
        }
        else onPayPress();
    }
    return {
        address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        cityId,
        TermsAndCondtionChecked,
        onCheckout
    }
}