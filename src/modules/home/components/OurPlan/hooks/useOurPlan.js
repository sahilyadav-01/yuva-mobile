import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOurPlanData } from "../../../../../store/reducers/ProgramAndPlanSlice";
import { OUR_PLAN } from "../constants";

export const useOurPlan = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState([0]);
    const { homePlans } = useSelector(state => state.programAndPlan);
    const handlePress = (item) => {
      setSelectedItems([item]);
    };
    const onDetails=()=>{
      navigation.navigate(OUR_PLAN);
    }
    const onViewAll=()=>{
     navigation.navigate('ViewAllOurPlan')
    }
    useEffect(() => {
      if(homePlans?.data?.length > 0) {
      const ourPlanData = {...homePlans.data[selectedItems],yearlyPrice:homePlans.data[selectedItems]?.price,yearlyFinalCost:homePlans.data[selectedItems]?.discountedPrice};
      dispatch(setOurPlanData(ourPlanData));
      }
    }, [selectedItems,homePlans])
  return {
    selectedItems,
    setSelectedItems,
    handlePress,
    onDetails,
    onViewAll,
    homePlans,
  };
};