import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import LocalStorageService, {ACCESS_TOKEN_KEY} from "./services/LocalStorageService";

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.interceptors.request.use(
    config => {
        if (!config.url.endsWith("/signup")) {
            const token = LocalStorageService.get(ACCESS_TOKEN_KEY);
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)
axios.interceptors.response.use(
    response => {
        return response;
    },
    function (error) {
        // const originalRequest = error.config
        const navigate = useNavigate();
        if (
            error.response.status === 401 /*&&*/
            // originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
        ) {
            navigate('/login')
            return Promise.reject(error)
        }

        // if (error.response.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true
        //     const refreshToken = localStorageService.getRefreshToken()
        //     return axios
        //         .post('/auth/token', {
        //             refresh_token: refreshToken
        //         })
        //         .then(res => {
        //             if (res.status === 201) {
        //                 localStorageService.setToken(res.data)
        //                 axios.defaults.headers.common['Authorization'] =
        //                     'Bearer ' + localStorageService.getAccessToken()
        //                 return axios(originalRequest)
        //             }
        //         })
        // }
        // return Promise.reject(error)
    }
)


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


