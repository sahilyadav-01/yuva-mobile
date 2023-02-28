import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { planPopularThunk, setIndex } from "../../../../../store/reducers/ProgramAndPlanSlice";

export const useOurPlanDetails = () => {
    const { popularPlan, mainItem } = useSelector(state => state.programAndPlan);
    const [popularData, setPopularData] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(planPopularThunk())
    }, []);
    useEffect(() => {
        if (popularPlan) {
            setPopularData(mainItem)
        }
    }, [mainItem])
    return {
        popularPlan,
        
    }
}