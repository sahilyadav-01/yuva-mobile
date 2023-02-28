import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { planPopularThunk, setIndex } from "../../../store/reducers/ProgramAndPlanSlice"
import { LEFT, OURPLAN, RIGHT } from "../constant";


export const useOurPlan = () => {
  const dispatch = useDispatch();
  const [leftItem, setLeftItem] = useState(null);
  const [rightItem, setRightItem] = useState(null);
  const [mainItem, setMainItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [priceText, setPriceText] = useState('');

  const {popularPlan} = useSelector(state => state.programAndPlan);
  useEffect(() => {
    dispatch(planPopularThunk())
  }, []);
  useEffect(() => {
    const len = popularPlan.length;
    setLength(len);
    if(length > 0) {
      setActiveIndex(0);
      setMainItem(popularPlan[0]);
      (length > 1) && setRightItem(popularPlan[1]);
    }
  }, [popularPlan]);

  useEffect(() => {
    const leftIndex = activeIndex - 1;
    const rightIndex = activeIndex + 1;
    if (leftIndex >= 0) {
      setLeftItem(popularPlan[leftIndex]);
    } else {
      setLeftItem(null);
    }
    if(rightIndex < length) {
      setRightItem(popularPlan[rightIndex]);
    } else {
      setRightItem(null);
    }
    setMainItem(popularPlan[activeIndex]);
    updatePrice();
  }, [activeIndex]);

  const updatePrice = () => {
    if(mainItem){
      const {quarterlyPrice, halfYearlyPrice, yearlyPrice} = mainItem;
      const comPrice = [];
      (quarterlyPrice > 0) && comPrice.push(quarterlyPrice);
      (halfYearlyPrice > 0) && comPrice.push(halfYearlyPrice);
      (yearlyPrice > 0) && comPrice.push(yearlyPrice);
      // const min = Math.min(...comPrice);
    }
  }
  const onContainerPress = (direction) => {
    if(direction === LEFT && leftItem) {
      const newIndex = activeIndex - 1;
      (newIndex >= 0) && setActiveIndex(newIndex)
    } else if (direction === RIGHT && rightItem) {
      const newIndex = activeIndex + 1;
      (newIndex < length) && setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    dispatch(setIndex(mainItem))
  }, [mainItem])
  return {
    onContainerPress,
    leftItem,
    rightItem,
    mainItem,
    priceText,
  }
}