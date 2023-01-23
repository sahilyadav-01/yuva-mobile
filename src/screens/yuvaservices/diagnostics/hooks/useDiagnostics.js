import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingTestAndPackageThunk } from "../../../../store/reducers/DiagnosticsSlice";


export const useDiagnostic = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
    useEffect(() => {
        let isActive = "true";
        dispatch(bookingTestAndPackageThunk({ jwt, isActive }));
        isActive = "false"
        dispatch(bookingTestAndPackageThunk({ jwt, isActive }));
    }, []);
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