import axios from 'axios';
const BASE_URL = "http://localhost:8080/api/v1/yuva/"

const axiosClient = axios.create({
    baseUrl:BASE_URL,
    reponseType:'json'
})

export default axiosClient
