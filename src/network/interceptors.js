import axios from 'axios';
import {getJwt, getRefreshToken} from '../store/LocalStore';
import {logoutThunk, refreshThunk, resetRoute, setUnauthorisedStatus} from '../store/reducers/AuthSlice';
import store from '../store/Store';
import {maintainceThunk} from '../store/reducers/MaintainenceSlice';
import { setRedirectState } from '../store/reducers/NotificationSlice';
import { getDeviceId } from '../utils/utils';

const handleUserForbidden = async () => {
  store.dispatch(logoutThunk());
}

const handleRefreshToken = async () => {
    if(!store.getState().auth.unauthorised) {
    store.dispatch(setUnauthorisedStatus(true));
    const token = await getRefreshToken();
    if(token) store.dispatch(refreshThunk(token));
    else store.dispatch(resetRoute(-1));
    }
}

const handleMaintaince = flag => {
  store.dispatch(maintainceThunk(flag));
};

const byPassForbiddenUrls = ['/onmood9','/erms'];

const loginCTAUrls = [
  '/forgot-password',
  '/validate-otp',
  '/verify-link',
  '/generate-sms-otp',
  '/login',
  '/signup',
  '/reset-password',
];

let axiosClient = axios.create();
axiosClient.interceptors.request.use(
  async config => {
    const loginUrls = [
      '/forgot-password',
      '/validate-otp',
      '/verify-link',
      '/generate-sms-otp',
      '/login',
      '/signup',
      '/reset-password',
      '/package/popular',
      '/test/popular',
      '/plan/popular',
      '/cart',
      '/refresh-token'
    ];

    loginCTAUrls.forEach(item=>{
      if(config.url.includes(item)) store.dispatch(setRedirectState(true))
    })

    const isLoginApi = loginUrls.filter(item => {
      if (config.url.includes(item)) return item;
    });

    config['headers'] = {
      ...config['headers'],
    };

    if((config.url.includes('/cart') || config.url.includes('/coupon/getAllCoupons/user') && (true || store.getState().auth.loggedIn !== 'loggedIn'))){
      const deviceId = await getDeviceId();
      config['headers'] = {...config['headers'], Cookie:`SESSION_ID=${deviceId}`}
    }

    if (isLoginApi.length === 0) {
      const jwt = await getJwt();
      config['headers'] = {
        ...config['headers'],
        Authorization: `Bearer ${jwt ?? ''}`,
      };
      return config;
    }
    return config;
  },
  error => {
    //Handling errors in the request interceptor
  },
);

axiosClient.interceptors.response.use(
  resp => {
    loginCTAUrls.forEach(item=>{
      if(resp.config.url.includes(item)) store.dispatch(setRedirectState(false))
    })
    return resp
  },
  async error => {
    const jwt = await getJwt();
    if (error?.response?.status === 503) {
      handleMaintaince(true);
    } else if (
      jwt &&
      error?.response?.status &&
      error?.response?.status === 403 &&
      byPassForbiddenUrls.filter(item => {
        if (error?.request?.responseURL?.includes(item)) return item;
      }).length === 0
    ) {
      handleUserForbidden();
    }
    loginCTAUrls.forEach(item=>{
      if(error?.config.url.includes(item)) store.dispatch(setRedirectState(false))
    })
    return Promise.reject(error);
  },
);

export {handleRefreshToken};
export default axiosClient;
