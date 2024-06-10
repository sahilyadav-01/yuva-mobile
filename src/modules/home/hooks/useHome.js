import { useEffect, useState } from "react";
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { allAppointmentThunk } from '../../../store/reducers/AppointmentSlice';
import { popularTestsSliceThunk } from '../../../store/reducers/PopularTestsSlice ';
import { lifeStyleSliceThunk } from '../../../store/reducers/LifeStyleSlice';
import { getCartUserThunk, } from '../../../store/reducers/CartSlice';
import {fetchHomeScreenPackages, fetchHomeScreenPlans, fetchHomeScreenTests, planPopularThunk, popularPackageNameThunk} from '../../../store/reducers/ProgramAndPlanSlice';
import { getServicesThunk } from "../../../store/reducers/AttributeSlice";
import { DIABETES, DIAGNOSTICS, EMRM_SCREEN_NAME, HEALTH_CHECKUP, HRA, HYPER_TENSION, OBESITY, OPD, PHARMACY, SMOKING_AND_ALCOHOL, TALK_TO_DOCTOR, THYROID, WOMEN_HEALTH } from "../constant";
import { SVG } from "../../../../assets";
import { fetchBannerDetails1, fetchBannerDetails2, fetchBannerDetails3 } from "../../../store/reducers/BannerSlice";
import { setHomeSearch } from "../../../store/reducers/HomeSearchSlice";
import { getTopProducts } from "../../../store/reducers/ProductSlice";
import { getPlatform } from "../../../utils/utils";
import { Alert, Linking } from "react-native";
import { getCurrentCity, setPermission } from "../../../store/reducers/LocationSlice";
import { getAllCityNamesThunk } from "../../../store/reducers/SearchNetworkSlice";

export const useHome = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const Platform = getPlatform();
  const { loggedIn } = useSelector(state => state.auth);
  const name  = useSelector(state => state?.profile?.userDetails?.name) ?? null;
  const { popularPackageName,homeTests,homePackages } = useSelector(state => state.programAndPlan);
  const { popularTest } = useSelector(state => state.popularTests);
  const { banner1, banner3 } = useSelector(state => state.banner);
  const { showSearchView } = useSelector(state=>state.homeSearch);
  const { topProducts } = useSelector(state=>state.product);
  const {permissionStatus,currentCityDetails} = useSelector(state=>state.location);

  const [activeIndex, setActiveIndex] = useState(0);
  const [enableGps,setEnableGps] = useState(false);

  useEffect(() => {
    if (navigation.isFocused()) {
      if (route?.params?.navigateToDetails) {
        navigation?.navigate('OurPlan', {
          screen: 'OurPlanDetails',
          params: route?.params?.screenParams,
        });
      }
      dispatch(fetchHomeScreenPlans());
      dispatch(fetchHomeScreenPackages());
      dispatch(fetchHomeScreenTests());
      dispatch(getTopProducts());
      dispatch(getServicesThunk({}));
      dispatch(allAppointmentThunk({ isActive:true }));
      dispatch(lifeStyleSliceThunk({}));
      dispatch(planPopularThunk())
      dispatch(fetchBannerDetails1({position:1,screenType:'HOME_SCREEN'}));
      dispatch(fetchBannerDetails2({position:2,screenType:'HOME_SCREEN'}));
      dispatch(fetchBannerDetails3({position:3,screenType:'HOME_SCREEN'}));
      dispatch(getCartUserThunk());
      if(permissionStatus || Platform.isIOS) fetchCurrentCity();
      else dispatch(getAllCityNamesThunk());
    }
  }, [focused, loggedIn]);  
  const servicesArray = [
    { name: 'Book Test', screenName: HEALTH_CHECKUP, icon: SVG['BOOK_TEST_SVG_ICON'] },
    { name: 'Plans', screenName: 'PurchaseScreen', icon: SVG['PLANS_SVG_ICON'] },
    { name: 'Corporate Program', screenName: 'MyCorporateProgram', icon: SVG['CORPORATE_PROGRAM'] },
    { name: 'Search Network', screenName: 'SearchNetworkHomeScreen', icon: SVG['SEARCH_NETWORK'] },
    { name: 'OPD Consultation', screenName: OPD, icon: SVG['OPD_SVG_ICON'] },
    { name: 'Health Risk Assessment', screenName: HRA, icon: SVG['HRA_SVG_ICON'] },
    { name: 'Pharmacy', screenName: PHARMACY, icon: SVG['PHARMACY_SVG_ICON'] },
    { name: 'Mental Wellness', screenName: 'MentalWellness', icon: SVG['MENTAL_WELLNESS_SVG_ICON'] },
    { name: 'My Tests', screenName: DIAGNOSTICS, icon: SVG['MY_TEST_SVG_ICON'] },
    { name: 'EMRM', screenName: EMRM_SCREEN_NAME, icon: SVG['EMRM_SVG_ICON'] },
    { name: 'Online Consultation', screenName: TALK_TO_DOCTOR, icon: SVG['ONLINE_CONSULTATION_SVG_ICON'] },
    { name: 'Ambulance', screenName: 'AmbulaceHomeScreen', icon: SVG['AMBULANCE_SVG_ICON'] },
  ];
  const servicesNumRows = Math.ceil(servicesArray.length / 4);
  const renderservicesItem = [];
  for (let i = 1; i <= servicesNumRows; i++) {
    renderservicesItem.push([]);
  }
  for (let i = 1; i <= servicesArray.length; i++) {
    renderservicesItem[Math.ceil(i / 4) - 1].push(servicesArray[i - 1]);
  }
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
  const onHealthPackagePress = (index) => navigation.navigate('HealthCheckupsTests', { index });

  const onCategoryViewAllPress = () => navigation.navigate('Product',{screen: 'Products'});

  const onBackPress = () => dispatch(setHomeSearch(false));

  const onSelectCategory = (index) => setActiveIndex(index);

  const onAdd = (productId) => {
    navigation.navigate('Product',{screen: 'ProductDetails',params:{productId}});
  }

  const onViewAllServices = (services) => navigation.navigate('Services',{services})

  const fetchCurrentCity = () => {
    const onSuccess = (args) => {
      const {coords:{latitude,longitude}} = args;
      dispatch(getCurrentCity({latitude,longitude}))
      dispatch(getAllCityNamesThunk());
    };
    const onError = (error) => {
     if(Platform.isAndroid && error.code === 2) setEnableGps(true);
     else if(Platform.isIOS) dispatch(setPermission(false));
     dispatch(getAllCityNamesThunk());
    }
    Geolocation.getCurrentPosition(onSuccess,onError)
  }

  return {
    activeIndex,
    name,
    renderLifeStyleItem,
    onPackagePress,
    renderservicesItem,
    popularPackageName,
    onHealthPackagePress,
    onCategoryViewAllPress,
    popularTest,
    banner1,
    banner3,
    loggedIn,
    showSearchView,
    onBackPress,
    topProducts,
    onSelectCategory,
    onAdd,
    homeTests,
    homePackages,
    onViewAllServices,
    enableGps,
    currentCityDetails
  };
};