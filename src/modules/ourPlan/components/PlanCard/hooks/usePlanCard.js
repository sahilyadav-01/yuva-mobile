
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { OURPLAN } from "../../../constant";

export const usePlanCard = (item) => {
  const navigation = useNavigation();
  const [priceObj, setPriceObj] = useState({value: 0, duration: ''});

  const onDetailsScreen = () => {
    navigation.navigate(OURPLAN);
  };
  useEffect(() => {
    const { quarterlyPrice, halfYearlyPrice, yearlyPrice } = item || {};
      const comPrice = [];
      (quarterlyPrice > 0) && comPrice.push(quarterlyPrice);
      (halfYearlyPrice > 0) && comPrice.push(halfYearlyPrice);
      (yearlyPrice > 0) && comPrice.push(yearlyPrice);
      const min = Math.min(...comPrice);
      const duration = min === quarterlyPrice ? 'Quaterly' : min === halfYearlyPrice? 'Half-Yearly': 'Yearly';
      const price = {
        value: min,
        duration: duration,
      };
      setPriceObj(price);
    }, []);

  return {
    onDetailsScreen,
    priceObj,
  };
}
