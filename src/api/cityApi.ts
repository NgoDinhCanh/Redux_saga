import { City, ListResponse } from 'models';
import axiosClient from './axiosClient';

const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = 'admin/cities';
    return axiosClient.post(url);
  },
};
export default cityApi;
