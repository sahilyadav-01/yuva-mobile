import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDoctorThunk } from "../../../store/reducers/DoctorSlice";

export const useDoctor=()=>{
 
    const dispatch = useDispatch();
 
    const data  =  useSelector(state  =>  state.doctor.data)
    const {jwt}    =  useSelector(state => state.auth.user)
    const [searchQuery, setSearchQuery] =useState('');
    useEffect(()=>{
        dispatch(searchDoctorThunk({search:""}))
    },[])
    const onChangeSearch = (query) => {
        setSearchQuery(query)
        if(query.length >  2){
            dispatch(searchDoctorThunk({search:'&search='+query}))
        } else if(query == ""){
            dispatch(searchDoctorThunk({search:""}))
        }
    }
    return {
onChangeSearch,
searchQuery,
data
    }

};