import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { BackHandler } from 'react-native'
import { getExistingUser, setExistingUser } from "../../../store/LocalStore";

export const useIntro = () => {
    const [index, setIndex] = useState(0)
    const navigation = useNavigation();
    useFocusEffect(() => {
        getExistingUser().then(resp => {
            if (resp) BackHandler.exitApp();
        });
    }, []);

    const setScreen = (index) => {
        if (index >= 0 && index <= 3) {
            setIndex(index)
        }
        else {
            setExistingUser().then(() => navigation.navigate('HomeScreen'))
        }
    }

    const onNext = () => {
        const value = index + 1;
        setIndex(value);
    }

    return { onNext, index, setScreen }
};