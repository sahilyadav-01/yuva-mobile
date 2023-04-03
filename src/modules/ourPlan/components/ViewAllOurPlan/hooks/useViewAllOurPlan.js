import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { requestCallThunk, resetPackages } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { FAQ_QUESTIONS, THANKS_FOR_CONTACTING, WE_WILL_CONTACT } from "../constants";




export const useViewAllOurPlan = () => {
    const { requestCall } = useSelector(state => state.programAndPlan)
    const [number, setNumber] = useState('');
    const [errorState, setErrorState] = useState(false)
    const dispatch = useDispatch();
    const list = FAQ_QUESTIONS.map((item) => {
        return {
            ...item,
            isExpanded: false
        }
    })
    const [packageList, setPackageList] = useState(list)
    const onUpdate = (index) => {
        const newList = packageList.map((item, itemIndex) => {
            return {
                ...item,
                isExpanded: itemIndex === index && !item.isExpanded,
            }
        });
        setPackageList(newList)
    }
    const onChangeContact = number => {
        if (!(number?.length === 10 || number?.length === 0) || Number(number[0]) < 6) {
            setErrorState(true);
        }
        else {
            setNumber(number);
            setErrorState(false)
        }
    }
    const onRequestCall = () => {
        if(number?.length===10){
        dispatch(requestCallThunk({ number }));
        }

    }
    useEffect(() => {
        if (requestCall?.message) {
            Alert.alert(THANKS_FOR_CONTACTING,WE_WILL_CONTACT)
        }
        return () => dispatch(resetPackages());
    }, [requestCall])
    return {
        packageList,
        onUpdate,
        number,
        setNumber,
        onRequestCall,
        onChangeContact,
        errorState
    }
}
