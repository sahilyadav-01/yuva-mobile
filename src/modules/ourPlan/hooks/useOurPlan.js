import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { planPopularThunk, setIndex } from "../../../store/reducers/ProgramAndPlanSlice"
import { OUR_PLANS } from "../constant";


export const useOurPlan = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const onViewableItemsChanged = ({ viewableItems }) => {
      setActiveIndex(viewableItems[0]?.index);
  };

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 80,
    viewAreaCoveragePercentThreshold: 60,
  };

  const onPressAll = () => {
    navigation.navigate(OUR_PLANS);
  };

  const { popularPlan } = useSelector(state => state.programAndPlan);
  useEffect(() => {
    dispatch(planPopularThunk())
  }, []);

  useEffect(() => {
    console.log('activeIndex', activeIndex);
    const mainItem = popularPlan[activeIndex];
    dispatch(setIndex(mainItem));
  }, [activeIndex])

  return {
    viewabilityConfigCallbackPairs,
    viewabilityConfig,
    onPressAll,
    popularPlan,
  }
}