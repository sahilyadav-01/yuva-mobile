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
    const loginUrls = ['/login', '/signup', '/otp', '/password', '/validate-otp', '/generate-sms-otp', '/package/popular'];
    const isLoginApi = loginUrls.filter(item => {
      if (config.url.includes(item)) return item;
    });
    if (isLoginApi.length === 0) {
      const jwt = await getJwt();
      config['headers'] = {
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
  error => {
    if (error.response.status && error.response.status === 403) {
      handleUserForbidden();
    }
    return Promise.reject(error);
  },
);

export default axiosClient;

