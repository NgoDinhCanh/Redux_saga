import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeCustomization from 'themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Login from 'features/auth/pages/Login';
import SignUp from 'features/auth/pages/SignUp';
import { AdminLayout } from 'components/Layout';
import { NotFound } from 'components/Common';

function App() {
  return (
    <ThemeCustomization>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeCustomization>
  );
}

export default App;
