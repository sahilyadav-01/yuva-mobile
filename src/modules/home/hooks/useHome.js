import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServicesThunk } from "../../../store/reducers/AttributeSlice";
import { lifeStyleSliceThunk } from "../../../store/reducers/LifeStyleSlice";
import { DIABETES, DIAGNOSTICS, EMRM_SCREEN_NAME, HEALTH_CHECKUP, HRA, HYPER_TENSION, OBESITY, OPD, PHARMACY, SMOKING_AND_ALCOHOL, Talk_TO_DOCTOR, THYROID, WOMEN_HEALTH } from "../constant";

export const usehome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigation.isFocused()) {
      dispatch(getServicesThunk({}));
      dispatch(lifeStyleSliceThunk({}));
    }
  }, [])
  /** services */

  const servicesArray = [
    { name: 'Book Test', screenName: HEALTH_CHECKUP, icon: 'BOOK_TEST_SVG_ICON'},
    { name: 'Plans', screenName: 'PurchaseScreen', icon: 'PLANS_SVG_ICON'},
    { name: 'Corporate Program', screenName: 'MyCorporateProgram', icon: 'CORPORATE_PROGRAM'},
    { name: 'Search Network', screenName: 'ProfessionalServices', icon: 'SEARCH_NETWORK'},
    { name: 'OPD Consultation', screenName: OPD, icon: 'OPD_SVG_ICON'},
    { name: 'Health Risk Assessment', screenName: HRA, icon: 'HRA_SVG_ICON'},
    { name: 'Pharmacy', screenName: PHARMACY, icon: 'PHARMACY_SVG_ICON'},
    { name: 'Mental Wellness', screenName: 'MentalWellness', icon: 'MENTAL_WELLNESS_SVG_ICON'},
    { name: 'My Tests', screenName: DIAGNOSTICS, icon: 'MY_TEST_SVG_ICON'},
    { name: 'EMRM', screenName: EMRM_SCREEN_NAME, icon: 'EMRM_SVG_ICON'},
    { name: 'Online Consultation', screenName: Talk_TO_DOCTOR, icon: 'ONLINE_CONSULTATION_SVG_ICON'},
    { name: 'Ambulance', screenName: 'ProfessionalServices', icon: 'AMBULANCE_SVG_ICON'},
  ];

  const servicesNumRows = Math.ceil(servicesArray.length / 4);
  console.log("servicesNumRows", servicesNumRows);
  const renderservicesItem = [];
  for (let i = 1; i <= servicesNumRows; i++) {
    renderservicesItem.push([]);
  }
  for (let i = 1; i <= servicesArray.length; i++) {
    renderservicesItem[Math.ceil(i / 4) - 1].push(servicesArray[i - 1]);
  }
  /** services */

  /** lifestylePackage */

  const { lifestylePackage } = useSelector(state => state.lifestylePackage);
  const lifeStyle = lifestylePackage && lifestylePackage.length ? lifestylePackage.map(item => {
    let image;
    switch (item.enumName) {
      case 'OBESITY':
        image = OBESITY;
        break;
      case 'THYROID':
        image = THYROID;
        break;
      case 'WOMEN_HEALTH':
        image = WOMEN_HEALTH;
        break;
      case 'SMOKING_AND_ALCOHOL':
        image = SMOKING_AND_ALCOHOL;
        break;
      case 'DIABETES':
        image = DIABETES;
        break;
      case 'HYPER_TENSION':
        image = HYPER_TENSION;
        break;
      default:
        image = "";
    }
    return { name: item.displayName, image: image, enumName: item.enumName };
  }) : [];

  const lifeStyleArray = lifeStyle;
  const numRows = Math.ceil(lifeStyleArray.length / 3);
  const renderLifeStyleItem = [];
  for (let i = 1; i <= numRows; i++) {
    renderLifeStyleItem.push([]);
  }
  for (let i = 1; i <= lifeStyleArray.length; i++) {
    renderLifeStyleItem[Math.ceil(i / 3) - 1].push(lifeStyleArray[i - 1]);
  }
  const onPackagePress = (enumName, name) => {
    navigation.navigate('LifestyleTestsAndPackages', { enumName, name })
  };

  /** lifestylePackage */

  return {
    renderLifeStyleItem,
    onPackagePress,
    renderservicesItem
  };
}