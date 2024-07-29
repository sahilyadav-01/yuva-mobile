import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchAllPlans,
  planPopularThunk,
  setOurPlanData,
} from '../../../../../store/reducers/ProgramAndPlanSlice';
import {OUR_PLAN} from '../constants';

export const useViewAllOurPlan = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([0]);
  const {popularPlan, allPlans} = useSelector(state => state.programAndPlan);
  const handlePress = item => setSelectedItems([item]);
  const onDetails = () => navigation.navigate(OUR_PLAN);

  const onPlanPress = item => {
    handlePress(item);
    navigation.navigate(OUR_PLAN);
  };

  const getPrice = (item) => {
    if(item?.yearlyFinalCost > 0) return {finalCost:item?.yearlyFinalCost,finalPrice:item?.yearlyPrice,period:'/- per year'}
    else if(item?.halfYearlyFinalCost > 0) return {finalCost:item?.halfYearlyFinalCost,finalPrice:item?.halfYearlyPrice,period:'/- half yearly'}
    else if(item?.quarterlyFinalCost > 0) return {finalCost:item?.quarterlyFinalCost,finalPrice:item?.quarterlyPrice,period:'/- quarterly'}
  }

  const getData = data => {
    const offset = Math.ceil(data.length / 3) * 3 - data.length;
    if (offset === 0) {
      return data;
    }
    return [...data, ...Array.from({length: offset}, () => 0)];
  };

  useEffect(() => {
    dispatch(fetchAllPlans());
  }, []);

  useEffect(() => {
    const ourPlanData = allPlans?.data[selectedItems];
    dispatch(setOurPlanData(ourPlanData));
  }, [selectedItems, allPlans]);

  return {
    selectedItems,
    setSelectedItems,
    handlePress,
    popularPlan,
    onDetails,
    onPlanPress,
    allPlans,
    getData,
    getPrice,
  };
};
