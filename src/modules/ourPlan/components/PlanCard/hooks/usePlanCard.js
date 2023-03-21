
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { HRA, MY_TEST, OPD, OURPLAN, services, TALK_TO_DOCTOR } from "../../../constant";

export const usePlanCard = (item) => {
  const navigation = useNavigation();
  const [priceObj, setPriceObj] = useState({value: 0, duration: ''});
  const {planServiceNameList} = item || {};
  const planService = planServiceNameList.map(list => {
    const {serviceName, shortDescription} = list || {};
    let value = {};
    switch(serviceName) {
      case OPD: value = {...services[0], shortDescription};
      break;
      case HRA: value = {...services[1], shortDescription};
      break;
      case MY_TEST: value = {...services[2], shortDescription};
      break;
      case TALK_TO_DOCTOR: value = {...services[3], shortDescription};
      break;
    }
    return value;
  });
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
    planService,
  };
}
