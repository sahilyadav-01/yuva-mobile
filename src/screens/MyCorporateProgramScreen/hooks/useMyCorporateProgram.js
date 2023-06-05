import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { myProgramThunk } from "../../../store/reducers/ProgramAndPlanSlice";
import MyProgram from '../../../modules/myProgram/PlanItem';

export const useMyCorporateProgram = () => {
    const dispatch = useDispatch();
    const [programList, setProgramList] = useState([programList]);
    const [plansPageNo, setPlansPageNo] = useState(1);

    useEffect(() => {
        dispatch(myProgramThunk({ pageNo: plansPageNo, pageSize: 10 }));
    }, [plansPageNo]);

    const { myProgramUserData } = useSelector(state => state.programAndPlan);

    useEffect(() => {
        if (
            myProgramUserData &&
            typeof myProgramUserData?.data?.userProgramResponseDtoList === 'object' &&
            myProgramUserData?.data?.userProgramResponseDtoList.length > 0
        ) {
            setProgramList(
                _.uniqBy(
                    programList.concat(myProgramUserData?.data?.userProgramResponseDtoList),
                    'dateOfPurchase',
                ),
            );
        }
    }, [myProgramUserData]);

    const renderItem = ({ item }) => {
        return <MyProgram item={item} />;
    };
    const onEndReached = () => {
        if (plansPageNo < myProgramUserData?.data?.totalPages) {
            setPlansPageNo(plansPageNo + 1);
        }
    };

    return { programList, renderItem, onEndReached }
}