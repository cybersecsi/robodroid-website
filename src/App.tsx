import AppRouter from '@robodroid/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@robodroid/context';
import 'tippy.js/dist/tippy.css'; // optional

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
      <Toaster position='bottom-left' />
    </ThemeProvider>
  );
};

export default App;
