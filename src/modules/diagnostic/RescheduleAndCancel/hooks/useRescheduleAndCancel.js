import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { BOKINGCONFIRM, MYPLAN, TRUE } from "../constants";
import { rescheduleCancelBookingThunk } from "../../../../store/reducers/DiagnosticsSlice";
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";



export const useRescheduleAndCancel = () => {
    const { cancelled, bookedDetailsById } = useSelector(state => state.diagnostic)
    const route = useRoute();
    const {data:reschedule } = route?.params || bookedDetailsById;
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [cancelFlag, setCancelFlag] = useState(false);
    const cancelBooking = () => {
        //TRUE is string imported from constants file.
        const id=reschedule.id;
        const isCancelled = TRUE;
        dispatch(rescheduleCancelBookingThunk({ id, isCancelled, timeSlot: '' }))
    }
    const cancelBookingButton = () => {
        setCancelFlag(true);
    };
    useEffect(() => {
        if (cancelled) {
            navigation.navigate(MYPLAN)
        }
    }, [cancelled])

    const rescheduleBooking = () => {
        navigation.navigate(BOKINGCONFIRM, { bookedDetails: { data:reschedule, flag: true } })
    }
    return {
        cancelBookingButton,
        cancelBooking,
        cancelFlag,
        reschedule,
        rescheduleBooking
    }
}