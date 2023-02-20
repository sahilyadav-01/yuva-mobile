
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bookTestThunk, rescheduleCancelBookingThunk, resetMesage } from '../../../../store/reducers/DiagnosticsSlice';
import { getRelations, getUserAddress } from '../../../../store/reducers/ProfileSlice';
import { getEpoch } from '../../../../utils/utils';
import { useNavigation } from '@react-navigation/core'
import { ADDNEWADDRESS, ALERT, BOOKED, BOOKING, BOOKINGCONFIRM, FALSE, OK, PLEASE_CHECK_ADDRESS, RESCHEDULEANDCANCEL, UPDATEDBOOKED } from '../constants';

export const useBookingConfirm = () => {
    const route = useRoute();
    const [userAttribute, setUserAttribute] = useState(null);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [selected, setSelected] = useState("");
    const [dataRelation, setDataRelation] = useState();
    const { packageDetails, testBooked, apiErrorMessage, cityId, reschedule } = useSelector(state => state.diagnostic);
    const { relationId, userAddress } = useSelector(state => state.profile);
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

    const bookTestScreen = () => {
        const address = userAddress[checked]?.address || userAttribute?.address;
        const pincode = userAddress[checked]?.pinCode || userAttribute?.pincode;
        const contact = userAddress[checked]?.contactNumber || userAttribute?.contact;
        var data = {
            address: address,
            cityId: cityId[0]?.id,
            contactNumber: contact,
            packageUuid: [packageDetails?.packageUuid],
            patientId: null,
            pinCode: pincode,
            plan: userAttribute?.plan,
            programOrPlanUuid: userAttribute?.Uuid,
            relationId: selected,
            testId: [],
            timeSlot: getEpoch(date, time),
            userPlanVersion: userAttribute?.userVersion,
            version: userAttribute?.version
        };
        if (packageDetails) {
            dispatch(bookTestThunk({ data }))
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

    const AddNewAddress = () => {
        navigation.navigate(ADDNEWADDRESS)
    }
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
        AddNewAddress,
        userAttribute
    }
}