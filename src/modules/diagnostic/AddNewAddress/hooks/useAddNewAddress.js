
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { ADDEDSUCCESSFULLY, ALERT, BOOKINGCONFIRM, FIELD_MISSING, PINCODE_MUST_BE } from '../constants';
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';

export const useAddNewAddress = () => {

    const [selected, setSelected] = useState("");
    const [data, setData] = useState();
    const [location, setLocation] = useState('');
    const [location2, setLocation2] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');

    const navigation = useNavigation();
    const { packageDetails } = useSelector(state => state.diagnostic);
    const DATA = {
        address: location,
        pincode: pincode,
        city: city,
        contact: contact,
        location2: location2,
        saveAs: selected
    }
    useEffect(() => {

        let newArray = [
            { key: "0", value: "Home" },
            { key: "1", value: "Office" }
        ]
        setData(newArray)

    }, [])

    const onChangeLocation = text => {
        setLocation(text);
    };
    const onChangeLocation2 = text => {
        setLocation(text);
    };
    const onChangePincode = text => {
            setPincode(text);
    };
    const onChangeCity = text => {
        setCity(text)
    }
    const onChangeContact = number => {
        setContact(number);
    }
    const addAddress = () => {
        if(!(pincode?.length ===6 )){
            Alert.alert(ALERT, PINCODE_MUST_BE)
        }
       else if (location?.length && pincode?.length && city?.length && data?.length) {
            navigation.navigate(BOOKINGCONFIRM, DATA);
            Alert.alert(ALERT, ADDEDSUCCESSFULLY)
        } else {
            Alert.alert(ALERT, FIELD_MISSING)
        }
    }

    return {

        packageDetails,
        selected,
        setSelected,
        data,
        addAddress,
        onChangePincode,
        onChangeLocation,
        onChangeContact,
        onChangeCity,
        onChangeLocation2,
        setLocation2
    }


}