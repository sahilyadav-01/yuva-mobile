import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";


export const useCheckout = () => {
    const route = useRoute();
    const { address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice, } = route?.params
    return {
        address,
        pincode,
        contact,
        cityName,
        yearlyPrice,
        quarterlyPrice,
        halfYearlyPrice,
    }
}