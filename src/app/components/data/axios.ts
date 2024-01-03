import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL:'https://localhost:7051',

});

export default instance;
