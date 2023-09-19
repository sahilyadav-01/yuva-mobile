import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTermsAndCondtionChecked, removeCouponCart } from "../../../store/reducers/CartSlice";
import { selectedPlaneCouponCode } from "../../../store/reducers/CouponSlice";
import { planAmountThunk } from "../../../store/reducers/ProgramAndPlanSlice";

export const useCheckoutPriceDetails = (isPrice) => {
    const dispatch = useDispatch();
    const { amountToBePaid, totalCost, totalDiscount, Quantity, processingCharge } = isPrice?.isPrice || {};
    const { plan } = isPrice?.isplan || {};
    const [checked, setChecked] = useState(false);
    const [price, setPrice] = useState();
    const [discountBeforeCoupon, setDiscountBeforeCoupon] = useState();
    const [costAfterDiscount, setCostAfterDiscount] = useState();
    const [finalamountToBePaid, setFinalAmountToBePaid] = useState();
    const { planAmountToBePaid, planCostAfterDiscount, planDiscountBeforeCoupon, planDiscountForCoupon, planPrice, mainItem,setItemName } = useSelector(state => state.programAndPlan);
    const { planCouponDiscount, planCouponFinalAmount, planeCouponCode } = useSelector(state => state.coupon);
    const crossAction = () => {
        dispatch(selectedPlaneCouponCode({ couponCode: null }));
        dispatch(planAmountThunk({planUuid: mainItem?.planUuid}));
        dispatch(removeCouponCart());
    }
    console.log(planAmountToBePaid,planCouponFinalAmount,"hiiiiiiii212");
    useEffect(()=>{
      if(setItemName==='Annually'){
       setPrice( planPrice?.ANNUALLY?.price)
       setDiscountBeforeCoupon(planDiscountBeforeCoupon?.ANNUALLY?.discountBeforeCoupon)
       setCostAfterDiscount(planCostAfterDiscount?.ANNUALLY?.costAfterDiscount)
       setFinalAmountToBePaid(planAmountToBePaid?.ANNUALLY?.amountToBePaid)
      }
     else if(setItemName==='Quarterly'){
        setPrice( planPrice?.QUARTERLY?.price)
        setDiscountBeforeCoupon(planDiscountBeforeCoupon?.QUARTERLY?.discountBeforeCoupon)
        setCostAfterDiscount(planCostAfterDiscount?.QUARTERLY?.costAfterDiscount)
        setFinalAmountToBePaid(planAmountToBePaid?.QUARTERLY?.amountToBePaid)
       }
       else if(setItemName==='Half Yearly'){
        setPrice( planPrice?.HALF_YEARLY?.price)
        setDiscountBeforeCoupon(planDiscountBeforeCoupon?.HALF_YEARLY?.discountBeforeCoupon)
        setCostAfterDiscount(planCostAfterDiscount?.HALF_YEARLY?.costAfterDiscount)
        setFinalAmountToBePaid(planAmountToBePaid?.HALF_YEARLY?.amountToBePaid)
       }
    },[price,setItemName,planPrice])
    console.log(price,"hiiiiiii1212121212121");
    
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
        price,
        planCouponDiscount,
        planCouponFinalAmount,
        crossAction,
        planeCouponCode,
        plan,
        processingCharge,
        discountBeforeCoupon,
        costAfterDiscount,
        finalamountToBePaid
    }
}