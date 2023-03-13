
import {useState} from 'react';

export const useMyReport=()=>{
    const [isReportVisible, setIsReportVisible] = useState(false);
    return{
        isReportVisible,
        setIsReportVisible
    }
}