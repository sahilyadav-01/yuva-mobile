import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadMedicalReportThunk } from '../../../store/reducers/EmrmSlice';


export const useMedicalReportCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const focused = useIsFocused();
  

  
  useEffect(() => {
    dispatch(downloadMedicalReportThunk({ recordId: 1}));
  }, []);

    



  return {
    
  };
};
