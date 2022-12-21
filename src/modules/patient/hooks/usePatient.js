import { useNavigation } from "@react-navigation/native";

export const usePatient = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return {
    goBack,
  };
};
