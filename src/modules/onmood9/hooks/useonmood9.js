import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CryptoJS from 'crypto-js';
import {subscriptionDetails} from '../../../store/reducers/PaymentSlice';
import {ONMOOD9_BASE_URL, ONMOOD9_IV, ONMOOD9_KEY} from '../onMood9Config';

export const useOnMood9 = onMood9Props => {
  const id = onMood9Props?.id === null ? '' : `#${onMood9Props?.id}`;
  const dispatch = useDispatch();
  const {
    subscriptionDetails: userSubscriptionDetails,
    onMood9Loading,
    onMood9Error,
  } = useSelector(state => state?.payment);
  const [fetchDetails, setFetchDetails] = useState(false);
  const [encodedQueryString, setEncodedQueryString] = useState('');
  const [uri, setUri] = useState('');
  useEffect(() => {
    dispatch(subscriptionDetails());
    setFetchDetails(true);
  }, []);

  useEffect(() => {
    if (userSubscriptionDetails !== null && fetchDetails) {
      let queryString = `user_id=${userSubscriptionDetails?.userId}${id}&status=${
        userSubscriptionDetails?.paymentStatus
      }${
        userSubscriptionDetails?.paymentStatus === 'Active'
          ? `&start_date=${userSubscriptionDetails?.startDate}&end_date=${userSubscriptionDetails?.endDate}`
          : ''
      }`;
      const key = CryptoJS.enc.Hex.parse(ONMOOD9_KEY);
      const iv = CryptoJS.enc.Hex.parse(ONMOOD9_IV);
      const cipher = CryptoJS.AES.encrypt(queryString, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
      });
      setEncodedQueryString(encodeURIComponent(cipher.toString()));
    }
  }, [userSubscriptionDetails]);

  useEffect(() => {
    if (encodedQueryString.length > 0) {
      setUri(`${ONMOOD9_BASE_URL}/${encodedQueryString}`);
    }
  }, [encodedQueryString]);

  return {encodedQueryString, onMood9Error, onMood9Loading, uri};
};
