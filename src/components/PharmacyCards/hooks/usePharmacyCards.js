import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getOtpThunk} from '../../../store/reducers/PharmacySlice';

export const usePharmacyCards = (id, name) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getMedicine = () => {
    dispatch(getOtpThunk({prescriptionId: id}));
    navigation.navigate('PharmacyDescription', {
      prescriptionId: id,
      patientsName: name,
    });
  };

  return {
    getMedicine,
  };
};
