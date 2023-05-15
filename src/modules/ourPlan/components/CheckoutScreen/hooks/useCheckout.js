import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import {Alert} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { removeCouponCart } from "../../../../../store/reducers/CartSlice";
import { redeemCouponsSliceThunk, removeCoupon } from "../../../../../store/reducers/CouponSlice";
import { planAmountThunk } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { TERMS_CONDITION } from "../constants";


export const useCheckout = () => {
    const focused = useIsFocused();
    const { termsAndCondtionChecked } = useSelector(state => state.cart);
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { mainItem,planPrice,planAmountToBePaid} = useSelector(state => state.programAndPlan);
    const { planCouponFinalAmount, planeCouponCode } = useSelector(state => state.coupon);
    const { loggedIn } = useSelector(state => state.auth);
    const isLoggedIn = loggedIn === 'loggedIn';
    const planName = mainItem.name;
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice: YearlyPrice,
        quarterlyPrice: QuarterlyPrice,
        halfYearlyPrice: HalfYearlyPrice,
        cityId,
        plan,
        number } = route?.params || {};
    const quarterlyPrice = QuarterlyPrice !== undefined ? QuarterlyPrice : mainItem?.quarterlyPrice;
    const halfYearlyPrice = HalfYearlyPrice !== undefined ? HalfYearlyPrice : mainItem?.halfYearlyPrice;
    const yearlyPrice = YearlyPrice !== undefined ? YearlyPrice : mainItem?.yearlyPrice
    const plans = [{ planTypeEnum: 'QUARTERLY', cost: quarterlyPrice ?? 0 }, { planTypeEnum: 'HALF_YEARLY', cost: halfYearlyPrice ?? 0 }, { planTypeEnum: 'ANNUALLY', cost: yearlyPrice ?? 0 }]
    const onPayPress = () => {
        const planTypeEnum = plans.find((item) => item.cost === Math.max(quarterlyPrice, halfYearlyPrice, yearlyPrice))?.planTypeEnum ?? null;
        const bookingRequestDto = {
            address,
            cityId,
            contactNumber: contact,
            packageUuid: [],
            patientId: 0,
            pinCode: pincode,
            plan: true,
            programOrPlanUuid: mainItem?.planUuid,
            relationId: 0,
            testId: [],
            timeSlot: 0,
            userPlanVersion: 0,
            version: 0
        };
        const subscriptionRequestDto = {
            address,
            cityId,
            pinCode: pincode,
            number,
            planTypeEnum,
            planUuid: mainItem?.planUuid,
            couponName:planeCouponCode ?? undefined,
        }
        const paymentProps = { plan: true, bookingRequestDto, subscriptionRequestDto }
        navigation.navigate('Payment', { screen: 'PaymentScreen', params: { paymentProps } })
    }
    const onCheckout = () => {
        if (!termsAndCondtionChecked) {
            Alert.alert('Alert',TERMS_CONDITION)
        }
        else onPayPress();
    }
      useEffect(()=> {
        dispatch(planAmountThunk({planUuid: mainItem?.planUuid}));
        if(focused){
            dispatch(redeemCouponsSliceThunk({ isLoggedIn }));
            dispatch(removeCoupon());
            dispatch(removeCouponCart());
        }
      }, []);
    return {
        address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        cityId,
        termsAndCondtionChecked,
        onCheckout,
        price: Math.max(yearlyPrice, quarterlyPrice, halfYearlyPrice),
        planUuid: mainItem?.planUuid,
        plans,
        planName,
        planPrice,
        planAmountToBePaid,
        planeCouponCode,
        planCouponFinalAmount,
    }
}