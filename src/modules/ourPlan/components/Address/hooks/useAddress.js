import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUserAddress } from "../../../../../store/reducers/ProfileSlice";
import { ADD_NEW_ADDRESS, ADDRESS, ALERT, CHECK_OUT_SCREEN, PLEASE_CHECK_ADDRESS } from "../constants";


export const useOurAddress = () => {
    const route = useRoute();
    const { quarterlyPrice, halfYearlyPrice, yearlyPrice } = route?.params || {};
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [userAttribute, setUserAttribute] = useState(null);
    const [checked, setChecked] = useState(null);
    const { userAddress } = useSelector(state => state?.profile);
    useEffect(() => {
        dispatch(getUserAddress())
    }, [])
    useEffect(() => {
        if (route?.name === ADDRESS) {
            setUserAttribute(route?.params)
        }
    }, [route])
    const address = userAddress?.[checked]?.address || userAttribute?.address;
    const pincode = userAddress?.[checked]?.pinCode || userAttribute?.pinCode;
    const contact = userAddress?.[checked]?.contactNumber || userAttribute?.contactNumber;
    const cityName = userAddress?.[checked]?.cityName || userAttribute?.cityName;

    const checkoutData = {
        address: address,
        pincode: pincode,
        contact: contact,
        cityName: cityName,
        yearlyPrice: yearlyPrice,
        quarterlyPrice: quarterlyPrice,
        halfYearlyPrice: halfYearlyPrice,
    }
    const AddNewAddress = () => {
        navigation.navigate(ADD_NEW_ADDRESS)
    }
    const AddressAdded = () => {
        if (address) {
            navigation.navigate(CHECK_OUT_SCREEN, checkoutData)
        } else {
            Alert.alert(ALERT, PLEASE_CHECK_ADDRESS);
        }
    }
    return {
        userAddress,
        setChecked,
        checked,
        AddNewAddress,
        userAttribute,
        AddressAdded
    }
}