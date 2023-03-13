import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { downloadDiagnosticReportThunk } from "../../../store/reducers/DownloadReportSlice";

export const useReport = () => {
    const { downloadDiagnosticReport } = useSelector(state => state.downloadReport);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(downloadDiagnosticReportThunk())
    }, [])


    return {
        downloadDiagnosticReport
    }
}