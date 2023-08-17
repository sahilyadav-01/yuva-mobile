import {useNavigation } from "@react-navigation/native";
import  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADDRESS, LOGIN_SCREEN } from "../constants";
import { planDetailsThunk } from "../../../store/reducers/ProgramAndPlanSlice";

export const useOurPlanDetails = (props) => {
    const { ourPlanData,planDetails } = useSelector(state => state.programAndPlan);
    const {loggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    useEffect(() => {
         let Uuid = ourPlanData?.planUuid;
        dispatch(planDetailsThunk(Uuid))
    }, [])

    const bookOurPlan = () => {
        if(loggedIn === 'loggedIn') {
            alert("Hiiiiiiiiiii")
            // navigation.navigate(ADDRESS,{plan:true})
        } 
        // else {
        //     // navigation.navigate('Home',{screen:LOGIN_SCREEN, params: { from: 'OurPlanDetailsGuest'} });
        // }
    }
    return {
        planDetails,
        bookOurPlan,
        ourPlanData
    }
}