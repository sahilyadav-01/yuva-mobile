import { useState } from "react";


export const useCheckoutPriceDetails=(isPrice)=>{

const {yearlyPrice,quarterlyPrice,halfYearlyPrice}=isPrice?.isPrice;
const [checked, setChecked] = useState(false);
if(checked ===true){

    alert("hello")
}
return {

        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
        checked,
        setChecked

    }
}