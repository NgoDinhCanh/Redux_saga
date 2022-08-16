import { LoginUser, RegisterUser } from 'models';
import axiosClient from './axiosClient';
const authApi = {
  signup(data: RegisterUser): Promise<RegisterUser> {
    const url = 'auth/singup';
    return axiosClient.post(url, { data });
  },
  login(data: LoginUser): Promise<LoginUser> {
    const url = 'admin/login';
    return axiosClient.post(url, { data });
  },
  verifyToken: () => axiosClient.get('auth/user'),
  logout: () => axiosClient.get('auth/logout'),
};

export default authApi;
