import { getAllPlanServicesThunk, planDetailsThunk } from "../../../store/reducers/ProgramAndPlanSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";


export const useOurPlanDetails = (props) => {
    const { ourPlanData ,planDetails,planDetailsLoading,planDetailsError,getAllPlanServices, getAllPlanServicesLoading,getAllPlanServicesError} = useSelector(state => state.programAndPlan);
    const dispatch = useDispatch();
    const focused = useIsFocused();
    useEffect(() => {
        let Uuid = ourPlanData?.planUuid;
        if (focused) {
            dispatch(planDetailsThunk(Uuid));
            dispatch(getAllPlanServicesThunk(Uuid));
        }
    }, [focused]);
    return {
        planDetails,
        planDetailsLoading,
        planDetailsError,
        getAllPlanServices,
        getAllPlanServicesLoading,
        getAllPlanServicesError
    }
}