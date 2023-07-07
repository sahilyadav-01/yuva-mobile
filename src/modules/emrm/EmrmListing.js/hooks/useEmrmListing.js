import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { documentTypeThunk } from '../../../../store/reducers/EmrmSlice';

export const useEmrmListing = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { documentType } = useSelector(state => state.Emrm);
  console.log("documentType", documentType)
  const medicalReport = [
    {hospitalName:'Fortis , Shalimar Bagh',
    documuntType:'Consultation ',
    DocumentDate :'Document Date :01-Jun 2023',
    UploadDate:'Upload Date : 20-Jun 2023'},

    {hospitalName:'Fortis , Shalimar Bagh',
    documuntType:'Consultation ',
    DocumentDate :'Document Date :01-Jun 2023',
    UploadDate:'Upload Date : 20-Jun 2023'},

    {hospitalName:'Fortis , Shalimar Bagh',
    documuntType:'Consultation ',
    DocumentDate :'Document Date :01-Jun 2023',
    UploadDate:'Upload Date : 20-Jun 2023'},

    {hospitalName:'Fortis , Shalimar Bagh',
    documuntType:'Consultation ',
    DocumentDate :'Document Date :01-Jun 2023',
    UploadDate:'Upload Date : 20-Jun 2023'},
  ];
  useEffect(() => {
    dispatch(documentTypeThunk())
  }, []);

  const onPressAddButton = () => {
    navigation.navigate('EmrmCreateRecord');
  }

  return {
    cityId: documentType?.map((documentType) => ({ label: documentType?.id, value: documentType?.name, })),
    onPressAddButton,
    medicalReport,
  };
};
