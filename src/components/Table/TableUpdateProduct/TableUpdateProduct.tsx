import { Table } from 'antd';
import type { TableProps } from 'antd';
// import PopUp from "./PopUp";

interface UpdateProduct {
  id: {
    newValue: number;
    oldValue: number;
  };
  name: {
    newValue: string;
    oldValue: string;
  };
  model: {
    newValue: string;
    oldValue: string;
  };
  description: {
    newValue: string;
    oldValue: string;
  };
  price: {
    newValue: number;
    oldValue: number;
  };
  stock_quantity: {
    newValue: number;
    oldValue: number;
  };
  warranty: {
    newValue: string;
    oldValue: string;
  };
  weight: {
    newValue: string;
    oldValue: string;
  };
  dimensions: {
    newValue: string;
    oldValue: string;
  };
  power: {
    newValue: string;
    oldValue: string;
  };
  color: {
    newValue: string;
    oldValue: string;
  };
  manufacturer: {
    newValue: string;
    oldValue: string;
  };
}

const columns: TableProps<UpdateProduct>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p key={newValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price',
    render: ({ newValue, oldValue }: { newValue: number; oldValue: number }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Stock quantity',
    dataIndex: 'stock_quantity',
    key: 'stock_quantity',
    render: ({ newValue, oldValue }: { newValue: number; oldValue: number }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Warranty',
    dataIndex: 'warranty',
    key: 'warranty',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Dimensions',
    dataIndex: 'dimensions',
    key: 'dimensions',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Power',
    dataIndex: 'power',
    key: 'power',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p key={oldValue} style={{ color: newValue == oldValue ? 'blue' : 'gray', textAlign: 'center' }}>
        {newValue}
      </p>
    ),
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
    render: ({ newValue, oldValue }: { newValue: string; oldValue: string }) => (
      <p
        onMouseEnter={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
          // return <PopUp oldValue={oldValue} isOpen={event.isTrusted ? true : false} />;
          console.log(event.isTrusted);
        }}
        key={oldValue}
        style={{ color: newValue == oldValue ? 'blue' : 'gray' }}
      >
        {newValue}
      </p>
    ),
  },
];

const listNewProduct: UpdateProduct[] = [
  {
    id: {
      newValue: 1,
      oldValue: 1,
    },
    name: {
      newValue: 'PowerSweep 1000',
      oldValue: 'PowerSweep 1000',
    },
    model: {
      newValue: 'PS1000',
      oldValue: 'PS1000',
    },
    description: {
      newValue: 'Basic vacuum cleaner with powerful suction.',
      oldValue: 'Basic vacuum cleaner with powerful suction.',
    },
    price: {
      newValue: 99.99,
      oldValue: 89.0,
    },
    stock_quantity: {
      newValue: 50,
      oldValue: 30,
    },
    warranty: {
      newValue: '1 year',
      oldValue: '2 year',
    },
    weight: {
      newValue: '5.5 kg',
      oldValue: '4.7 kg',
    },
    dimensions: {
      newValue: '12x12x48',
      oldValue: '12x12x48',
    },
    power: {
      newValue: '1200W',
      oldValue: '1300W',
    },
    color: {
      newValue: 'Orange',
      oldValue: 'Orange',
    },
    manufacturer: {
      newValue: 'PowerClean',
      oldValue: 'PowerClean',
    },
  },
  {
    id: {
      newValue: 2,
      oldValue: 12,
    },
    name: {
      newValue: 'TurboClean 2001',
      oldValue: 'TurboClean 2000',
    },
    model: {
      newValue: 'TC2200',
      oldValue: 'TC2000',
    },
    description: {
      newValue: 'Advanced vacuum cleaner with turbo brush attachment.',
      oldValue: 'Advanced vacuum cleaner with turbo brush attachment.',
    },
    price: {
      newValue: 139.99,
      oldValue: 149.99,
    },
    stock_quantity: {
      newValue: 30,
      oldValue: 20,
    },
    warranty: {
      newValue: '2 years',
      oldValue: '3 years',
    },
    weight: {
      newValue: '6.0 kg',
      oldValue: '6.2 kg',
    },
    dimensions: {
      newValue: '14x14x50',
      oldValue: '14x14x50',
    },
    power: {
      newValue: '1600W',
      oldValue: '1500W',
    },
    color: {
      newValue: 'Red',
      oldValue: 'Red',
    },
    manufacturer: {
      newValue: 'TurboHome',
      oldValue: 'HomeTech',
    },
  },
  {
    id: {
      newValue: 3,
      oldValue: 12,
    },
    name: {
      newValue: 'GreenClean EV3000',
      oldValue: 'EcoVac 3000',
    },
    model: {
      newValue: 'GCEV3000',
      oldValue: 'GCEV3000',
    },
    description: {
      newValue: 'Environmentally friendly vacuum cleaner with energy-saving mode.',
      oldValue: 'Environmentally friendly vacuum cleaner with HEPA filter.',
    },
    price: {
      newValue: 199.99,
      oldValue: 199.99,
    },
    stock_quantity: {
      newValue: 20,
      oldValue: 40,
    },
    warranty: {
      newValue: '3 years',
      oldValue: '2 years',
    },
    weight: {
      newValue: '6.3 kg',
      oldValue: '7.0 kg',
    },
    dimensions: {
      newValue: '15x15x52',
      oldValue: '15x15x52',
    },
    power: {
      newValue: '1800W',
      oldValue: '1800W',
    },
    color: {
      newValue: 'Green',
      oldValue: 'Green',
    },
    manufacturer: {
      newValue: 'EcoTech',
      oldValue: 'GreenClean',
    },
  },
  {
    id: {
      newValue: 4,
      oldValue: 12,
    },
    name: {
      newValue: 'PetMaster Pro',
      oldValue: 'PetMaster Pro',
    },
    model: {
      newValue: 'PMP',
      oldValue: 'PMP',
    },
    description: {
      newValue: 'Designed for pet owners with specialized pet hair attachment.',
      oldValue: 'Designed for pet owners with specialized pet hair attachment.',
    },
    price: {
      newValue: 129.99,
      oldValue: 129.99,
    },
    stock_quantity: {
      newValue: 40,
      oldValue: 200,
    },
    warranty: {
      newValue: '2 years',
      oldValue: '1 year',
    },
    weight: {
      newValue: '5.8 kg',
      oldValue: '6.5 kg',
    },
    dimensions: {
      newValue: '13x13x49',
      oldValue: '13x13x49',
    },
    power: {
      newValue: '1400w',
      oldValue: '1500W',
    },
    color: {
      newValue: 'Gray',
      oldValue: 'Yellow',
    },
    manufacturer: {
      newValue: 'PetClean',
      oldValue: 'PetClean',
    },
  },
];

const TableListUpdateProduct: React.FC = () => <Table columns={columns} dataSource={listNewProduct} />;

export default TableListUpdateProduct;
