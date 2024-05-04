import { Link } from 'react-router-dom';

const TableTotal = (): JSX.Element => {
  return (
    <div>
      <Link to="/list-new-product">List new product</Link>
      <Link to="/list-update-product">List update product</Link>
    </div>
  );
};

export default TableTotal;
