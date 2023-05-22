import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { BOKINGCONFIRM, MYPLAN, TRUE } from "../constants";
import { rescheduleCancelBookingThunk } from "../../../../store/reducers/DiagnosticsSlice";
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";



export const useRescheduleAndCancel = () => {
    const { cancelled, bookedDetailsById, bookedData } = useSelector(state => state.diagnostic);
    if(bookedData){
     var filteredData = bookedData?.data.filter((item) => item?.id === bookedDetailsById?.data?.id);
    }
    var itemCannotCancel;
    if (filteredData && filteredData.length > 0) {
     itemCannotCancel = filteredData[0]?.cannotCancel;
    }
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
    const packageUuid=reschedule?.packageNameDescriptionDtoList[0]?.packageUuid;
    const onDetailsScreen=()=>{
        navigation.navigate("BookingTestAndPackage",{packageName:packageUuid,isScreenRes:true,headerName:"myTest"})
    }
    return {
        cancelBookingButton,
        cancelBooking,
        cancelFlag,
        reschedule,
        rescheduleBooking,
        onDetailsScreen,
        itemCannotCancel
    }
}