import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAppointmentThunk, currentAppointment } from "../../../../../store/reducers/AppointmentSlice";

export const useAppointment = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const { userAppointments } = useSelector(state => state?.appointment);
  const onViewableItemsChanged = ({ viewableItems }) => {
    const currentIndex = viewableItems[(viewableItems.length -1)].index;
    setActiveIndex(currentIndex);
  };

  const onAppointment = (item) => {
    const {
      id,
      doctorName,
      address,
      status,
      speciality,
      description,
      slot,
      otp,
      hospitalName,
      relation,
      memberName,
      customId,
    } = item || {};
    
    dispatch(
      currentAppointment({
        id,
        doctorName,
        address,
        status,
        speciality,
        description,
        slot,
        otp,
        hospitalName,
        relation,
        memberName,
        customId,
      }),
    );
    navigation.navigate('ViewAppointment');
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
    onAppointment
  };
};