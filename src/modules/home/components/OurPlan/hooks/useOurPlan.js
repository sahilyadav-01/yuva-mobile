import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOurPlanData } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { OUR_PLAN } from "../constants";

export const useOurPlan = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState([0]);
    const { popularPlan } = useSelector(state => state.programAndPlan);
      const handlePress = (item) => {
        setSelectedItems([item]);
      };
    const onDetails=()=>{
      navigation.navigate(OUR_PLAN);
    }
    const onViewAll=()=>{
      // navigation.navigate('')
    }
    useEffect(() => {
      const ourPlanData = popularPlan[selectedItems];
      dispatch(setOurPlanData(ourPlanData));
    }, [selectedItems,popularPlan])
  return {
    selectedItems,
    setSelectedItems,
    handlePress,
    popularPlan,
    onDetails,
    onViewAll
  };
};