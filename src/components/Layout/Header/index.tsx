import {
  DownOutlined,
  ExperimentOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../../assets/logo.svg';
import './index.scss';

export const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <LogoSvg width={60} />
      </div>
      <div className='menu'>
        <Menu
          mode='horizontal'
          overflowedIndicator={false}
          selectable={false}
          items={[
            {
              key: 'menu',
              icon: <DownOutlined />,
              label: 'Menu',
              children: [
                {
                  key: '/home',
                  label: (
                    <Link className='Header__item' to='/home'>
                      Home
                    </Link>
                  ),
                  icon: <HomeOutlined />
                },
                {
                  key: '/show',
                  label: (
                    <Link className='Header__item' to='/show'>
                      Show
                    </Link>
                  ),
                  icon: <ExperimentOutlined />
                }
              ]
            }
          ]}
        ></Menu>
      </div>
    </div>
  );
};
