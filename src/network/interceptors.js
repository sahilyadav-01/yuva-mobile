import axios from 'axios';
import {getJwt, getRefreshToken} from '../store/LocalStore';
import {logoutThunk, refreshThunk, resetRoute, setUnauthorisedStatus} from '../store/reducers/AuthSlice';
import store from '../store/Store';
import {maintainceThunk} from '../store/reducers/MaintainenceSlice';

const handleUserForbidden = async () => {
  store.dispatch(logoutThunk());
}

const handleRefreshToken = async () => {
    const token = await getRefreshToken();
    if(token) store.dispatch(refreshThunk(token));
    else store.dispatch(resetRoute(-1));
}

const handleMaintaince = flag => {
  store.dispatch(maintainceThunk(flag));
};

const byPassForbiddenUrls = ['/onmood9','/erms'];

let axiosClient = axios.create();
let errorCount = 0;
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
      '/cart/guest',
      '/refresh-token'
    ];
    const isLoginApi = loginUrls.filter(item => {
      if (config.url.includes(item)) return item;
    });

    config['headers'] = {
      ...config['headers'],
    };

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
  resp => resp,
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
    return Promise.reject(error);
  },
);

export {handleRefreshToken};
export default axiosClient;
