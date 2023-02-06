
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingTestAndPackageThunk} from '../../../../store/reducers/DiagnosticsSlice'


export const useBooking = () => {
    const dispatch = useDispatch();
    const  { jwt }= useSelector(state => state.auth);
    useEffect(() => {

        dispatch(bookingTestAndPackageThunk({ jwt, isActive:"false" }));
    }, []);
 
    
    const {bookedData} =useSelector(state => state.diagnostic);
    return {
        bookedData

    }}