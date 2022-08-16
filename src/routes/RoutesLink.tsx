import { NotFound, PrivateRoute } from 'components/Common';
import AuthLayout from 'components/Layout/AuthLayout';
import Login from 'features/auth/pages/Login';
import SignUp from 'features/auth/pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RoutesLink = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesLink;
