import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {MyPrescriptionReportThunk} from '../../../store/reducers/DownloadReportSlice';
import { useNavigation } from '@react-navigation/native';

export const useMyPrescription = ({prescriptionId,redirect,serviceUuid}) => {
  const {myPrescriptionReport, prescriptionLoading, prescriptionError} =
    useSelector(state => state.downloadReport);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [uuid, setUuid] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [listData, setListData] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [fetchData, setFetchData] = useState(false);
  const [redirectData,setRedirectData] = useState(null);
  const dropdownData = [
    {
      key: '0',
      value: 'Appointments',
      uuid: '0641b94d-16c4-430e-93ce-7877123d0574',
    },
    {
      key: '1',
      value: 'Talk to Doctor',
      uuid: 'bb4385d4-7f92-11ed-a1eb-0242ac120002',
    },
  ];

  useEffect(() => {
    if (!prescriptionLoading && !prescriptionError && fetchData) {
      setFetchData(false);
      setListData(
        listData.concat(myPrescriptionReport?.prescriptionResponseDto),
      );
      setFetchError(false);
      setDataAvailable(false);
    } else if (!prescriptionLoading && prescriptionError) {
      setFetchError(true);
      setDataAvailable(false);
    }
  }, [prescriptionLoading, prescriptionError]);

  useEffect(() => {
    if (pageNo > 1)
      dispatch(MyPrescriptionReportThunk({uuid, pageSize: 10, pageNo}));
    setFetchData(true);
  }, [pageNo]);

  useEffect(() => {
    if(redirectData?.redirect && uuid) dispatch(MyPrescriptionReportThunk({uuid: redirectData?.serviceUuid, pageSize: 10, pageNo: 1, id: redirectData.prescriptionId.toString()}));
    else if(uuid) {
      dispatch(MyPrescriptionReportThunk({uuid, pageSize: 10, pageNo}));
    }
    setFetchData(true);
  }, [uuid]);

  const onItemSelect = arg => {
    const selectedUuid = dropdownData.find(item => item.key === arg).uuid;
    setRedirectData({prescriptionId,redirect,serviceUuid});
    navigation.setParams({prescriptionId:null,redirect:false,serviceUuid:null})
    setListData([]);
    setPageNo(1);
    setUuid(selectedUuid);
  };

  const onEndReached = () => {
    if (pageNo < myPrescriptionReport?.totalPages && !fetchData) {
      setDataAvailable(true);
      setPageNo(pageNo + 1);
    }
  };

  const onViewAll = () => {
    navigation.setParams({prescriptionId:null,redirect:false,serviceUuid:null})
    setRedirectData(null);
    setPageNo(1);
    dispatch(MyPrescriptionReportThunk({uuid, pageSize: 10, pageNo: 1}));
  }

  return {
    prescriptionLoading,
    prescriptionError,
    myPrescriptionReport,
    dropdownData,
    onItemSelect,
    fetchError,
    listData,
    onEndReached,
    dataAvailable,
    pageNo,
    onViewAll,
    redirectData
  };
};
