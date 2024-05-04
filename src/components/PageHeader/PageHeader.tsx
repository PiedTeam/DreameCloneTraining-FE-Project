import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout.js';
import { useNavigate } from 'react-router-dom';

interface NavItem {
  label: string;
  key: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    key: '/dashboard',
  },
  {
    label: 'Import product list',
    key: '/import-products',
  },
  {
    label: 'Orders',
    key: '/orders',
  },
  {
    label: 'Customers',
    key: '/customer',
  },
  {
    label: 'Settings',
    key: '/setting',
  },
  {
    label: 'List new product',
    key: '/list-new-product',
  },
  {
    label: 'List update product',
    key: '/list-update-product',
  },
  {
    label: 'List error product',
    key: '/list-error-product',
  },
];

const PageHeader = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={navItems}
        style={{ flex: 1, minWidth: 0, justifyContent: 'space-around' }}
        onClick={({ key }) => {
          navigate(key);
        }}
      />
    </Header>
  );
};

export default PageHeader;
