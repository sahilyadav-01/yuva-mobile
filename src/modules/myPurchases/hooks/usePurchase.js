import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { getPlans } from "../../../store/reducers/PurchasesSlice";

export const usePurchase = (plan) => {
    const {purchasesTab,plans} = useSelector(state => state.purchases);
    const [planList, setPlanList] = useState([]);
    const [plansPageNo,setPlansPageNo] = useState(1)
    const dispatch = useDispatch();
    useEffect(()=>{
        if(purchasesTab === 0 && plansPageNo === 1 && plan){
        dispatch(getPlans({pageNo:plansPageNo,pageSize:3,orderStatus:''}))
        }
    },[purchasesTab])

    useEffect(()=>{
        if(plansPageNo > 1 && purchasesTab === 0){
            dispatch(getPlans({pageNo:plansPageNo,pageSize:3,orderStatus:''}))
            console.log('Call api',plansPageNo,purchasesTab)
        }
    },[plansPageNo])

    useEffect(()=>{
        if(plans && typeof plans?.userPlanOrderHistoryResponseDtoList === 'object' && plans?.userPlanOrderHistoryResponseDtoList.length > 0){
            setPlanList(_.uniqBy(planList.concat(plans.userPlanOrderHistoryResponseDtoList),'dateOfPurchase'))
        }
    },[plans])

    const onEndReached = () => {
        if(purchasesTab === 0 && plansPageNo < plans?.totalPages){
           setPlansPageNo(plansPageNo + 1);
        }
    } 

    return {tabIndex:purchasesTab,planList, onEndReached};
}
