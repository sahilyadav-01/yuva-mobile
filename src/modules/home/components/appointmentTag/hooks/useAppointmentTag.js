import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAppointmentThunk } from "../../../../../store/reducers/AppointmentSlice";

export const useAppointment = () => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const { userAppointments } = useSelector(state => state?.appointment);
  const onViewableItemsChanged = ({ viewableItems }) => {
    const currentIndex = viewableItems[(viewableItems.length -1)].index;
    setActiveIndex(currentIndex);
  };
  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 60,
  };
  useEffect(() => {
    dispatch(allAppointmentThunk({ isActive: true }));
  }, []);
  return {
    activeIndex,
    userAppointments,
    viewabilityConfig,
    viewabilityConfigCallbackPairs,
  };
};