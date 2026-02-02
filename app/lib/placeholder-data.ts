import { Customer, Invoice, Revenue, User } from './definitions';

export const users: User[] = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Admin User',
    email: 'admin@nextmail.com',
    password: '123456',
  },
  {
    id: 'b5a7b835-7c2d-4c3f-8e7b-8f6f3fd7b2f7',
    name: 'Demo User',
    email: 'demo@nextmail.com',
    password: '123456',
  },
];

export const customers: Customer[] = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@vercel.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c80-3e4581b77efd',
    name: 'Lee Robinson',
    email: 'lee@vercel.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '8d8b5f2d-0b4b-4f5a-9c5a-0efad57a0f5d',
    name: 'Amy Burns',
    email: 'amy@vercel.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: 'f4c8bdf2-3f0a-4b48-9b8a-66a2dc5d07e5',
    name: 'Michael Novotny',
    email: 'michael@vercel.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: '0d6f6f7d-4c9a-4c24-9d8f-7b8c7dbb6ad4',
    name: 'Evil Rabbit',
    email: 'evil@vercel.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '9b1b8f30-2d84-4e9a-9e0d-4d5a7d9eaf7f',
    name: 'Balazs Orban',
    email: 'balazs@vercel.com',
    image_url: '/customers/balazs-orban.png',
  },
];

export const invoices: Invoice[] = [
  {
    id: 'c2f4e08c-4c5a-45a1-8b46-3db6d98d7fe7',
    customer_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    amount: 15795,
    date: '2024-12-15',
    status: 'pending',
  },
  {
    id: '94e4a1e1-4d4a-4f6d-9d7a-6d7e2f4b0f6d',
    customer_id: 'd6e15727-9fe1-4961-8c80-3e4581b77efd',
    amount: 20348,
    date: '2024-11-23',
    status: 'paid',
  },
  {
    id: '9c5bd3ac-5d7e-4b3a-9d7c-2d3e4f5a6b7c',
    customer_id: '8d8b5f2d-0b4b-4f5a-9c5a-0efad57a0f5d',
    amount: 3040,
    date: '2024-10-09',
    status: 'paid',
  },
  {
    id: '63b4d8a8-4b6b-4f6a-9d74-3f5d6e7a8b9c',
    customer_id: 'f4c8bdf2-3f0a-4b48-9b8a-66a2dc5d07e5',
    amount: 4537,
    date: '2024-09-12',
    status: 'pending',
  },
  {
    id: 'e3c8b4a6-7d5e-4f8a-9b0c-1d2e3f4a5b6c',
    customer_id: '0d6f6f7d-4c9a-4c24-9d8f-7b8c7dbb6ad4',
    amount: 29345,
    date: '2024-08-30',
    status: 'paid',
  },
  {
    id: 'b7c4d5e6-8f9a-4b0c-9d1e-2f3a4b5c6d7e',
    customer_id: '9b1b8f30-2d84-4e9a-9e0d-4d5a7d9eaf7f',
    amount: 7810,
    date: '2024-07-05',
    status: 'pending',
  },
  {
    id: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
    customer_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    amount: 12300,
    date: '2024-06-18',
    status: 'paid',
  },
  {
    id: 'f1e2d3c4-b5a6-4f7e-8d9c-0b1a2c3d4e5f',
    customer_id: 'd6e15727-9fe1-4961-8c80-3e4581b77efd',
    amount: 8900,
    date: '2024-05-02',
    status: 'paid',
  },
  {
    id: '0a1b2c3d-4e5f-4a6b-8c9d-0e1f2a3b4c5d',
    customer_id: '8d8b5f2d-0b4b-4f5a-9c5a-0efad57a0f5d',
    amount: 4500,
    date: '2024-04-14',
    status: 'pending',
  },
  {
    id: '5d4c3b2a-1f0e-4d9c-8b7a-6e5f4d3c2b1a',
    customer_id: 'f4c8bdf2-3f0a-4b48-9b8a-66a2dc5d07e5',
    amount: 22000,
    date: '2024-03-22',
    status: 'paid',
  },
];

export const revenue: Revenue[] = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 2600 },
  { month: 'Jul', revenue: 2400 },
  { month: 'Aug', revenue: 2800 },
  { month: 'Sep', revenue: 3000 },
  { month: 'Oct', revenue: 3200 },
  { month: 'Nov', revenue: 3400 },
  { month: 'Dec', revenue: 3600 },
];
