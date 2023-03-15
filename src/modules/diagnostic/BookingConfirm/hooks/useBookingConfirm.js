
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bookTestThunk, rescheduleCancelBookingThunk, resetMesage } from '../../../../store/reducers/DiagnosticsSlice';
import { getRelations, getUserAddress } from '../../../../store/reducers/ProfileSlice';
import { getEpoch } from '../../../../utils/utils';
import { useNavigation } from '@react-navigation/core'
import {  ALERT, BOOKED, BOOKING, BOOKINGCONFIRM, FALSE, OK, PLEASE_CHECK_ADDRESS, RESCHEDULEANDCANCEL, UPDATEDBOOKED } from '../constants';
export const useBookingConfirm = () => {
    const route = useRoute();
    const [userAttribute, setUserAttribute] = useState(null);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [selected, setSelected] = useState("");
    const [dataRelation, setDataRelation] = useState();
    const [city, setCity] = useState(null);
    const { packageDetails, testBooked, apiErrorMessage, cityId, reschedule } = useSelector(state => state.diagnostic);
    const { selectedCityId } = useSelector(state => state.diagnostic);
    const { relationId, userAddress, selectedAddress } = useSelector(state => state.profile);
    const [checked, setChecked] = useState(null);
    const dispatch = useDispatch();
    const navigation = useNavigation()

    useEffect(() => {
        if (route?.name === BOOKINGCONFIRM) {
            setUserAttribute(route?.params)
        }
    }, [route])
    const handleDate = date => {
        setDate(date);
    };
    const handleTime = time => {
        setTime(time);

    };
    useEffect(() => {
        dispatch(getRelations())
        dispatch(getUserAddress())
    }, [])
    useEffect(() => {
        if (relationId?.relativeResponseDto?.length > 0) {
            let newArray = relationId?.relativeResponseDto?.map((item) => {
                return { key: item.id, value: item.name + "  -  " + item.relation + "  (" + item.age + ")" }
            }
            )
            setDataRelation(newArray)
        } else {
            dispatch(getRelations())
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
    const bookTestScreen = () => {
        var data = {
            address: address,
            cityId: city,
            contactNumber: contact,
            packageUuid: [packageDetails?.packageUuid],
            patientId: null,
            pinCode: pincode,
            plan: userAttribute?.plan,
            programOrPlanUuid: userAttribute?.Uuid,
            relationId: selected,
            testId: [],
            timeSlot: getEpoch(date, time)+ 5.5 * 60 * 60 * 1000,
            userPlanVersion: userAttribute?.userVersion,
            version: userAttribute?.version
        };
        if (packageDetails && address && Object.keys(address).length !== 0) {
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
        dispatch(rescheduleCancelBookingThunk({ id: userAttribute?.bookedDetails?.data?.id, isCancelled: FALSE, timeSlot: getEpoch(date, time) }))
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
        handleDate,
        handleTime,
        date,
        time,
        setSelected,
        checked,
        setChecked,
        dataRelation,
        userAddress,
        bookTestScreen,
        rescheduleBooking,
        bookedDetails: userAttribute?.bookedDetails,
    }
}