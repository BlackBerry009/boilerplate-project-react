import { RouteObject, useRoutes } from 'react-router-dom';
import { LayoutApp } from './components/Layout';
import { Home } from './pages/Home';
import { Show } from './pages/Show';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'show',
        element: <Show />
      }
    ]
  }
];

export const App = () => {
  return useRoutes(routes);
};
