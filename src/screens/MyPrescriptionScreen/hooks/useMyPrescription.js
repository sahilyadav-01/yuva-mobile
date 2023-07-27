import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {MyPrescriptionReportThunk} from '../../../store/reducers/DownloadReportSlice';

export const useMyPrescription = () => {
  const {myPrescriptionReport, prescriptionLoading, prescriptionError} =
    useSelector(state => state.downloadReport);
  const dispatch = useDispatch();
  const [uuid, setUuid] = useState('0641b94d-16c4-430e-93ce-7877123d0574');
  const [pageNo, setPageNo] = useState(1);
  const [listData, setListData] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [fetchData, setFetchData] = useState(false);
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
        _.uniqBy(
          listData.concat(myPrescriptionReport?.prescriptionResponseDto),
          'filePath',
        ),
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
      dispatch(MyPrescriptionReportThunk({uuid, pageSize: 5, pageNo}));
  }, [pageNo]);

  useEffect(() => {
    dispatch(MyPrescriptionReportThunk({uuid, pageSize: 5, pageNo}));
    setFetchData(true);
  }, [uuid]);

  const onItemSelect = arg => {
    const selectedUuid = dropdownData.find(item => item.key === arg).uuid;
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
  };
};
