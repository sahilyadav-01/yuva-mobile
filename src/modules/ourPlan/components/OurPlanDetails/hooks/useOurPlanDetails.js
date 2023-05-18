import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { planDetailsThunk } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { ADDRESS, LOGIN_SCREEN } from "../constants";

export const useOurPlanDetails = () => {
    const { mainItem, planDetails } = useSelector(state => state.programAndPlan);
    const {loggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    useEffect(() => {
        let Uuid = mainItem?.planUuid;
        dispatch(planDetailsThunk(Uuid))

    }, [mainItem])
    const bookOurPlan = () => {
        if(loggedIn === 'loggedIn') {
            navigation.navigate('Home',{screen:'OurPlan',params: {screen:ADDRESS,params:{...mainItem,plan:true}}})
        } else {
            navigation.navigate('Home',{screen:LOGIN_SCREEN})
        }
    }
    const plansPricing = [{value:mainItem?.quarterlyFinalCost,multiplier:3},{value:mainItem?.yearlyFinalCost,multiplier:12},{value:mainItem?.halfYearlyFinalCost,multiplier:6}]
    const maxPrice = Math.max(mainItem?.quarterlyFinalCost,mainItem?.yearlyFinalCost,mainItem?.halfYearlyFinalCost);
    const maxPriceObj = plansPricing.find(item=>{if(item?.value === maxPrice){
        return item
    }});
    const pricePerMonth = Math.ceil(maxPriceObj?.value/maxPriceObj?.multiplier);
    return {
        planDetails,
        bookOurPlan,
        pricePerMonth,
    }
}