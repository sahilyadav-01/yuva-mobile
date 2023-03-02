import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUserAddress } from "../../../../../store/reducers/ProfileSlice";
import { ADDNEWADDRESS, ADDRESS, ALERT, CHECKOUTSCREEN, PLEASE_CHECK_ADDRESS } from "../constants";


export const useOurAddress = () => {
    const route = useRoute();
    const { quarterlyPrice, halfYearlyPrice, yearlyPrice } = route?.params
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [currentStep, UpdateCurrentStep] = useState(1);
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
    const address = userAddress[checked]?.address || userAttribute?.address;
    const pincode = userAddress[checked]?.pinCode || userAttribute?.pincode;
    const contact = userAddress[checked]?.contactNumber || userAttribute?.contact;
    const cityName = userAddress[checked]?.cityName || userAttribute?.cityName;

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
        navigation.navigate(ADDNEWADDRESS)
    }
    const AddressAdded = () => {
        if (address) {
            navigation.navigate(CHECKOUTSCREEN, checkoutData)
        } else {
            Alert.alert(ALERT, PLEASE_CHECK_ADDRESS);
        }
    }
    return {
        currentStep,
        userAddress,
        setChecked,
        checked,
        AddNewAddress,
        userAttribute,
        AddressAdded
    }
}