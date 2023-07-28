import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { downloadHraReportThunk } from "../../../store/reducers/DownloadReportSlice";

export const useReportCard = () => {
    const { downloadHraReport, hraLoading, hraError } = useSelector(state => state.downloadReport);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(downloadHraReportThunk())
    }, [])


    return {
        downloadHraReport,
        hraLoading,
        hraError
    }
}