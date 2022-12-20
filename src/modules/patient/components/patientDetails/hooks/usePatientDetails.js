import { useState } from "react";
import { AGE_BRACKET, GENDER_BRACKET } from "../../../constant";

export const usePatientDetails = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [Age, setAge] = useState(AGE_BRACKET[0]);
  const [gender, setGender] = useState(GENDER_BRACKET[0]);
  const onPatientPress = (item) => {
    setActiveIndex(item?.index);
  };
  
  return {
    activeIndex,
    setAge,
    setGender,
    onPatientPress,
  }
}