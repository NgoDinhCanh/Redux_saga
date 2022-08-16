import { Loading } from 'components/Common';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import authUtils from 'utils/authUtils';

export interface AdminLayoutProps { }

export function AdminLayout(props: AdminLayoutProps) {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      if (!user) {
        navigate("/login");
      } else {
        // save user
        setLoading(false);
        //dispatch(setUser(user));
      }
    };
    checkAuth();
  }, [navigate]);
  return loading ? <Loading fullHeight /> : (
    <div>Admin Layout</div>
  );
}
