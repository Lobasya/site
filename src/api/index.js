import axios from 'axios';
import store from '../store';

class Api {
    constructor(){
        this.axios = axios.create({
            baseURL: 'https://hipstagram-api.herokuapp.com',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        this._initInterceptots();
    }

    _initInterceptots(){
        this.axios.interceptors.request.use(config => {
            config.headers = {
                ...config.headers,
                'Authorization': store.getState().token,
            }
            return config;
        });
    }

    login(body){
        return this.axios.post('/auth/login', body);
    }

    getCurrentUser(){
        return this.axios.get('/users/current');
    }
}

export default new Api();