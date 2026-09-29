import Config from 'react-native-config';
import axiosClient, {handleRefreshToken} from './interceptors';
import {getJwt} from '../store/LocalStore';
import axios from 'axios';

class YuvaService {
  controller;
  constructor() {
    this.controller =
      typeof AbortController !== 'undefined'
        ? new AbortController()
        : {abort: () => {}, signal: {}};
  }
  setController() {
    this.controller =
      typeof AbortController !== 'undefined'
        ? new AbortController()
        : {abort: () => {}, signal: {}};
  }
  async handleError(error) {
    if (error.response.status === 401) {
      const jwt = await getJwt();
      if (jwt) {
        this.controller.abort();
        this.setController();
        handleRefreshToken(
          !error?.request?.responseURL.includes('/refresh-token'),
        );
      }
    } else if (
      error.response.status === 404 &&
      error?.request?.responseURL.includes('/refresh-token')
    ) {
      handleRefreshToken(false);
    }
  }
  get = async endpoint => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosClient.get(`${Config.SERVER}${endpoint}`, {
          signal: this.controller.signal,
        });
        resolve(response);
      } catch (error) {
        this.handleError(error);
        reject(error);
      }
    });
  };
  post = async (endpoint, params, headers) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("This is headers",headers);
        console.log("this is config",Config);
        
        const response = await axiosClient.post(
          `${Config.SERVER}${endpoint}`,
          params,
          {signal: this.controller.signal},
        );
        resolve(response);
      } catch (error) {
        this.handleError(error);
        reject(error);
      }
    });
  };
  put = async (endpoint, params) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosClient.put(
          `${Config.SERVER}${endpoint}`,
          params,
          {signal: this.controller.signal},
        );
        resolve(response);
      } catch (error) {
        this.handleError(error);
        reject(error);
      }
    });
  };
  delete = async (endpoint, params) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosClient.delete(
          `${Config.SERVER}${endpoint}`,
          {...params, signal: this.controller.signal},
        );
        resolve(response);
      } catch (error) {
        this.handleError(error);
        reject(error);
      }
    });
  };
}

export default YuvaService;
