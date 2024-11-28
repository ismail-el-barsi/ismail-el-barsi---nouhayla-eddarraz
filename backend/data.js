import bcrypt from 'bcryptjs';

const data = {
  products: [
    {
      owner: '67483d5fc54eb4134bcb11ee',
      name: 'Chanel No. 5',
      slug: 'chanel-no-5',
      category: 'Perfume',
      image: '/images/channel_n5.jpg',
      price: 150,
      stock: 8,
      rating: 4.8,
      description: 'Classic floral aldehyde fragrance',
    },
    {
      owner: '67483d5fc54eb4134bcb11ee',
      name: 'Dior Sauvage',
      slug: 'dior-sauvage',
      category: 'Perfume',
      image: '/images/dior_sauvage.jpg',
      price: 120,
      stock: 12,
      rating: 4.7,
      description: 'Fresh and bold fragrance',
    },
    {
      owner: '67483d5fc54eb4134bcb11ee',
      name: 'Tom Ford Black Orchid',
      slug: 'tom-ford-black-orchid',
      category: 'Perfume',
      image: '/images/Tom_Ford_Black_Orchid.jpg',
      price: 180,
      stock: 5,
      rating: 4.9,
      description: 'Luxurious and sensual fragrance',
    },
  ],
  users: [
    {
      username: 'user',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
    },
  ],
};

export default data;
