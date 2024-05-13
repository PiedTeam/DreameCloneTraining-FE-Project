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
    label: 'Manage product',
    key: 'manage-products',
    children: [
      { label: 'Import product', key: '/import-products' },
      {
        label: 'Export product',
        key: '/export-products',
      },
      {
        label: 'List-product',
        key: '/list-products',
      },
    ],
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
