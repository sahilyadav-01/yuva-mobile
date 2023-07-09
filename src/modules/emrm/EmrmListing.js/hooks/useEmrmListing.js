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
    setDocumentType( dropDownData.find(item => {
      if (item.name.toString() === arg.toString()) return item;
    }).id
    );
  }
  useEffect(() => {
    dispatch(documentTypeThunk());
    dispatch(getAllErmReportThunk({ pageNo: 1, pageSize: 10, documentType, searchKey: '' }));
  }, [focused, documentType]);


  const onPressAddButton = () => {
    navigation.navigate('EmrmCreateRecord');
  }

  return {
    dropDownData: dropDownData?.map((dropDownData) => ({ label: dropDownData?.id, value: dropDownData?.name, })),
    onPressAddButton,
    medicalReportData,
    setSelectedDocumentType,
  };
};
