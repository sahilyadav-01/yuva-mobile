import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { documentTypeThunk, getAllErmReportThunk } from '../../../../store/reducers/EmrmSlice';

export const useEmrmListing = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const focused = useIsFocused();
  const { dropDownData, ermReportData } = useSelector(state => state.Emrm);
  const medicalReportData = ermReportData?.ermResponseDtoList || [];
  const [documentType, setDocumentType] = useState('')

  const setSelectedDocumentType = (arg) => {
    console.log("id",id);
    setDocumentType(arg);
    console.log("documentType",documentType);
    dispatch(getAllErmReportThunk({ pageNo: 1, pageSize: 10, documentType, searchKey: '' }));
  }
  useEffect(() => {
    dispatch(documentTypeThunk());
    dispatch(getAllErmReportThunk({ pageNo: 1, pageSize: 10, documentType, searchKey: '' }));
  }, [focused]);

  const onPressAddButton = () => {
    navigation.navigate('EmrmCreateRecord');
  }

  return {
    dropDownData: dropDownData?.map((dropDownData) => ({ label: dropDownData?.id, value: dropDownData?.name, })),
    onPressAddButton,
    medicalReportData,
    setSelectedDocumentType
  };
};
