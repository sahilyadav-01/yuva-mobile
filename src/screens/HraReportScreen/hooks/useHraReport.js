import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  downloadHraReportThunk,
  setHraReportId,
} from '../../../store/reducers/DownloadReportSlice';

export const useReportCard = () => {
  const {downloadHraReport, hraLoading, hraError, hraReportId} = useSelector(
    state => state.downloadReport,
  );
  const [idParam, setIdParam] = useState(null);
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.isFocused()) {
      const param = hraReportId ? {id: hraReportId} : undefined;
      setIdParam(param?.id ? hraReportId : null);
      dispatch(setHraReportId(null));
      dispatch(downloadHraReportThunk(param));
    }
  }, [focused]);

  const onViewAll = () => {
    setIdParam(null);
    dispatch(downloadHraReportThunk());
  };

  return {
    downloadHraReport,
    hraLoading,
    hraError,
    idParam,
    onViewAll,
  };
};
