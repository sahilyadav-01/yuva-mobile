import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const usePatient = () => {

  useEffect(() => {

  }, []);

  const consultationList = [];
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const onPressNext = () => {

  };

  return {
    goBack,
    onPressNext,
    consultationList,
  };
};
