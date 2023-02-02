import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { programAndPlanThunk} from '../../../../store/reducers/ProgramAndPlanSlice'


export const useMyPlan=()=>{
    const dispatch = useDispatch();
    const {programAndPlan}=useSelector(state=>state.programAndPlan)
    const {jwt} = useSelector(state => state.auth.user);
useEffect(()=>{
    const serviceUuid="ee5413dd-eb09-4a99-92d0-a4fc6d92a5e9";
dispatch(programAndPlanThunk({jwt,serviceUuid}))
},[])

    return{

        programAndPlan
    }
}