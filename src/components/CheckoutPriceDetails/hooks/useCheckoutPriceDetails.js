import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTermsAndCondtionChecked } from "../../../store/reducers/CartSlice";
import { selectedPlaneCouponCode } from "../../../store/reducers/CouponSlice";
import { planAmountThunk } from "../../../store/reducers/ProgramAndPlanSlice";

export const useCheckoutPriceDetails = (isPrice) => {
    const dispatch = useDispatch();
    const { amountToBePaid, totalCost, totalDiscount, Quantity } = isPrice?.isPrice || {};
    const [checked, setChecked] = useState(false);
    const { planAmountToBePaid, planCostAfterDiscount, planDiscountBeforeCoupon, planDiscountForCoupon, planPrice, mainItem } = useSelector(state => state.programAndPlan);
    const crossAction = () => {
        dispatch(selectedPlaneCouponCode({ couponCode: null }));
        dispatch(planAmountThunk({planUuid: mainItem?.planUuid}));
    }
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
    }
}