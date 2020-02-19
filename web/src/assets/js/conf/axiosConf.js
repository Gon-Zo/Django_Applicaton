import axios from 'axios';

const conf = axios.create({
    baseURL: 'http://localhost:3030/api'
});

conf.interceptors.request


const AxiosConf = conf

export default AxiosConf;
