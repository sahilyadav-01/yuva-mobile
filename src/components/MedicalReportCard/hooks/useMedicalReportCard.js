import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadMedicalReportThunk } from '../../../store/reducers/EmrmSlice';

//downloadedReports
export const useMedicalReportCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const focused = useIsFocused();
  
const onDownloadPress = (id)=>{ 
  dispatch(downloadMedicalReportThunk({ recordId: id}));
}
const { downloadedReports } = useSelector(state => state.Emrm);
// console.log("downloadedReports",downloadedReports)
  
  useEffect(() => {
    // dispatch(downloadMedicalReportThunk({ recordId: 1}));
  }, []);

    

  return {
    onDownloadPress
  };
};
