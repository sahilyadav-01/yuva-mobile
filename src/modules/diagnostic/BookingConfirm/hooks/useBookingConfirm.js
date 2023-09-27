
import { useRoute, useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bookTestThunk, rescheduleCancelBookingThunk, resetMesage } from '../../../../store/reducers/DiagnosticsSlice';
import { getRelations, getUserAddress } from '../../../../store/reducers/ProfileSlice';
import { useNavigation } from '@react-navigation/core'
import {  ALERT, BOOKED, BOOKING, BOOKINGCONFIRM, FALSE, OK, PLEASE_CHECK_ADDRESS, RESCHEDULEANDCANCEL, SELECT_DATE, UPDATEDBOOKED } from '../constants';
export const useBookingConfirm = () => {
    const route = useRoute();
    const [userAttribute, setUserAttribute] = useState(null);
    const [selected, setSelected] = useState(null);
    const [dataRelation, setDataRelation] = useState([]);
    const [city, setCity] = useState(null);
    const { packageDetails, testBooked, apiErrorMessage, cityId, reschedule } = useSelector(state => state.diagnostic);
    const { selectedCityId } = useSelector(state => state.diagnostic);
    const { relationId, userAddress, selectedAddress,addressListing } = useSelector(state => state.profile);
    const [checked, setChecked] = useState(null);
    const [epochTime, setEpochTime] = useState(null);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const focused = useIsFocused();
    const {selectedCity} = useSelector(
        state => state.profile,
      );

    useEffect(() => {
        if (route?.name === BOOKINGCONFIRM && navigation?.isFocused()) {
            setUserAttribute(route?.params)
        }
    }, [focused])
    const handleDateTime = (arg) => {
        if(arg?.status)
        setEpochTime(arg?.value);
    }
    useEffect(() => {
        if(route?.params?.plan && route?.params?.Uuid)
        dispatch(getRelations({uuid:route?.params?.Uuid,userVersion:route?.params?.userVersion,version:route?.params?.version}))
        else if(!route?.params?.plan && route?.params?.Uuid)
        dispatch(getRelations({uuid:route?.params?.Uuid,check:true}))
        dispatch(getUserAddress());
    }, [])
    useEffect(() => {
         if (relationId?.length > 0) {
            let newArray = relationId?.map((item,index) => {
                return { key: index.toString(), value: item.name + "  -  " + item.relation + "  (" + item.age + ")", relationId:item?.id }
            }
            )
            setDataRelation(newArray)
        }
    }, [relationId])

    useEffect(() => {
        if (cityId?.length) {
            cityId?.map((item, index) => {
                if (selectedCityId === item?.name) {
                    setCity(item?.id);
                }
            })
        }
    }, [selectedCityId])
    const address = selectedAddress?.address;
    const pincode = selectedAddress?.pincode;
    const contact = selectedAddress?.contact;
    const away    = selectedAddress?.away;
    const bookTestScreen = () => {
        let data = {
            address: address,
            cityId: selectedCity,
            away:away,
            contactNumber: contact,
            packageUuid: [packageDetails?.packageUuid],
            patientId: null,
            pinCode: pincode,
            plan: userAttribute?.plan,
            programOrPlanUuid: userAttribute?.Uuid,
            relationId: selected === null ? selected : selected?.relationId,
            testId: [],
            timeSlot: epochTime,
            userPlanVersion: userAttribute?.userVersion,
            version: userAttribute?.version
        };
        if(epochTime === null) {
            Alert.alert(ALERT, SELECT_DATE);
        }
        else if (packageDetails && address && Object.keys(address).length !== 0) {
            dispatch(bookTestThunk({ data }))
        } else {
            Alert.alert(ALERT, PLEASE_CHECK_ADDRESS);
        }
    }
    useEffect(() => {
        if (testBooked?.message && !apiErrorMessage) {
            Alert.alert(ALERT, BOOKED, [{
                text: OK,
                onPress: () => { navigation.navigate(RESCHEDULEANDCANCEL, testBooked) }
            }])
        }
        else if (apiErrorMessage && !testBooked) {
            Alert.alert(ALERT, apiErrorMessage, [{
                text: OK,

            }])

        }
        return () => dispatch(resetMesage())
    }, [testBooked, apiErrorMessage])

    const rescheduleBooking = () => {
        dispatch(rescheduleCancelBookingThunk({ id: userAttribute?.bookedDetails?.data?.id, isCancelled: FALSE, timeSlot: epochTime }))
    }

    const setSelectedMember = (params) => {
        if(dataRelation?.length > 0)
       setSelected(dataRelation.find((item)=>{
        if(item?.key === params?.toString()) return item;
        else return null;
    }))
    }
    useEffect(() => {
        if (reschedule?.message && !apiErrorMessage) {
            Alert.alert(ALERT, UPDATEDBOOKED, [{
                text: OK,
                onPress: () => { navigation.navigate(BOOKING) }
            }])
        }
        else if (apiErrorMessage && !reschedule) {
            Alert.alert(ALERT, apiErrorMessage, [{
                text: OK,

            }])

        }
        return () => dispatch(resetMesage())
    }, [reschedule, apiErrorMessage])

    return {
        packageDetails,
        checked,
        setChecked,
        dataRelation,
        userAddress,
        bookTestScreen,
        rescheduleBooking,
        bookedDetails: userAttribute?.bookedDetails,
        addressListing,
        handleDateTime,
        setSelectedMember
    }
}