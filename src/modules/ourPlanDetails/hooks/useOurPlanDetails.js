import {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  getAllPlanServicesThunk,
  getSinglePlanThunk,
  planDetailsThunk,
} from '../../../store/reducers/ProgramAndPlanSlice';
import { termsAndCondition } from '../constants';

export const useOurPlanDetails = props => {
  const [localTerms, setLocalTerms] = useState([...termsAndCondition]); 
  const {
    ourPlanData,
    planDetails,
    planDetailsLoading,
    planDetailsError,
    getAllPlanServices,
    getAllPlanServicesLoading,
    getAllPlanServicesError,
    getSinglePlanServicesLoading,
    getSinglePlanServicesError,
    getSinglePlanServices 
  } = useSelector(state => state.programAndPlan);
  const {loggedIn} = useSelector(state => state.auth);
  const {selectedCityId} = useSelector(state => state.diagnostic);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const focused = useIsFocused();
  useEffect(() => {
    let Uuid = ourPlanData?.planUuid;
    if (focused) {
      dispatch(planDetailsThunk(Uuid));
      dispatch(getAllPlanServicesThunk(Uuid));
      dispatch(getSinglePlanThunk(Uuid));
    }
  }, [focused]);

  useEffect(() => {
    if (getSinglePlanServices?.relationsAllowed) {
      setLocalTerms(prevTerms => {
        const updatedTerms = [...prevTerms];
        updatedTerms[1] = `The plan is valid for family members ( ${getSinglePlanServices.relationsAllowed} ).`;
        return updatedTerms;
      });
    }
  }, [getSinglePlanServices]);
  const bookOurPlan = () => {
    if (loggedIn === 'loggedIn') {
      navigation.navigate('OurPlanAddress', {...ourPlanData, plan: true});
    } else {
      navigation.navigate('Home', {
        screen: 'LoginScreen',
        params: {from: 'OurPlanDetails', data: ourPlanData},
      });
    }
  };
  return {
    planDetails,
    planDetailsLoading,
    planDetailsError,
    getAllPlanServices,
    getAllPlanServicesLoading,
    getAllPlanServicesError,
    ourPlanData,
    bookOurPlan,
    selectedCityId,
    termsAndCondition: localTerms
  };
};
