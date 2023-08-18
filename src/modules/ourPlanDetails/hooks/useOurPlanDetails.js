import { planDetailsThunk } from "../../../store/reducers/ProgramAndPlanSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export const useOurPlanDetails = (props) => {
    const { ourPlanData ,planDetails} = useSelector(state => state.programAndPlan);
    const dispatch = useDispatch();
    useEffect(() => {
         let Uuid = ourPlanData?.planUuid;
        dispatch(planDetailsThunk(Uuid))
    }, [])
    return {
        planDetails
    }
}