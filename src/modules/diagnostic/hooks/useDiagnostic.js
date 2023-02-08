import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export const useDiagnostic = () => {
    const navigation = useNavigation();
    const { loggedIn } = useSelector(state => state.auth);
    const onPressRightIcon = () => {
        if (loggedIn !== 'loggedIn') {
            navigation.navigate('LoginScreen');
        } else {
        }
    };
    return {
        onPressRightIcon,
        loggedIn

    }
}