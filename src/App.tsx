import AppRouter from '@robodroid/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@robodroid/context';

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
      <Toaster position='bottom-left' />
    </ThemeProvider>
  );
};

export default App;
