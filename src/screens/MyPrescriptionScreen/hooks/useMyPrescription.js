import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  MyPrescriptionReportThunk } from "../../../store/reducers/DownloadReportSlice";

export const useMyPrescription = () => {
    const { myPrescriptionReport } = useSelector(state => state.downloadReport);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(MyPrescriptionReportThunk())
    }, [])


    return {
        myPrescriptionReport
    }
}