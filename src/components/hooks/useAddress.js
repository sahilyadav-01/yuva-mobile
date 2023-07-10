import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddressListing, getUserAddress, saveCheckedAddress, setCity } from "../../store/reducers/ProfileSlice";
import { NEW_ADDRESS } from "../constants";


export const useOurAddress = (isNavScreen) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userAttribute, setUserAttribute] = useState(null);
  const [userNewAddress, setUserNewAddress] = useState();
  const [checked, setChecked] = useState(null);
  const { userAddress } = useSelector(state => state?.profile);
  const [userAddressListing, setUserAddressListing] = useState([]);
  useEffect(() => {
    dispatch(getUserAddress())
  }, [])
  useEffect(() => {
    if (route?.name === isNavScreen?.isNavScreen) {
      setUserAttribute(route?.params)
    }
  }, [route])
  const address = userAddress?.[checked]?.address || userAttribute?.[0]?.address;
  const pincode = userAddress?.[checked]?.pinCode || userAttribute?.[0]?.pinCode;
  const contact = userAddress?.[checked]?.contactNumber || userAttribute?.[0]?.contactNumber;
  const cityName = userAddress?.[checked]?.cityName || userAttribute?.[0]?.cityName;
  const cityId = userAddress?.[checked]?.cityId || userAttribute?.[0]?.cityId;
  const away = userAddress?.[checked]?.away || userAttribute?.[0]?.saveAs;
  const checkoutData = {
    address: address,
    pincode: pincode,
    contact: contact,
    cityName: cityName,
    away:away,
    cityId
  }
  const AddNewAddress = () => {
    navigation.navigate(NEW_ADDRESS)
  }
  useEffect(() => {
    dispatch(setCity(cityId));
    dispatch(saveCheckedAddress(checkoutData));
  }, [address])

  useEffect(() => {
    if (userAttribute?.[0]?.address) {
      setUserNewAddress(userAttribute);
    }
  }, [userAttribute]);
  useEffect(() => {
    if (userNewAddress?.[0]?.address) {
      let list = userAddress.concat(userNewAddress);
      setUserAddressListing(list);
        setChecked(list.length -1);
    } else {
      setUserAddressListing(userAddress);
    }
  }, [userAddress, userNewAddress]);
  useEffect(() => {
    dispatch(AddressListing(userAddressListing))
  }, [userAddressListing])
  return {
    userAddress,
    setChecked,
    checked,
    AddNewAddress,
    userAttribute,
    userAddressListing,
  };
};
