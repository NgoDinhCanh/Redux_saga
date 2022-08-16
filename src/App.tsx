import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeCustomization from 'themes';
import { CssBaseline } from '@mui/material';
import RoutesLink from 'routes/RoutesLink';

function App() {
  return (
    <ThemeCustomization>
      <CssBaseline />
      <RoutesLink />
    </ThemeCustomization>
  );
}

export default App;
