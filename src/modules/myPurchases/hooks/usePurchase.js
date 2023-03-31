import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "../../../store/reducers/PurchasesSlice";

export const usePurchase = () => {
    const {purchasesTab,plans} = useSelector(state => state.purchases);
    const [planList, setPlanList] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(purchasesTab === 0){
        console.log('Tab')
        dispatch(getPlans({pageNo:1,pageSize:3,orderStatus:''}))
        }
    },[purchasesTab])

    useEffect(()=>{
        if(plans && typeof plans?.userPlanOrderHistoryResponseDtoList === 'object' && plans?.userPlanOrderHistoryResponseDtoList.length > 0){
            console.log('Plans',plans)
            setPlanList(plans)
        }
    },[plans])

    return {tabIndex:purchasesTab,planList};
}
