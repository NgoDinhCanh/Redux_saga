import Loading from 'components/Common/Loading';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import authUtils from 'utils/authUtils';

export interface AppLayoutProps {}

export function AppLayout(props: AppLayoutProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      console.log(user);
      if (!user) {
        navigate('/login');
      } else {
        // save user
        setLoading(false);
        //dispatch(setUser(user));
      }
    };
    checkAuth();
  }, [navigate]);
  return loading ? <Loading fullHeight /> : <Outlet />;
}
