import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTermsAndCondtionChecked } from "../../../store/reducers/CartSlice";


export const useCheckoutPriceDetails = (isPrice) => {
    const dispatch = useDispatch();
    const { amountToBePaid, yearlyPrice, quarterlyPrice, halfYearlyPrice, totalCost, totalDiscount, Quantity } = isPrice?.isPrice;
    const [checked, setChecked] = useState(false);
    const { planTotalAmount, planDiscount, planFinalAmount, planeCouponCode } = useSelector(state => state.coupon);

    useEffect(() => {
        dispatch(setTermsAndCondtionChecked(checked))
    }, [checked])
    return {
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        checked,
        setChecked,
        price: isPrice?.price,
        amountToBePaid,
        totalCost,
        totalDiscount,
        Quantity,
        planTotalAmount, 
        planDiscount, 
        planFinalAmount, 
        planeCouponCode,
    }
}