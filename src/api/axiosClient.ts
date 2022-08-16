import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import queryString from 'query-string';

const baseUrl = 'http://localhost:18002/api/';

const getToken = () => localStorage.getItem('token');

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});
// axios.interceptors.request.use(
//   function (config: AxiosRequestConfig) {
//     // Do something before request is sent
//     return {
//       ...config,
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${getToken()}`,
//       },
//     };
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axios.interceptors.response.use(
//   function (response: AxiosResponse) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response.data;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getToken()}`,
    },
  };
});
axiosClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);

export default axiosClient;
