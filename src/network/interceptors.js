import axios from 'axios';
import { getJwt } from '../store/LocalStore';
import { logoutThunk } from '../store/reducers/AuthSlice';
import store from '../store/Store';

const handleUserForbidden = () => {
  store.dispatch(logoutThunk());
};

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
      '/cart/guest',
    ];
    const isLoginApi = loginUrls.filter(item => {
      if (config.url.includes(item)) return item;
    });

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
    if (jwt && error.response.status && error.response.status === 403) {
      handleUserForbidden();
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
