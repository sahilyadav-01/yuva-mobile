import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { planDetailsThunk } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { ADDRESS, LOGIN_SCREEN } from "../constants";

export const ourPlanDetailsGuest = (props) => {
    const { PlanIndex } = props?.data || {};
    const { planDetails } = useSelector(state => state.programAndPlan);
    const planName = PlanIndex?.name;
    const { loggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const data = {
        PlanIndex: PlanIndex,
    }
        useEffect(() => {
            let Uuid = PlanIndex?.planUuid;
            dispatch(planDetailsThunk(Uuid));
        }, [PlanIndex]);
    
    const bookOurPlan = () => {
        if (loggedIn === 'loggedIn') {
            navigation.navigate('Home', { screen: 'OurPlan', params: { screen: ADDRESS, params: { ...PlanIndex, plan: true } } })
        } else {
            navigation.navigate('Home', { screen: LOGIN_SCREEN, params: { from: 'OurPlanDetailsGuest', data: data } });
        }
    }
   let pricePerMonth = Math.ceil((PlanIndex?.yearlyFinalCost ?? 0) / 12);

    return {
        planDetails,
        bookOurPlan,
        pricePerMonth,
        planName,
    }
}