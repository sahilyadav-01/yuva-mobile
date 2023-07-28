import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { patientPrescriptionThunk, resetPrescriptionData } from "../../../../store/reducers/PharmacySlice";
import _ from 'lodash';

export const usePrescriptionListingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [prescriptionDataList, setprescriptionDataList] = useState([]);
  const [prescriptionDataListSearch, setprescriptionDataListSearch] = useState([]);
  const [pageNumberSearch, setPageNumberSearch] = useState(1);
  const { prescriptionData } = useSelector(state => state.pharmacy);

  useEffect(() => {
    if (
      prescriptionData &&
      typeof prescriptionData?.prescriptionResponseDto === 'object' &&
      prescriptionData?.prescriptionResponseDto.length > 0 && search.length === 0
    ) {
      setprescriptionDataList(prevData => {
        const mergedData = _.uniqBy(
          [...prevData, ...prescriptionData.prescriptionResponseDto],
          'prescriptionId',
        );
        return mergedData;
      });
    }
    else if (prescriptionData &&
      typeof prescriptionData?.prescriptionResponseDto === 'object' &&
      prescriptionData?.prescriptionResponseDto.length > 0 && search.length > 0) {
      setprescriptionDataListSearch(prevData => {
        const mergedData = _.uniqBy(
          [...prevData, ...prescriptionData.prescriptionResponseDto],
          'prescriptionId',
        );
        return mergedData;
      });
    }
  }, [prescriptionData]);

  useEffect(() => {
    if (search.length > 0) {
      dispatch(patientPrescriptionThunk({ pageNo: pageNumberSearch, pageSize: 10, search }));
    }
    else if (search.length === 0) {
      dispatch(patientPrescriptionThunk({ pageNo: 1, pageSize: 10, search }));
    }
  }, [search])

  useEffect(() => {
    if (!navigation.isFocused()) {
      dispatch(resetPrescriptionData());
    }
  }, [focused]);

  useEffect(() => {
    if (pageNumber > 1) {
      dispatch(patientPrescriptionThunk({ pageNo: pageNumber, pageSize: 10, search }));
    }
  }, [pageNumber]);

  useEffect(() => {
    if (pageNumberSearch > 1) {
      dispatch(patientPrescriptionThunk({ pageNo: pageNumberSearch, pageSize: 10, search }));
    }
  }, [pageNumberSearch]);

  const onSearch = arg => {
    setprescriptionDataListSearch([]);
    const sanitizedText = /^[0-9]*$/;
    sanitizedText.test(arg.trim()) && setSearch(arg.trim());
  };
  const onPress = (item) => {
    navigation.navigate('PharmacyListing', { prescriptionId: item?.item?.prescriptionId });
  };
  const onEndReached = () => {
    if (pageNumber < prescriptionData?.totalPages && search.length === 0) {
      setPageNumber(pageNumber + 1);
    }
    else if (pageNumberSearch < prescriptionData?.totalPages && search.length > 1) {
      setPageNumberSearch(pageNumberSearch + 1);
    }
  };
  return {
    prescriptionDataList,
    onPress,
    onSearch,
    onEndReached,
    prescriptionDataListSearch,
    isSearch: search.length > 0
  }
}