import authApi from 'api/authApi';
const authUtils = {
  isAuthenticated: async () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const res = await authApi.verifyToken();
      return res;
    } catch {
      return false;
    }
  },
  isLogout: async () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const res = await authApi.logout();
      localStorage.removeItem('token');
      return res;
    } catch {
      return false;
    }
  },
};

export default authUtils;
