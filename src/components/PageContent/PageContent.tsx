import { Content } from 'antd/lib/layout/layout.js';
import { Route, Routes } from 'react-router-dom';
import FormUploadFile from '../FormUploadFile/FormUploadFile';
import { theme } from 'antd';
import TableTotal from '../Table/TableTotal/TableTotal';

const PageContent = (): JSX.Element => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content style={{ padding: '0 48px', height: '100%' }}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: '100%',
          padding: 24,
          borderRadius: borderRadiusLG,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Routes>
          <Route index element={<div>Dashboard</div>} />
          <Route path="/import-products" element={<FormUploadFile />} />
          <Route path="/orders" element={<div>Orders</div>} />
          <Route path="/customer" element={<div>Customer</div>} />
          <Route path="/setting" element={<div>Setting</div>} />
          <Route path="/list-product/*" element={<TableTotal />} />
        </Routes>
      </div>
    </Content>
  );
};

export default PageContent;
