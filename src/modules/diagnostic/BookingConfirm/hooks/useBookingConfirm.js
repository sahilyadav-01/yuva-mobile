import { useState ,useEffect} from 'react';
import { useSelector } from 'react-redux';


export const useBookingConfirm = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [selected, setSelected] = useState("");
    const [checked, setChecked] = useState(false);
    const { packageDetails } = useSelector(state => state.diagnostic);
 
    const handleDate = date => {
        setDate(date);
    };
    const handleTime = time => {
        setTime(time);

    };
    // useEffect(()=>{
    //     setChecked("abcd")

    // },[checked])
    return {
        packageDetails,
        handleDate,
        handleTime,
        date,
        time,
        setSelected,
        checked,
        setChecked
    }
}