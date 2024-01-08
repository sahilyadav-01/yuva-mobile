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
  async handleError(error){
    if(error.response.status === 401) {
      const jwt = await getJwt();
      if(jwt){
        this.controller.abort();
        this.setController();
        handleRefreshToken();
      }
  }
  }
  get = async endpoint => {
    return new Promise(async (resolve,reject) => {
      try {
        const response = await axiosClient.get(`${baseUrl}${endpoint}`,{signal:this.controller.signal});
        resolve(response);
      } catch (error) {
        this.handleError(error);
        reject(error);
      }
    })
  };
  post = async (endpoint,  params,headers) => {
    return new Promise(async (resolve,reject) => {
      try {
        const response = await axiosClient.post(`${baseUrl}${endpoint}`, params,{...headers,signal:this.controller.signal});
        resolve(response);
      } catch (error) {
        this.handleError(error);
        reject(error);
      }
    })
  };
  put = async (endpoint, params) => {
    return new Promise(async (resolve,reject) => {
      try {
        const response = await axiosClient.put(`${baseUrl}${endpoint}`, params, {signal:this.controller.signal});
        resolve(response);
      } catch (error) {
        this.handleError(error);
        reject(error);
      }
    })
  };
  delete = async (endpoint,params) => {
    return new Promise(async (resolve,reject) => {
      try {
        const response = await axiosClient.delete(`${baseUrl}${endpoint}`, {...params,signal:this.controller.signal});
        resolve(response);
      } catch (error) {
        this.handleError(error);
        reject(error);
      }
    })
  }
}

export default YuvaService;
