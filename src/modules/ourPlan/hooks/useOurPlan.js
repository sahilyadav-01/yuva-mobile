import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { planIsSubscribedThunk } from "../../../store/reducers/ProfileSlice";
import { planPopularThunk, setIndex } from "../../../store/reducers/ProgramAndPlanSlice"
import { VIEW_ALL_OUR_PLAN } from "../constant";


export const useOurPlan = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length === 3){
      setActiveIndex(viewableItems[1]?.index);
    } else if(viewableItems.length === 2) {
      const index = viewableItems[0]?.index === 0? 0: viewableItems[1]?.index;
      setActiveIndex(index);
    }
  };
  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 10,
    viewAreaCoveragePercentThreshold: 10,
  };

  const onPressAll = () => {
    navigation.navigate(VIEW_ALL_OUR_PLAN);
  };

  const { popularPlan } = useSelector(state => state.programAndPlan);
  useEffect(() => {
    dispatch(planIsSubscribedThunk());
    dispatch(planPopularThunk())
  }, []);

  useEffect(() => {
    const mainItem = popularPlan[activeIndex];
    dispatch(setIndex(mainItem));
  }, [activeIndex])

  return {
    viewabilityConfigCallbackPairs,
    viewabilityConfig,
    onPressAll,
    popularPlan,
    activeIndex,
  }
}