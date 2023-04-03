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
            navigation.navigate(ADDRESS,{...mainItem,plan:true});
        } else {
            navigation.navigate(LOGIN_SCREEN);
        }
    }
    const pricePerMonth=Math.round(mainItem?.yearlyFinalCost/12);
    return {
        planDetails,
        bookOurPlan,
        pricePerMonth,
    }
}