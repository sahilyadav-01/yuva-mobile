import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { popularTestsSliceThunk, testPackageSearchThunk } from '../../../store/reducers/PopularTestsSlice ';
import { planPopularThunk, popularPackageNameThunk, requestCallThunk, resetPackages, setIndex } from '../../../store/reducers/ProgramAndPlanSlice';
import { HEALTH } from '../../healthPackages/constants';
import { BOKINGTESTANDPACKAGE, THANKS_FOR_CONTACTING, WE_WILL_CONTACT } from '../constants';

export const useHomeSearch = () => {
  const navigation = useNavigation();
  const { popularTest, testPackageSearch } = useSelector(state => state.popularTests);
  const { popularPackageName } = useSelector(state => state.programAndPlan);
  const { popularPlan } = useSelector(state => state.programAndPlan);
  const { requestCall } = useSelector(state => state.programAndPlan)
  const [number, setNumber] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(popularTestsSliceThunk({ pageNo: 1, pageSize: 8, search: '' }));
    dispatch(popularPackageNameThunk({ pageNo: 1, pageSize: 8, search: '' }));
    dispatch(planPopularThunk())
  }, [])
  const data = [
    { header: "Test", data: popularTest ? popularTest : [] },
    { header: "Package", data: popularPackageName ? popularPackageName : [] },
    { header: "Plans", data: popularPlan ? popularPlan : [] },

  ]
  const onChangeContact = number => {
    if (!(number?.length === 10 || number?.length === 0) || Number(number[0]) < 6) {
      setErrorState(true);
    }
    else {
      setNumber(number);
      setErrorState(false)
    }
  }
  const onRequestCall = () => {
    if (number?.length === 10) {
      dispatch(requestCallThunk({ number }));
    }

  }
  useEffect(() => {
    if (requestCall?.message) {
      Alert.alert(THANKS_FOR_CONTACTING, WE_WILL_CONTACT)
    }
    return () => dispatch(resetPackages());
  }, [requestCall])

  const onChangeSearch = text => {
    dispatch(testPackageSearchThunk({ search:text.trim() }))
    setFilteredData(text.trim())
  };
  const onNavigate = (item) => {
    navigation.navigate("HomeSearchDetails",item)
  }

  const onPressPlan = (item) => {
    const {item: plan} = item;
    dispatch(setIndex(plan));
    navigation?.navigate('OurPlan');
  }

  const onPackagePress = arg => {
    navigation.navigate('ProductDetails', {
      headerName:HEALTH,
      packageName: arg?.item?.packageUuid ?? arg?.item?.testId,
      uuid: arg?.item?.packageUuid ?? arg?.item?.testId,
      showCartButton: true,
      isTest: arg?.item?.testId ? true : false,
      name:arg?.item.packageName ?? arg?.item.testName ?? null,
      cost: arg?.item?.cost ?? null
    });
  };

  return {
    data,
    onChangeContact,
    errorState,
    onRequestCall,
    onChangeSearch,
    filteredData,
    testPackageSearch,
    onNavigate,
    onPressPlan,
    onPackagePress,
  };
};
