import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import './index.scss';

export const LayoutApp = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content className='content'>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
