import axiosClient from './interceptors';
import {PATH, PROTOCOL, SERVER} from '../utils/utils';

const baseUrl = PROTOCOL + SERVER + PATH;

class YuvaService {
  get = async endpoint => {
    return await axiosClient.get(`${baseUrl}${endpoint}`);
  };
  post = async (endpoint, params) => {
    return await axiosClient.post(`${baseUrl}${endpoint}`, params);
  };
  put = async (endpoint, params) => {
    return await axiosClient.put(`${baseUrl}${endpoint}`, params);
  };
  delete = async (endpoint,params) => {
    return await axiosClient.delete(`${baseUrl}${endpoint}`, params);
  }
}

const yuvaService = new YuvaService();
export {yuvaService as YuvaService};
