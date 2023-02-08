import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    diagnosisPackageDetailsThunk
} from '../../../../store/reducers/DiagnosticsSlice';
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/native';

export const useBookingTestAndPackage = () => {
     const route = useRoute();
     const { packageName } = route.params;
        
     console.log(packageName,"ddddcccccc")


    const dispatch = useDispatch();
    const navigation = useNavigation()
    const { packageDetails } = useSelector(state => state.diagnostic);


console.log(packageDetails,"fdfdfdfdfddf")
    useEffect(() => {
        dispatch(diagnosisPackageDetailsThunk({packageName}));
    }, []);



    return {
        packageDetails
    }
}