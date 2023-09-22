import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTermsAndCondtionChecked, removeCouponCart } from "../../../store/reducers/CartSlice";
import { selectedPlaneCouponCode } from "../../../store/reducers/CouponSlice";
import { planAmountThunk } from "../../../store/reducers/ProgramAndPlanSlice";
import { resetPaymentMethod } from "../../../store/reducers/PaymentSlice";

export const useCheckoutPriceDetails = (isPrice) => {
    const dispatch = useDispatch();
    const { amountToBePaid, totalCost, totalDiscount, Quantity, processingCharge } = isPrice?.isPrice || {};
    const { plan } = isPrice?.isplan || {};
    const [checked, setChecked] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState(true);
    const { planAmountToBePaid, planCostAfterDiscount, planDiscountBeforeCoupon, planDiscountForCoupon, planPrice, mainItem } = useSelector(state => state.programAndPlan);
    const crossAction = () => {
        dispatch(selectedPlaneCouponCode({ couponCode: null }));
        dispatch(planAmountThunk({planUuid: mainItem?.planUuid}));
        dispatch(removeCouponCart());
    }
    const onSelect = () => {
        if (selectedOption1 === true) {
            setSelectedOption1(false);
            setSelectedOption2(true);
        }
        else {
            setSelectedOption1(true);
            setSelectedOption2(false);
        }
    }
    useEffect(() => {
        dispatch(resetPaymentMethod(selectedOption1));
    },[selectedOption1])
    const { planCouponDiscount, planCouponFinalAmount, planeCouponCode } = useSelector(state => state.coupon);
    useEffect(() => {
        dispatch(setTermsAndCondtionChecked(checked));
    }, [checked])
    return {
        amountToBePaid,
        checked,
        setChecked,
        price: isPrice?.price,
        totalCost,
        totalDiscount,
        Quantity,
        planAmountToBePaid,
        planCostAfterDiscount,
        planDiscountBeforeCoupon,
        planDiscountForCoupon,
        planPrice,
        planCouponDiscount,
        planCouponFinalAmount,
        crossAction,
        planeCouponCode,
        plan,
        processingCharge,
        onSelect,
        selectedOption1,
        selectedOption2
    }
}