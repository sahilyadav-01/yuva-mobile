import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {Alert} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { removeCouponCart } from "../../../../../store/reducers/CartSlice";
import { clearApiErrorMessage, removeCoupon } from "../../../../../store/reducers/CouponSlice";
import { planAmountThunk, selectedItem } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { TERMS_CONDITION } from "../constants";


export const useCheckout = () => {
    const focused = useIsFocused();
    const { termsAndCondtionChecked } = useSelector(state => state.cart);
    const route = useRoute();
    const [selectedPlanType, setSelectedPlanType] = useState('');
    const [finalamountToBePaid, setFinalAmountToBePaid] = useState();
    const [couponFinalAmount, setCouponFinalAmount] = useState();
    const [planTypeEnum, setPlanTypeEnum] = useState();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {selectedCity} = useSelector(
        state => state.profile,
      );
  
    const {ourPlanData,planPrice,planAmountToBePaid,planType,setItemName} = useSelector(state => state.programAndPlan);
    const { planCouponFinalAmount, planeCouponCode } = useSelector(state => state.coupon);
    const { loggedIn } = useSelector(state => state.auth);
    const isLoggedIn = loggedIn === 'loggedIn';
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
    // const plans = [{ planTypeEnum: 'QUARTERLY', cost: quarterlyPrice ?? 0 }, { planTypeEnum: 'HALF_YEARLY', cost: halfYearlyPrice ?? 0 }, { planTypeEnum: 'ANNUALLY', cost: yearlyPrice ?? 0 }]
    useEffect(()=>{
      dispatch(selectedItem(selectedPlanType ? selectedPlanType: PlanTypee?.[0]))
    },[PlanTypee])
    useEffect(()=>{
      if(setItemName==='Annually'){
       setFinalAmountToBePaid(planAmountToBePaid?.ANNUALLY?.amountToBePaid)
       setCouponFinalAmount(planCouponFinalAmount?.ANNUALLY?.amountToBePaid)  
       setPlanTypeEnum("ANNUALLY") 
      }
     else if(setItemName==='Quarterly'){
        setFinalAmountToBePaid(planAmountToBePaid?.QUARTERLY?.amountToBePaid)
        setCouponFinalAmount(planCouponFinalAmount?.QUARTERLY?.amountToBePaid)   
        setPlanTypeEnum("QUARTERLY") 
      }
       else if(setItemName==='Half Yearly'){   
        setFinalAmountToBePaid(planAmountToBePaid?.HALF_YEARLY?.amountToBePaid)
        setCouponFinalAmount(planCouponFinalAmount?.HALF_YEARLY?.amountToBePaid)     
        setPlanTypeEnum("HALF_YEARLY")
      }
    },[setItemName,planCouponFinalAmount,planAmountToBePaid])
    const onPayPress = () => {
        // const planTypeEnum = plans.find((item) => item.cost === Math.max(quarterlyPrice, halfYearlyPrice, yearlyPrice))?.planTypeEnum ?? null;
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
            planTypeEnum,
            planUuid: ourPlanData?.planUuid,
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
        dispatch(planAmountThunk({planUuid: ourPlanData?.planUuid}));
      }, []);

      useEffect(()=> {
        if(focused){
            dispatch(removeCoupon());
            dispatch(removeCouponCart());
            dispatch(clearApiErrorMessage(''));
        }
      }, [focused]);
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
        // plans,
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
        couponFinalAmount
    }
}