import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {Alert} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { removeCouponCart, setTermsAndCondtionChecked } from "../../../../../store/reducers/CartSlice";
import { clearApiErrorMessage, removeCoupon } from "../../../../../store/reducers/CouponSlice";
import { planAmountThunk, selectedItem } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { TERMS_CONDITION } from "../constants";
import { changePaymentMethod } from "../../../../../store/reducers/PaymentSlice";


export const useCheckout = () => {
    const focused = useIsFocused();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();

    const [selectedPlanType, setSelectedPlanType] = useState('');
    const [finalamountToBePaid, setFinalAmountToBePaid] = useState();
    const [couponFinalAmount, setCouponFinalAmount] = useState();
    const [planTypeEnum, setPlanTypeEnum] = useState();
    const [checked, setChecked] = useState(false);

    const { termsAndCondtionChecked } = useSelector(state => state.cart);
    const {cod} = useSelector(state => state.payment);
    const {selectedCity} = useSelector(
        state => state.profile,
      );
    const {ourPlanData,planPrice,planAmountToBePaid,planType,setItemName} = useSelector(state => state.programAndPlan);
    const { planCouponFinalAmount, planeCouponCode } = useSelector(state => state.coupon);
    const planName = ourPlanData?.name;
    const PlanTypee =planType ? planType?.map(item => item.name) : [];
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
    const quarterlyPrice = QuarterlyPrice !== undefined ? QuarterlyPrice : ourPlanData?.quarterlyPrice;
    const halfYearlyPrice = HalfYearlyPrice !== undefined ? HalfYearlyPrice : ourPlanData?.halfYearlyPrice;
    const yearlyPrice = YearlyPrice !== undefined ? YearlyPrice : ourPlanData?.yearlyPrice

    useEffect(()=>{
      PlanTypee[0]?.length > 0 && dispatch(selectedItem(selectedPlanType ? selectedPlanType: PlanTypee[0]))
    },[PlanTypee])

    useEffect(()=>{
      if(setItemName?.length > 0 && planAmountToBePaid && planCouponFinalAmount) {
      setFinalAmountToBePaid(Object?.values(planAmountToBePaid)[0]?.amountToBePaid)
      setCouponFinalAmount(Object?.values(planCouponFinalAmount)[0]?.amountToBePaid)
      setPlanTypeEnum(Object?.keys(planAmountToBePaid)[0]) 
      }
    },[setItemName,planCouponFinalAmount,planAmountToBePaid])

    const onPayPress = () => {
      
        const bookingRequestDto = {
            address,
            cityId:selectedCity,
            contactNumber: contact,
            packageUuid: [],
            patientId: 0,
            pinCode: pincode,
            plan: true,
            programOrPlanUuid: ourPlanData?.planUuid,
            relationId: 0,
            testId: [],
            timeSlot: 0,
            userPlanVersion: 0,
            version: 0
        };
        const subscriptionRequestDto = {
            address,
            cityId:selectedCity,
            pinCode: pincode,
            number,
            planTypeEnum: Object.keys(planAmountToBePaid)[0],
            planUuid: ourPlanData?.planUuid,
            couponName:planeCouponCode ?? undefined,
        }
        const paymentProps = { plan: true, subscriptionRequestDto, cart:false }
        navigation.navigate('Payment', { screen: 'PaymentScreen', params: { paymentProps } })
    }

    const onCheckout = () => {
        if (!termsAndCondtionChecked) {
            Alert.alert('Alert',TERMS_CONDITION)
        }
        else onPayPress();
    }
      useEffect(()=> {
        dispatch(planAmountThunk({planUuid: ourPlanData?.planUuid}));
      }, []);

      useEffect(()=> {
        if(navigation.isFocused()){
            dispatch(removeCoupon());
            dispatch(removeCouponCart());
            dispatch(clearApiErrorMessage(''));
        }
      }, [focused]);

    const onCodPress = () => {dispatch(changePaymentMethod(true));}

    const onOnlinePress = () => {dispatch(changePaymentMethod(false));}

    const onCheckboxPress = check => {
      setChecked(!check);
      dispatch(setTermsAndCondtionChecked(!check));
    };

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
        planUuid: ourPlanData?.planUuid,
        planName,
        planPrice,
        planAmountToBePaid,
        planeCouponCode,
        planCouponFinalAmount,
        planType,
        setSelectedPlanType,
        PlanTypee,
        selectedPlanType,
        finalamountToBePaid,
        couponFinalAmount,
        cod,
        onCodPress,
        onOnlinePress,
        onCheckboxPress,
        checked,
        planTypeEnum
    }
}