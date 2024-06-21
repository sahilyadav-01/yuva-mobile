import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPlans, planPopularThunk, setOurPlanData } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { OUR_PLAN } from "../constants";

export const useViewAllOurPlan = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState([0]);
    const { popularPlan, allPlans } = useSelector(state => state.programAndPlan);
      const handlePress = (item) => {
        setSelectedItems([item]);
      };
    const onDetails=()=>{
      navigation.navigate(OUR_PLAN);
    }
    const onPlanPress = (item) => {
      handlePress(item);
      navigation.navigate(OUR_PLAN);
    }
    useEffect(()=>{
      dispatch(fetchAllPlans());
    },[])
    // useEffect(() => {
    //   const ourPlanData = popularPlan[selectedItems];
    //   dispatch(setOurPlanData(ourPlanData));
    // }, [selectedItems,popularPlan])
    useEffect(() => {
      const ourPlanData = allPlans?.data[selectedItems];
      dispatch(setOurPlanData(ourPlanData));
    }, [selectedItems,allPlans])
  return {
    selectedItems,
    setSelectedItems,
    handlePress,
    popularPlan,
    onDetails,
    onPlanPress,
    allPlans
  };
};