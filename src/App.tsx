import AppRouter from '@robodroid/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SectionsProvider, ThemeProvider } from '@robodroid/context';

const App = () => {
  return (
    <ThemeProvider>
      <SectionsProvider>
        <RouterProvider router={AppRouter} />
        <Toaster position='bottom-left' />
      </SectionsProvider>
    </ThemeProvider>
  );
};

export default App;
