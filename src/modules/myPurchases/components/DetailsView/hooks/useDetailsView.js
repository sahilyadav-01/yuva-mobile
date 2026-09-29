import {Alert} from 'react-native';
import {checkPermission} from '../../../../../utils/utils';
import {DOWNLOAD_INVOICE_ERROR} from '../constants';

export const useDetailsView = path => {
  const downloadInvoice = () => {
    if (typeof path === 'string' && path.length > 0) {
      const name = `${
        path.replace('https://', '').split('/')[1]?.split('?')[0]
      }.pdf`;
      checkPermission(path, name);
    } else {
      Alert.alert('Alert', DOWNLOAD_INVOICE_ERROR);
    }
  };
  return {downloadInvoice};
};
