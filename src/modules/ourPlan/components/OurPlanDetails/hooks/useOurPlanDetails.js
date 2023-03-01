import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { planDetailsThunk } from "../../../../../store/reducers/ProgramAndPlanSlice";

export const useOurPlanDetails = () => {
    const { mainItem, planDetails } = useSelector(state => state.programAndPlan);
    const dispatch = useDispatch();
    useEffect(() => {
        let Uuid = mainItem?.planUuid;
        dispatch(planDetailsThunk(Uuid))

    }, [mainItem])
    return {
        planDetails
    }
}