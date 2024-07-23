import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {downloadDiagnosticReportThunk} from '../../../store/reducers/DownloadReportSlice';

export const useReport = () => {
  const {downloadDiagnosticReport, diagnosticLoading, diagnosticError} =
    useSelector(state => state.downloadReport);
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.isFocused()) {
      dispatch(downloadDiagnosticReportThunk());
    }
  }, [focused]);
  return {
    diagnosticLoading,
    diagnosticError,
    downloadDiagnosticReport,
  };
};
