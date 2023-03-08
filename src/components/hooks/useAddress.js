import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUserAddress, saveCheckedAddress } from "../../store/reducers/ProfileSlice";
import { NEW_ADDRESS, ADDRESS, ALERT, CHECK_OUT_SCREEN, PLEASE_CHECK_ADDRESS } from "../constants";


export const useOurAddress = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [userAttribute, setUserAttribute] = useState(null);
    const [userNewAddress, setUserNewAddress] = useState();
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
    const address = userAddress?.[checked]?.address || userAttribute?.[0]?.address;
    const pincode = userAddress?.[checked]?.pinCode || userAttribute?.[0]?.pinCode;
    const contact = userAddress?.[checked]?.contactNumber || userAttribute?.[0]?.contactNumber;
    const cityName = userAddress?.[checked]?.cityName || userAttribute?.[0]?.cityName;

    const checkoutData = {
        address: address,
        pincode: pincode,
        contact: contact,
        cityName: cityName,
    }
    const AddNewAddress = () => {
        navigation.navigate(NEW_ADDRESS)
    }
    useEffect(() => {
        dispatch(saveCheckedAddress(checkoutData))
    }, [address])

    useEffect(() => {
        if (userAttribute?.[0]?.address) {
            setUserNewAddress(userAttribute)
        }
    }, [userAttribute])


    if (userNewAddress?.[0]?.address) {
        var userAddressListing = userAddress.concat(userNewAddress)
    }
    else {
        var userAddressListing = userAddress;
    }
    return {
        userAddress,
        setChecked,
        checked,
        AddNewAddress,
        userAttribute,
        userAddressListing
    }
}