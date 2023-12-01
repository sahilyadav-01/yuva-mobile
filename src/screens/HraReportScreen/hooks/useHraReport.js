import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { downloadHraReportThunk } from "../../../store/reducers/DownloadReportSlice";

export const useReportCard = (hraId) => {
    const { downloadHraReport, hraLoading, hraError } = useSelector(state => state.downloadReport);
    const dispatch = useDispatch()
    useEffect(() => {
        const id = hraId ? {id:hraId} : undefined
        console.log('id',id)
        dispatch(downloadHraReportThunk(id))
    }, [])
    return {
        downloadHraReport,
        hraLoading,
        hraError
    }
}