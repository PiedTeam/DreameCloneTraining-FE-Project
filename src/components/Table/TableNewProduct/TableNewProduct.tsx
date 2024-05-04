import { Table } from 'antd';
import type { TableProps } from 'antd';

interface NewProduct {
  id: number;
  name: string;
  model: string;
  description: string;
  price: number;
  stock_quantity: number;
  warranty: string;
  weight: string;
  dimensions: string;
  power: string;
  color: string;
  manufacturer: string;
}

const columns: TableProps<NewProduct>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: () => <p style={{ color: { error ? "red":"blue"} }}>{text}</p>,
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price',
  },
  {
    title: 'Stock quantity',
    dataIndex: 'stock_quantity',
    key: 'stock_quantity',
  },
  {
    title: 'Warranty',
    dataIndex: 'warranty',
    key: 'warranty',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'Dimensions',
    dataIndex: 'dimensions',
    key: 'dimensions',
  },
  {
    title: 'Power',
    dataIndex: 'power',
    key: 'power',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
];

const listNewProduct: NewProduct[] = [
  {
    id: 1,
    name: 'PowerSweep 1000',
    model: 'PS1000',
    description: 'High-performance vacuum cleaner for household use.',
    price: 99.99,
    stock_quantity: 50,
    warranty: '1 year',
    weight: '5.5 kg',
    dimensions: '12x12x48',
    power: '1200W',
    color: 'Blue',
    manufacturer: 'CleanCo',
  },
  {
    id: 2,
    name: 'TurboClean 2000',
    model: 'TC2000',
    description: 'Advanced vacuum cleaner with turbo suction technology.',
    price: 149.99,
    stock_quantity: 30,
    warranty: '2 years',
    weight: '6.2 kg',
    dimensions: '14x14x50',
    power: '1500W',
    color: 'Red',
    manufacturer: 'HomeTech',
  },
  {
    id: 3,
    name: 'EcoVac 3000',
    model: 'EV3000',
    description: 'Environmentally friendly vacuum cleaner with HEPA filter.',
    price: 199.99,
    stock_quantity: 20,
    warranty: '3 years',
    weight: '7.0 kg',
    dimensions: '15x15x52',
    power: '1800W',
    color: 'Green',
    manufacturer: 'GreenClean',
  },
  {
    id: 4,
    name: 'PetMaster Pro',
    model: 'PMPro',
    description: 'Specifically designed for pet hair removal.',
    price: 129.99,
    stock_quantity: 40,
    warranty: '2 years',
    weight: '6.5 kg',
    dimensions: '13x13x49',
    power: '1400W',
    color: 'Yellow',
    manufacturer: 'PetCare',
  },
  {
    id: 5,
    name: 'AllergyGuard 400',
    model: 'AG400',
    description: 'Ideal for allergy sufferers with anti-allergen technology.',
    price: 179.99,
    stock_quantity: 25,
    warranty: '3 years',
    weight: '6.8 kg',
    dimensions: '14x14x51',
    power: '1600W',
    color: 'White',
    manufacturer: 'HealthClean',
  },
  {
    id: 6,
    name: 'DustEater Elite',
    model: 'DEElite',
    description: 'High-capacity dust collection for large homes.',
    price: 219.99,
    stock_quantity: 15,
    warranty: '5 years',
    weight: '7.5 kg',
    dimensions: '16x16x54',
    power: '2000W',
    color: 'Black',
    manufacturer: 'DustMaster',
  },
  {
    id: 7,
    name: 'AutoSweep Plus',
    model: 'ASP',
    description: 'Robotic vacuum cleaner with AI navigation.',
    price: 299.99,
    stock_quantity: 10,
    warranty: '2 years',
    weight: '5.0 kg',
    dimensions: '12x12x46',
    power: '1300W',
    color: 'Silver',
    manufacturer: 'SmartHome',
  },
  {
    id: 8,
    name: 'UltraVac Max',
    model: 'UVM',
    description: 'Maximum power and versatility for heavy-duty cleaning.',
    price: 249.99,
    stock_quantity: 20,
    warranty: '4 years',
    weight: '8.0 kg',
    dimensions: '17x17x56',
    power: '2200W',
    color: 'Gray',
    manufacturer: 'MegaClean',
  },
  {
    id: 9,
    name: 'HandiSweep Mini',
    model: 'HSM',
    description: 'Compact handheld vacuum cleaner for quick cleanups.',
    price: 49.99,
    stock_quantity: 50,
    warranty: '1 year',
    weight: '2.0 kg',
    dimensions: '8x8x14',
    power: '800W',
    color: 'Purple',
    manufacturer: 'HandyClean',
  },
  {
    id: 10,
    name: 'FreshAir Pro',
    model: 'FAP',
    description: 'Air purifier and vacuum combo for fresh, clean air.',
    price: 349.99,
    stock_quantity: 10,
    warranty: '5 years',
    weight: '9.5 kg',
    dimensions: '18x18x60',
    power: '2400W',
    color: 'Blue',
    manufacturer: 'AirPure',
  },
];

const TableListNewProduct: React.FC = () => <Table columns={columns} dataSource={listNewProduct} />;

export default TableListNewProduct;
