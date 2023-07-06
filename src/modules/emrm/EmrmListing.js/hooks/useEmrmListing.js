import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { documentTypeThunk } from '../../../../store/reducers/EmrmSlice';

export const useEmrmListing = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { documentType } = useSelector(state => state.Emrm);
console.log("documentType",documentType)
  const cityId = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Kolkata',
    'Chennai',
  ];
  useEffect(()=>{
    dispatch(documentTypeThunk())
},[]);

  return {
    cityId: documentType?.map((documentType) => ({ label: documentType?.id, value: documentType?.name,})),
  };
};
