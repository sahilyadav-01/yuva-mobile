import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { programAndPlanThunk } from '../../../../store/reducers/ProgramAndPlanSlice'


export const useMyPlan = () => {
    const dispatch = useDispatch();
    const { programAndPlan } = useSelector(state => state.programAndPlan)
    const { services } = useSelector(state => state.attribute)
    const { jwt } = useSelector(state => state.auth.user);
    const serviceUuid = services[1]?.id;
    useEffect(() => {

        dispatch(programAndPlanThunk({ jwt, serviceUuid }))
    }, [serviceUuid])


    return {

        programAndPlan
    }
}