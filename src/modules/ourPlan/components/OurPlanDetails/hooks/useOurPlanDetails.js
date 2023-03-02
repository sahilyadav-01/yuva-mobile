import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { planDetailsThunk } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { ADDRESS } from "../constants";

export const useOurPlanDetails = () => {
    const { mainItem, planDetails } = useSelector(state => state.programAndPlan);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    useEffect(() => {
        let Uuid = mainItem?.planUuid;
        dispatch(planDetailsThunk(Uuid))

    }, [mainItem])
    const bookOurPlan = () => {
        navigation.navigate(ADDRESS,mainItem);
    }
    return {
        planDetails,
        bookOurPlan
    }
}