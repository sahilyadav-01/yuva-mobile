import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { programAndPlanThunk } from '../../../../store/reducers/ProgramAndPlanSlice'
import { useIsFocused, useNavigation } from "@react-navigation/native";


export const useMyPlan = () => {
    const dispatch = useDispatch();
    const { programAndPlan } = useSelector(state => state.programAndPlan)
    const { services } = useSelector(state => state.attribute)
    const { bookingListLoading, bookingListError } = useSelector(state => state.diagnostic);
    const focused = useIsFocused();
    const navigation = useNavigation();
    useEffect(() => {
        if(services?.length && services[1]?.id && navigation.isFocused()){
            const serviceUuid=services[1].id;
            dispatch(programAndPlanThunk({ serviceUuid }))
        }
    }, [services,focused])

    return {
        programAndPlan,
        bookingListError,
        bookingListLoading
    }
};