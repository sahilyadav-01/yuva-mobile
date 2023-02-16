import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { MYPLAN, TRUE } from "../constants";
import { rescheduleCancelBookingThunk } from "../../../../store/reducers/DiagnosticsSlice";
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";



export const useRescheduleAndCancel = () => {
    const route = useRoute();
    const { ...reschedule } = route.params.data;
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const { cancelled } = useSelector(state => state.diagnostic)

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
    return {
        cancelBookingButton,
        cancelBooking,
        cancelFlag,
        reschedule
    }
}