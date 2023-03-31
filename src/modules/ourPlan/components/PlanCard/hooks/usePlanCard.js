
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { HRA, MY_TEST, OPD, OURPLAN, services, TALK_TO_DOCTOR } from "../../../constant";

export const usePlanCard = (item) => {
  const navigation = useNavigation();
  const [priceObj, setPriceObj] = useState({value: 0, duration: '', finalPrice: 0});
  const {planServiceNameList} = item || {};
  const planService = planServiceNameList.map(list => {
    const {serviceName, shortDescription, serviceUuid, available, position} = list || {};
    let value = {};
    switch(serviceUuid) {
      case OPD: value = {...services[0], serviceName,shortDescription, available};
      break;
      case HRA: value = {...services[1], serviceName, shortDescription, available};
      break;
      case MY_TEST: value = {...services[2], serviceName, shortDescription, available};
      break;
      case TALK_TO_DOCTOR: value = {...services[3], serviceName, shortDescription, available};
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
      const min = Math.max(...comPrice);
      let duration = '';
      let finalPrice = 0;
      if(min === quarterlyPrice) {
        duration = 'Quaterly';
        finalPrice = Math.ceil(item?.quarterlyFinalCost/3) || 0;
      } else if(min === halfYearlyPrice) {
        duration = 'Half-Yearly';
        finalPrice = Math.ceil(item?.halfYearlyFinalCost/6) || 0;
      } else {
        duration = 'Yearly';
        finalPrice = Math.ceil(item?.yearlyFinalCost/12) || 0;
      }
      const price = {
        value: min,
        duration: duration,
        finalPrice: finalPrice,
      };
      setPriceObj(price);
    }, []);

  return {
    onDetailsScreen,
    priceObj,
    planService,
  };
}
