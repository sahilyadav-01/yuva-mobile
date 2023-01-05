import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const useHealth = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const [selected, setSelected] = useState();
  const [description, setDescription] = useState('');

  const onChange = (text) => {
    setDescription(text);
  }
  const onPressConsultation = () => {
    
  }
  return {
    goBack,
    selected,
    setSelected,
    onChange,
    description,
    onPressConsultation,
  }
};
