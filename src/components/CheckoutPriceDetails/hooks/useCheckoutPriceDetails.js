import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTermsAndCondtionChecked } from "../../../store/reducers/CartSlice";


export const useCheckoutPriceDetails=(isPrice)=>{
    const dispatch = useDispatch();
const {yearlyPrice,quarterlyPrice,halfYearlyPrice}=isPrice?.isPrice;
const [checked, setChecked] = useState(false);

useEffect(()=>{
dispatch(setTermsAndCondtionChecked(checked))
},[checked])
return {
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        checked,
        setChecked,
        price:isPrice?.price

    }
}