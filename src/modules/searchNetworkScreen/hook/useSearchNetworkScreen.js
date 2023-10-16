import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { getAllCityNamesThunk, getAllClinicNetworkThunk, getAllNetworkTypeThunk, getPlansDropdownThunk } from "../../../store/reducers/SearchNetworkSlice";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export const useSearchNetworkScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const focused = useIsFocused();
  const { searchNetworkdata, networkTypeDropDownData, plansDropdownData, cityNamesDropdownData } = useSelector(state => state.SearchNetwork);
  const [networkTypeData, setNetworkTypeData] = useState([]);
  const [providerData, setProviderData] = useState([]);
  const [pageNumberSearch, setPageNumberSearch] = useState(1);
  const defaultOption = { label: '', value: "ALL" };
  const [documentType, setDocumentType] = useState('CLINIC');
  const [planTypeData, setPlanTypeData] = useState([]);
  const [planType, setPlanType] = useState();
  const [cityNamesData, setcityNamesData] = useState([]);
  const [cityNames, setCityNames] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const networkTypeModifiedData = networkTypeDropDownData?.map((networkTypeDropDownData) => ({ label: networkTypeDropDownData?.id, value: networkTypeDropDownData?.name, }));
    setNetworkTypeData([...networkTypeModifiedData]);
    const planTypeModifiedData = plansDropdownData?.map((plansDropdownData) => ({ label: plansDropdownData?.id, value: plansDropdownData?.name, }));
    setPlanTypeData([defaultOption, ...planTypeModifiedData]);
    const cityNamesModifiedData = cityNamesDropdownData?.map((cityNamesDropdownData) => ({ label: cityNamesDropdownData?.id, value: cityNamesDropdownData?.name, }));
    setcityNamesData([defaultOption, ...cityNamesModifiedData]);
  }, [networkTypeDropDownData, plansDropdownData, cityNamesDropdownData])
  useEffect(() => {
    if (navigation.isFocused() && pageNumber === 1) {
      dispatch(getAllNetworkTypeThunk());
      dispatch(getPlansDropdownThunk());
      dispatch(getAllCityNamesThunk());
      dispatch(getAllClinicNetworkThunk({ documentType, cityNames, planType, pageNumber, pageSize: 10, searchQuery }));
    }
  }, [focused, documentType, planType, cityNames]);
  useEffect(() => {
    if (
      searchNetworkdata &&
      typeof searchNetworkdata?.networkDtoList === 'object' &&
      searchNetworkdata?.networkDtoList.length > 0 && searchQuery.length === 0 && pageNumber === 1
    ) {
      setProviderData(searchNetworkdata?.networkDtoList);
    }
    else if (
      searchNetworkdata &&
      typeof searchNetworkdata?.networkDtoList === 'object' &&
      searchNetworkdata?.networkDtoList.length > 0 && searchQuery.length === 0 && pageNumber > 1
    ) {
      setProviderData(
        _.uniqBy(
          providerData.concat(searchNetworkdata?.networkDtoList),
          'id',
        ),
      );
    }
    else if (typeof searchNetworkdata?.networkDtoList === 'object' &&
      searchNetworkdata?.networkDtoList.length > 0 && searchQuery.length > 0) {
        setProviderData(
        _.uniqBy(
          providerData.concat(searchNetworkdata?.networkDtoList),
          'id',
        ),
      );
    }
  }, [searchNetworkdata]);
  useEffect(() => {
    if (pageNumber > 1) {
      dispatch(getAllClinicNetworkThunk({ documentType, cityNames, planType, pageNumber: pageNumber, pageSize: 10, searchQuery }));
    }
  }, [pageNumber]);
  useEffect(() => {
    if (pageNumberSearch > 1) {
      dispatch(getAllClinicNetworkThunk({ documentType, cityNames, planType, pageNumber: pageNumberSearch, pageSize: 10, searchQuery }));
    }
  }, [pageNumberSearch]);
  const setSelectedDocumentType = (arg) => {
    setPageNumber(1);
    setProviderData([]);
    setDocumentType(networkTypeData.find(item => {
      if (item.value.toString() === arg.toString()) return item;
    }).label
    );
  };
  const setSelectedPlanType = (arg) => {
    setPageNumber(1);
    setProviderData([]);
    setPlanType(planTypeData.find(item => {
      if (item.value.toString() === arg.toString()) return item;
    }).label
    );
  };
  const setSelectedCityNamesType = (arg) => {
    setPageNumber(1);
    setProviderData([]);
    setCityNames(cityNamesData.find(item => {
      if (item.value.toString() === arg.toString()) return item;
    }).label
    );
  };
  const filterCheck = documentType === 'CLINIC' || documentType === 'HOSPITAL';
  const onChangeSearch = (query) => {
    setPageNumber(1);
    setProviderData([]);
    setSearchQuery(query);
    dispatch(getAllClinicNetworkThunk({ documentType, cityNames, planType, pageNumber, pageSize: 10, searchQuery: query.trim() }));
  }
  const onEndReached = () => {
    if (pageNumber < searchNetworkdata?.totalPages && searchQuery.length === 0) {
      setPageNumber(pageNumber + 1);
    }
    else if (pageNumberSearch < searchNetworkdata?.totalPages && searchQuery.length >= 1) {
      setPageNumberSearch(pageNumberSearch + 1);
    }
  };

  return {
    filterCheck,
    providerData,
    networkTypeData,
    setSelectedDocumentType,
    planTypeData,
    setSelectedPlanType,
    cityNamesData,
    searchQuery,
    setSelectedCityNamesType,
    onEndReached,
    onChangeSearch,
  };
}