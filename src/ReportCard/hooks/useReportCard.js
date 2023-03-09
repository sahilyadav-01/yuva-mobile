
import { getPlanDate,checkPermission } from "../../utils/utils"


export const useReportCard=(filePath,name)=>{
    const downloadReport=()=>{
        checkPermission(filePath,name)
      }
    return{
        downloadReport,
        getPlanDate
    }
}