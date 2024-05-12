import { Table, TableProps } from 'antd';

interface ProductError {
  id: {
    value: number;
    error: string;
  };
  name: {
    value: string;
    error: string;
  };
  model: {
    value: string;
    error: string;
  };
  description: {
    value: string;
    error: string;
  };
  price: {
    value: number;
    error: string;
  };
  stock_quantity: {
    value: number;
    error: string;
  };
  warranty: {
    value: string;
    error: string;
  };
  weight: {
    value: string;
    error: string;
  };
  dimensions: {
    value: string;
    error: string;
  };
  power: {
    value: string;
    error: string;
  };
  color: {
    value: string;
    error: string;
  };
  manufacturer: {
    value: string;
    error: string;
  };
}

const columns: TableProps<ProductError>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Stock quantity',
    dataIndex: 'stock_quantity',
    key: 'stock_quantity',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Warranty',
    dataIndex: 'warranty',
    key: 'warranty',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Dimensions',
    dataIndex: 'dimensions',
    key: 'dimensions',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Power',
    dataIndex: 'power',
    key: 'power',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
    render: ({ value, error }: { value: string; error: string }) => (
      <p key={value} style={{ color: error ? 'red' : 'gray', textAlign: 'center' }}>
        {value}
      </p>
    ),
  },
];

const listErrorProduct: ProductError[] = [
  {
    id: {
      value: 100,
      error: 'ID already exists',
    },
    name: {
      value: 'Vacuum Cleaner',
      error: '',
    },
    model: {
      value: 'PS1000',
      error: '',
    },
    description: {
      value: 'High-performance vacuum cleaner for household use.',
      error: '',
    },
    price: {
      value: -10,
      error: 'price must be greater than 0',
    },
    stock_quantity: {
      value: 50,
      error: '',
    },
    warranty: {
      value: '1 year',
      error: '',
    },
    weight: {
      value: '5.5 kg',
      error: '',
    },
    dimensions: {
      value: '12x12x48',
      error: '',
    },
    power: {
      value: '1200W',
      error: '',
    },
    color: {
      value: 'Blue',
      error: '',
    },
    manufacturer: {
      value: 'PowerClean',
      error: 'manufacturer is not exist in the system',
    },
  },
  {
    id: {
      value: 2,
      error: 'ID already exists',
    },
    name: {
      value: '',
      error: 'Name is required',
    },
    model: {
      value: 'PS1001',
      error: 'Model is not existent in the system',
    },
    description: {
      value: 'High-performance vacuum cleaner for household use.',
      error: '',
    },
    price: {
      value: -10,
      error: 'Price must be greater than 0',
    },
    stock_quantity: {
      value: -10,
      error: 'stock quantity must be greater than 0',
    },
    warranty: {
      value: '1 year',
      error: '',
    },
    weight: {
      value: '-5.5 kg',
      error: 'quantity must be greater than 0',
    },
    dimensions: {
      value: '12x12x48',
      error: '',
    },
    power: {
      value: '1200W',
      error: '',
    },
    color: {
      value: 'Blue',
      error: '',
    },
    manufacturer: {
      value: 'PowerClean',
      error: '',
    },
  },
  {
    id: {
      value: 3,
      error: '',
    },
    name: {
      value: 'TurboClean 2000',
      error: '',
    },
    model: {
      value: 'TC2000',
      error: 'Model is not existent in the system',
    },
    description: {
      value: 'Advanced vacuum cleaner with turbo suction technology.',
      error: '',
    },
    price: {
      value: -10,
      error: 'Price must be greater than 0',
    },
    stock_quantity: {
      value: -10,
      error: 'stock quantity must be greater than 0',
    },
    warranty: {
      value: '3 year',
      error: '',
    },
    weight: {
      value: '-1.5 kg',
      error: 'quantity must be greater than 0',
    },
    dimensions: {
      value: '14x14x50',
      error: '',
    },
    power: {
      value: '1500W',
      error: '',
    },
    color: {
      value: 'Red',
      error: '',
    },
    manufacturer: {
      value: 'HomeTech',
      error: '',
    },
  },
];

const TableListErrorProduct: React.FC = () => <Table columns={columns} dataSource={listErrorProduct} />;

export default TableListErrorProduct;
