import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    diagnosisPackageDetailsThunk
} from '../../../../store/reducers/DiagnosticsSlice';
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/native';
import { BOOKINGCONFIRM } from '../constants';

export const useBookingTestAndPackage = () => {
    const route = useRoute();
    const { packageName ,uuid,userVersion,version,plan} = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const { packageDetails } = useSelector(state => state.diagnostic);
 
    const list = packageDetails?.attributeResponseDtoList?.map((item) => {
        return {
            ...item,
            isExpanded: false
        }

    }
    )
    const PLAN={
        Uuid:uuid,userVersion:userVersion,version:version,plan:plan
    }
    const bookPackageScreen=()=>{
        navigation.navigate(BOOKINGCONFIRM, PLAN)
    }
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
    useEffect(() => {
        dispatch(diagnosisPackageDetailsThunk({ packageName }));
    }, []);

    return {
        packageDetails,
        packageList,
        onUpdate,
        bookPackageScreen
    }
}