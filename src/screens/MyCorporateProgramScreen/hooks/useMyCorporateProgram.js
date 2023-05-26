import React from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { myProgramThunk } from "../../../store/reducers/ProgramAndPlanSlice";
import MyProgram from '../../../modules/myProgram/PlanItem';

export const useMyCorporateProgram = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(myProgramThunk({pageNo: 1, pageSize: 10}));
    }, []);
    const { myProgramUserData } = useSelector(state => state.programAndPlan);
    const renderItem = ({ item }) => {
        return <MyProgram item={item} />;
      };

    return { myProgramUserData, renderItem }
}