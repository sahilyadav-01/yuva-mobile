import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCouponCart } from "../../../../../store/reducers/CartSlice";
import { planDetailsThunk } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { ADDRESS, LOGIN_SCREEN } from "../constants";

export const useOurPlanDetails = () => {
    const focused = useIsFocused();
    const { mainItem, planDetails } = useSelector(state => state.programAndPlan);
    const {loggedIn} = useSelector(state => state.auth);
    const [selected, setSelected] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const data = {
        PlanIndex: mainItem,
    }
    useEffect(() => {
        let Uuid = mainItem?.planUuid;
        dispatch(planDetailsThunk(Uuid))
    }, [mainItem])
    
    useEffect(()=> {
        if(focused){
            dispatch(removeCouponCart());
        }
      }, [focused]);

    const onBackPress = () => {
        navigation.navigate('Home',{screen:'HomeService',params:{navigateToDetails:false}})
    }

    const bookOurPlan = () => {
        if(loggedIn === 'loggedIn') {
            navigation.navigate(ADDRESS,{...mainItem,plan:true})
        } else {
            navigation.navigate('Home',{screen:LOGIN_SCREEN, params: { from: 'OurPlanDetailsGuest', data: data } });
        }
    }
    const plansPricing = [{value:mainItem?.quarterlyFinalCost,multiplier:3},{value:mainItem?.yearlyFinalCost,multiplier:12},{value:mainItem?.halfYearlyFinalCost,multiplier:6}]
    const maxPrice = Math.max(mainItem?.quarterlyFinalCost,mainItem?.yearlyFinalCost,mainItem?.halfYearlyFinalCost);
    const maxPriceObj = plansPricing.find(item=>{if(item?.value === maxPrice){
        return item
    }});
    const pricePerMonth = Math.ceil(maxPriceObj?.value/maxPriceObj?.multiplier);
    const dataRender = [
        {key:'1', value:'4'},
        {key:'2', value:'6'},
    ]
    
    return {
        planDetails,
        bookOurPlan,
        pricePerMonth,
        mainItem,
        dataRender,
        selected, 
        setSelected,
        onBackPress
    }
}