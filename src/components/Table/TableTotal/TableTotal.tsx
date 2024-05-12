import { NavLink, Route, Routes } from 'react-router-dom';
import TableListNewProduct from '../TableNewProduct/TableNewProduct';
import TableListUpdateProduct from '../TableUpdateProduct/TableUpdateProduct';
import TableListErrorProduct from '../TableErrorProduct/TableErrorProduct';
import ComponentNavLink from '../../ComponentNavLink/ComponentNavLink';

const TableTotal = (): JSX.Element => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '15px auto',
        }}
      >
        <ComponentNavLink keyNavLink="/list-product" valueNavLink="List new product" navLinkColor="#1FAB89" />
        <ComponentNavLink keyNavLink="update" valueNavLink="List update product" navLinkColor="#47B5FF" />
        <ComponentNavLink keyNavLink="error" valueNavLink="List error product" navLinkColor="#C63D2F" />
      </div>

      <Routes>
        <Route index element={<TableListNewProduct />} />
        <Route path="update" element={<TableListUpdateProduct />} />
        <Route path="error" element={<TableListErrorProduct />} />
      </Routes>
    </div>
  );
};

export default TableTotal;
