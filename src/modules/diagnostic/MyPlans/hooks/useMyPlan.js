import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { programAndPlanThunk } from '../../../../store/reducers/ProgramAndPlanSlice'


export const useMyPlan = () => {
    const dispatch = useDispatch();
    const { programAndPlan } = useSelector(state => state.programAndPlan)
    const { services } = useSelector(state => state.attribute)
    useEffect(() => {
        if(services?.length && services[1]?.id){
            const serviceUuid=services[1].id;
            dispatch(programAndPlanThunk({ serviceUuid }))
        }
    }, [services])

    return {
        programAndPlan
    }
};