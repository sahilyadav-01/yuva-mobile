import { checkPermission } from '../../../utils/utils';

export const useMedicalReportCard = () => {
const onDownloadPress = (fileName,filePath)=>{ 
checkPermission(filePath, fileName);
}
  return {
    onDownloadPress
  };
};