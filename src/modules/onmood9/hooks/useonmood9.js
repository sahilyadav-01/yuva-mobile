import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Aes from 'react-native-aes-crypto';
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
      let queryString = `user_id=testuser12${id}&status=${      // use ${userSubscriptionDetails?.userId} as user_id for production
        userSubscriptionDetails?.paymentStatus
      }${
        userSubscriptionDetails?.paymentStatus === 'Active'
          ? `&start_date=${userSubscriptionDetails?.startDate}&end_date=${userSubscriptionDetails?.endDate}`
          : ''
      }`;
      Aes.encrypt(queryString, ONMOOD9_KEY, ONMOOD9_IV, 'aes-128-cbc')
        .then(cipher => {
          setEncodedQueryString(encodeURIComponent(cipher));
        })
        .catch(e => {
          setEncodedQueryString('');
        });
    }
  }, [userSubscriptionDetails]);

  useEffect(() => {
    if (encodedQueryString.length > 0) {
      setUri(`${ONMOOD9_BASE_URL}&input=${encodedQueryString}`);
    }
  }, [encodedQueryString]);

  return {encodedQueryString, onMood9Error, onMood9Loading, uri};
};
