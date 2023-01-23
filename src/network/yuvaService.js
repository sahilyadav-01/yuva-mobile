import axiosClient from './interceptors';
import {SERVER} from '../utils/utils';

const baseUrl = 'http://' + SERVER + ':8080/api/v1/yuva';

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
}

const yuvaService = new YuvaService();
export {yuvaService as YuvaService};
