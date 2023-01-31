import { useState } from 'react';
import { CustomerServiceOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './index.scss';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Menu',
    key: '/demo',
    icon: <CustomerServiceOutlined />
  }
];

export const LayoutApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const jump2Page = (keyPath: string[]) => {
    navigate(keyPath.join());
  };
  return (
    <Layout className='app-layout'>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='logo-wrapper'>
          <img src={logoImg} alt='logo' className='logo'></img>
        </div>
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
          onClick={({ keyPath }) => jump2Page(keyPath)}
        />
      </Sider>
      <Layout>
        <Header className='header' />
        <Content className='content'>
          <div className='view'>
            <Outlet />
          </div>
        </Content>
        <Footer className='footer'>footer</Footer>
      </Layout>
    </Layout>
  );
};
