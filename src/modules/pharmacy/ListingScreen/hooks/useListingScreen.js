import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPharmacyForUserThunk, resetPharmacyDataList } from "../../../../store/reducers/PharmacySlice";
import _ from 'lodash';

export const useListingScreen = (prescriptionId,pharmacyId,redirect) => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumberSearch, setPageNumberSearch] = useState(1);
  const [pharmacyData, setPharmacyData] = useState([]);
  const [pharmacyDataSearch, setPharmacyDataSearch] = useState([]);
  const [redirectData, setRedirectData] = useState({pharmacyId,redirect});
  const { pharmacyDataList } = useSelector(state => state.pharmacy);
  useEffect(() => {
    if (
      pharmacyDataList &&
      typeof pharmacyDataList?.pharmacyResponseDtoList === 'object' &&
      pharmacyDataList?.pharmacyResponseDtoList.length > 0 && search.length === 0
    ) {
      setPharmacyData(prevData => {
        const mergedData = _.uniqBy(
          [...prevData, ...pharmacyDataList.pharmacyResponseDtoList],
          'contactPersonNumber',
        );
        if(redirectData.redirect) {
          const data = mergedData.filter(item=>item.id === pharmacyId);
          return data;
        }
        return mergedData;
      });
    }
    else if (pharmacyDataList &&
      typeof pharmacyDataList?.pharmacyResponseDtoList === 'object' &&
      pharmacyDataList?.pharmacyResponseDtoList.length > 0 && search.length > 0) {
        setPharmacyDataSearch(prevData => {
        const mergedData = _.uniqBy(
          [...prevData, ...pharmacyDataList.pharmacyResponseDtoList],
          'contactPersonNumber',
        );
        return mergedData;
      });
    }
  }, [pharmacyDataList]);

  useEffect(() => {
    if (search.length > 0) {
      dispatch(getAllPharmacyForUserThunk({ pageNo: pageNumber, pageSize: 10, prescriptionId:prescriptionId, search }));
    }
    else if (search.length === 0) {
      dispatch(getAllPharmacyForUserThunk({ pageNo: 1, pageSize: 10, prescriptionId:prescriptionId, search }));
    }
  }, [search])
  
  useEffect(() => {
    if (!navigation.isFocused()) {
     dispatch(resetPharmacyDataList());
   }
 }, [focused]);

 useEffect(() => {
  if (pageNumber > 1) {
    dispatch(getAllPharmacyForUserThunk({ pageNo: pageNumber, pageSize: 10, prescriptionId:prescriptionId, search }));
  }
}, [pageNumber]);

useEffect(() => {
  if (pageNumberSearch > 1) {
    dispatch(getAllPharmacyForUserThunk({ pageNo: pageNumberSearch, pageSize: 10, prescriptionId:prescriptionId, search }));
  }
}, [pageNumberSearch]);

  const onSearch = arg => {
     setSearch(arg.trim());
  };
  const onEndReached = () => {
    if (pageNumber < pharmacyDataList?.totalPages && search.length === 0) {
      setPageNumber(pageNumber + 1);
    }
    else if (pageNumberSearch < pharmacyDataList?.totalPages && search.length > 1) {
      setPageNumberSearch(pageNumberSearch + 1);
    }
  };
  const onViewAll = () => {
    setRedirectData({redirect:false,pharmacyId:null});
    dispatch(resetPharmacyDataList());
    dispatch(getAllPharmacyForUserThunk({ pageNo: 1, pageSize: 10, prescriptionId, search }))
  }
  return {
    pharmacyData,
    pharmacyDataSearch,
    onSearch,
    onEndReached,
    isSearch: search.length > 0,
    redirectData,
    onViewAll
  }
}