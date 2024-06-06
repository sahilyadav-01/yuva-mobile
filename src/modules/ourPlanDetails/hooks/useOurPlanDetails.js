import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  getAllPlanServicesThunk,
  planDetailsThunk,
} from '../../../store/reducers/ProgramAndPlanSlice';

export const useOurPlanDetails = props => {
  const {
    ourPlanData,
    planDetails,
    planDetailsLoading,
    planDetailsError,
    getAllPlanServices,
    getAllPlanServicesLoading,
    getAllPlanServicesError,
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
    }
  }, [focused]);

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
    selectedCityId
  };
};
