
import { useState, useEffect } from 'react';
import { ADDED_SUCCESSFULLY, ALERT, BOOKING_CONFIRM, FIELD_MISSING, PINCODE_MUST_BE } from '../constants'
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';

export const useAddNewAddress = (isScreen) => {
    const navScreen = isScreen?.isScreen;
    const [selected, setSelected] = useState("");
    const [location, setLocation] = useState('');
    const [location2, setLocation2] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');
    const [errorState, setErrorState] = useState(false)
    const [errorPincode, setErrorPincode] = useState(false);
    const [errorAddress,setErrorAddress]=useState(false);
    const navigation = useNavigation();

    const DATA = [{
        address: location,
        pinCode: pincode,
        cityName: city,
        contactNumber: contact,
        location2: location2,
        saveAs: selected
    }]

    const onChangeLocation = text => {
        if (!(text?.length >1 || text?.length ===0)) {
            setErrorAddress(true)
        }
        else {errorState
            setPincode(text);
            setErrorAddress(false)
        }
    };
    const onChangeLocation2 = text => {
        setLocation(text);
    };
    const onChangePincode = text => { 
        if (!(text?.length === 6 || text?.length === 0)) {
            setErrorPincode(true)
        }
        else {errorState
            setPincode(text);
            setErrorPincode(false)
        }
    };
    const onChangeCity = text => {
        setCity(text)
    }
    const onChangeContact = number => {
        if (!(number?.length === 10 || number?.length ===0) || Number(number[0]) < 6) {
            setErrorState(true)
        }
        else {errorState
            setContact(number);
            setErrorState(false)
        }
    }
    const addAddress = () => {
        if (!(pincode?.length === 6)) {
            Alert.alert(ALERT, PINCODE_MUST_BE)
        }
        else if (location?.length && city?.length && data?.length) {
            navigation.navigate(navScreen, DATA);
            Alert.alert(ALERT, ADDED_SUCCESSFULLY)
        } else {
            Alert.alert(ALERT, FIELD_MISSING)
        }
    }
    return {

        selected,
        setSelected,
        addAddress,
        onChangePincode,
        onChangeLocation,
        onChangeContact,
        onChangeCity,
        onChangeLocation2,
        setLocation2,
        errorState,
        errorPincode,
        errorAddress,
    }


};