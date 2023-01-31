import { RouteObject, useRoutes } from 'react-router-dom';
import { LayoutApp } from './components/Layout';
import Demo from './pages/Demo';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <Demo />
      },
      {
        path: 'demo',
        element: <Demo />
      }
    ]
  }
];

export const App = () => {
  return useRoutes(routes);
};
