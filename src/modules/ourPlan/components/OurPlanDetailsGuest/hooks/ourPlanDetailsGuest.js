import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { planDetailsThunk, saveGuestPlanData } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { ADDRESS, LOGIN_SCREEN } from "../constants";

export const ourPlanDetailsGuest = (props) => {
    const { PlanIndex } = props?.data || {};
    const { planDetails,guestPlanData } = useSelector(state => state.programAndPlan);
    const { loggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    if(PlanIndex){
        dispatch(saveGuestPlanData(PlanIndex));
    }
    const data = {
        PlanIndex: PlanIndex,
    }
        useEffect(() => {
            let Uuid = guestPlanData?.planUuid;
            dispatch(planDetailsThunk(Uuid));
        }, []);
    
    const bookOurPlan = () => {
        if (loggedIn === 'loggedIn') {
            navigation.navigate('Home', { screen: 'OurPlan', params: { screen: ADDRESS, params: { ...PlanIndex, plan: true } } })
        } else {
            navigation.navigate('Home', { screen: LOGIN_SCREEN, params: { from: 'OurPlanDetailsGuest', data: data } });
        }
    }
   const planName = guestPlanData?.name;
   let pricePerMonth = Math.ceil((guestPlanData?.yearlyFinalCost ?? 0) / 12);

    return {
        planDetails,
        bookOurPlan,
        pricePerMonth,
        planName,
    }
}