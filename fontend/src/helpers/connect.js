import axios from 'axios';
import { api } from '../configUrl';

const token = window.localStorage.getItem('token');

const axiosIntance = axios.create({
    baseURL: api,
    headers: {
        'token': token ? `Bearer ${token}` : ''
    }
});

export default axiosIntance;