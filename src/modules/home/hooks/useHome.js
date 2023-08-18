import { useEffect } from "react";
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { allAppointmentThunk } from '../../../store/reducers/AppointmentSlice';
import { popularPackageNameThunk } from '../../../store/reducers/ProgramAndPlanSlice';
import { popularTestsSliceThunk } from '../../../store/reducers/PopularTestsSlice ';
import { lifeStyleSliceThunk } from '../../../store/reducers/LifeStyleSlice';
import { getCartGuestThunk, getCartUserThunk, } from '../../../store/reducers/CartSlice';
import { getServicesThunk } from "../../../store/reducers/AttributeSlice";
import { DIABETES, DIAGNOSTICS, EMRM_SCREEN_NAME, HEALTH_CHECKUP, HRA, HYPER_TENSION, OBESITY, OPD, PHARMACY, SMOKING_AND_ALCOHOL, Talk_TO_DOCTOR, THYROID, WOMEN_HEALTH } from "../constant";

export const useHome = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state => state.auth);
  const { userDetails: { name } } = useSelector(state => state.profile);
  const focused = useIsFocused();

  useEffect(() => {
    if (navigation.isFocused()) {
      if (route?.params?.navigateToDetails) {
        navigation?.navigate('OurPlan', {
          screen: 'OurPlanDetails',
          params: route?.params?.screenParams,
        });
      }
      const isActive = 'true';
      dispatch(getServicesThunk({}));
      dispatch(allAppointmentThunk({ isActive }));
      dispatch(popularPackageNameThunk({ pageNo: 1, pageSize: 4, search: '' }));
      dispatch(popularTestsSliceThunk({ pageNo: 1, pageSize: 4, search: '' }));
      dispatch(lifeStyleSliceThunk({}));
      if (loggedIn === 'loggedIn') {
        dispatch(getCartUserThunk());
      } else {
        dispatch(getCartGuestThunk());
      }
    }
  }, [focused, loggedIn]);

  /** services */
  const servicesArray = [
    { name: 'Book Test', screenName: HEALTH_CHECKUP, icon: 'BOOK_TEST_SVG_ICON' },
    { name: 'Plans', screenName: 'PurchaseScreen', icon: 'PLANS_SVG_ICON' },
    { name: 'Corporate Program', screenName: 'MyCorporateProgram', icon: 'CORPORATE_PROGRAM' },
    { name: 'Search Network', screenName: 'ProfessionalServices', icon: 'SEARCH_NETWORK' },
    { name: 'OPD Consultation', screenName: OPD, icon: 'OPD_SVG_ICON' },
    { name: 'Health Risk Assessment', screenName: HRA, icon: 'HRA_SVG_ICON' },
    { name: 'Pharmacy', screenName: PHARMACY, icon: 'PHARMACY_SVG_ICON' },
    { name: 'Mental Wellness', screenName: 'MentalWellness', icon: 'MENTAL_WELLNESS_SVG_ICON' },
    { name: 'My Tests', screenName: DIAGNOSTICS, icon: 'MY_TEST_SVG_ICON' },
    { name: 'EMRM', screenName: EMRM_SCREEN_NAME, icon: 'EMRM_SVG_ICON' },
    { name: 'Online Consultation', screenName: Talk_TO_DOCTOR, icon: 'ONLINE_CONSULTATION_SVG_ICON' },
    { name: 'Ambulance', screenName: 'ProfessionalServices', icon: 'AMBULANCE_SVG_ICON' },
  ];
  const servicesNumRows = Math.ceil(servicesArray.length / 4);
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
    name,
    renderLifeStyleItem,
    onPackagePress,
    renderservicesItem
  };
};