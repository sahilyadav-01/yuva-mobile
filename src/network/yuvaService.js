import axiosClient, { handleRefreshToken } from './interceptors';
import {PATH, PROTOCOL, SERVER} from '../utils/utils';
import { getJwt } from '../store/LocalStore';

const baseUrl = PROTOCOL + SERVER + PATH;

class YuvaService {
  controller;
  constructor(){
    this.controller = new AbortController();
  }
  setController(){
    this.controller = new AbortController();
  }
  get = async endpoint => {
    try {
      const resp = await axiosClient.get(`${baseUrl}${endpoint}`,{signal:this.controller.signal});
      return resp;
    } catch (error) {
      if(error.response.status === 401) {
        const jwt = await getJwt();
        if(jwt){
          this.controller.abort();
          this.setController();
          handleRefreshToken();
        }
    }
    }
  };
  post = async (endpoint,  params,headers) => {
    try {
      return await axiosClient.post(`${baseUrl}${endpoint}`, params,{...headers,signal:this.controller.signal});
    } catch (error) {
      if(error.response.status === 401) {
        const jwt = await getJwt();
        if(jwt){
          this.controller.abort();
          this.setController();
          handleRefreshToken();
        }
      }
    }
  };
  put = async (endpoint, params) => {
    try {
      return await axiosClient.put(`${baseUrl}${endpoint}`, params, {signal:this.controller.signal});
    } catch (error) {
      if(error.response.status === 401) {
        const jwt = await getJwt();
        if(jwt){
          this.controller.abort();
          this.setController();
          handleRefreshToken();
        }
      }
    }
  };
  delete = async (endpoint,params) => {
    try {
      return await axiosClient.delete(`${baseUrl}${endpoint}`, {...params,signal:this.controller.signal});
    } catch (error) {
      if(error.response.status === 401) {
        const jwt = await getJwt();
        if(jwt){
          this.controller.abort();
          this.setController();
          handleRefreshToken();
        }
      }
    }
  }
}

export default YuvaService;
