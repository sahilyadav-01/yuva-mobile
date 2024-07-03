
import { useState, useEffect } from 'react';
import { ADDED_SUCCESSFULLY, ALERT, ADDRESS_VALIDATION, CITY_VALIDATION, PHONE_NUMBER_VALIDATION, PINCODE_VALIDATION } from '../constants'
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCity as setCityThunk } from '../../store/reducers/ProfileSlice';

export const useAddNewAddress = (isScreen) => {
    const navScreen = isScreen?.isScreen;
    const [selected, setSelected] = useState(false);
    const [location, setLocation] = useState('');
    const [location2, setLocation2] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');
    const [errorState, setErrorState] = useState(false)
    const [errorPincode, setErrorPincode] = useState(false);
    const [errorAddress,setErrorAddress]=useState(false);
    const [dropdownCityId, setCityId] = useState(null);
    const {cityId} = useSelector(state=>state.diagnostic);
    const dispatch = useDispatch();
    const navigation = useNavigation();
let address=`${location} ${location2}`
    const DATA = [{
        address: address,
        pinCode: pincode,
        cityName: city,
        contactNumber: contact,
        location2: location2,
        saveAs: selected,
        cityId: dropdownCityId
    }]

    const onChangeLocation = text => {
        if (!(text?.length >1 || text?.length ===0)) {
            setErrorAddress(true)
        }
        else {errorState
            setLocation(text);
            setErrorAddress(false)
        }
    };
    const onChangeLocation2 = text => {
        setLocation2(text);
    };
    const setSelectedCity = (arg) => {
        setCityId(parseInt(arg));
        dispatch(setCityThunk(parseInt(arg)));
        setCity(cityId.find(item=>{if(item?.id === parseInt(arg)) return item})?.name)
    }
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
        if(dropdownCityId !== null) {
            setCity(cityId.find(item=>{if(item?.id === dropdownCityId) return item})?.name)
        }
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
        if (pincode?.length !== 6) Alert.alert(ALERT, PINCODE_VALIDATION)
        else if(location?.length === 0) Alert.alert(ALERT,ADDRESS_VALIDATION)
        else if(dropdownCityId === null) Alert.alert(ALERT,CITY_VALIDATION)
        else if((!(/^\d+$/).test(contact?.toString())) || !contact?.length === 10) Alert.alert(ALERT,PHONE_NUMBER_VALIDATION)
        else {
            navigation.navigate(navScreen, {...DATA,addressAdded:true});
            Alert.alert(ALERT, ADDED_SUCCESSFULLY)
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
        cityId: cityId?.map(item=>{return {...item,key:item?.id.toString(),value:item?.name}}),
        setSelectedCity
    }


};