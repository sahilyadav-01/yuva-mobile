import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Aes from 'react-native-aes-crypto';
import {subscriptionDetails} from '../../../store/reducers/PaymentSlice';

export const useOnMood9 = (onMood9Props) => {
  const id = onMood9Props?.id === null ? '' : `#${onMood9Props?.id}`;
  const dispatch = useDispatch();
  const {
    subscriptionDetails: userSubscriptionDetails,
    onMood9Loading,
    onMood9Error,
  } = useSelector(state => state?.payment);
  const [fetchDetails, setFetchDetails] = useState(false);
  const [encodedQueryString, setEncodedQueryString] = useState('');
  const [uri,setUri] = useState('');
  const corporateId = 'wT28b53UeY1gtN9d';
  const key = '8a0976d5abc40274354b37fbf5c93eaa';
  const iv = '9b110990b68db3670b86381893118bf9';
  const queryString = `https://onmood9.com/pwa/corporate_pwa.php?c=${corporateId}`
  useEffect(() => {
    dispatch(subscriptionDetails());
    setFetchDetails(true);
  }, []);

  useEffect(() => {
    if (userSubscriptionDetails !== null && fetchDetails) {
      let queryString = `user_id=testuser12${id}&status=${
        userSubscriptionDetails?.paymentStatus
      }${
        userSubscriptionDetails?.paymentStatus === 'Active'
          ? `&start_date=${userSubscriptionDetails?.startDate}&end_date=${userSubscriptionDetails?.endDate}`
          : ''
      }`;
      Aes.encrypt(queryString, key, iv, 'aes-128-cbc')
        .then(cipher => {
          setEncodedQueryString(encodeURIComponent(cipher));
        })
        .catch(e => {
          setEncodedQueryString('');
        });
    }
  }, [userSubscriptionDetails]);

  useEffect(()=>{
    if(encodedQueryString.length > 0) {
      setUri(`${queryString}&input=${encodedQueryString}`)
    }
  },[encodedQueryString])

  return {encodedQueryString, onMood9Error, onMood9Loading, uri};
};
