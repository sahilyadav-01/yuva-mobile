import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const useHealth = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const [selected, setSelected] = useState();
  return {
    goBack,
    selected,
    setSelected,
  }
};
