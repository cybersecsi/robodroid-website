import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Header, Content, Footer } from '@robodroid/containers';
import { Home, NoMatch } from '@robodroid/pages';

const GenericRoute = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <GenericRoute />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]);

export default AppRouter;
