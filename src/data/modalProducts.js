/* eslint-disable no-unused-vars */
export const products = [
  {
    id: 1,
    name: 'Гавкамен мазь для наружного применения туба 25г',
    description: 'Противовоспалительная мазь для наружного применения',
    price: 129,
    image: 'https://images.pexels.com/photos/3683108/pexels-photo-3683108.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    category: 'мази'
  },
  {
    id: 2,
    name: 'Гавкамен, мазь для наружного применения, упаковка, 25г',
    description: 'Лечебная мазь в удобной упаковке',
    price: 136,
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    category: 'мази'
  },
  {
    id: 3,
    name: 'Гавкамен, мазь для наружного применения, банка, 25 г',
    description: 'Противовоспалительная мазь в стеклянной банке',
    price: 64,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    category: 'мази'
  },
  {
    id: 4,
    name: 'Парацетамол таблетки 500мг №20',
    description: 'жаропонижающее и обезболивающее средство',
    price: 45,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    category: 'таблетки'
  },
  {
    id: 5,
    name: 'Нурофен гель для наружного применения 5% 50г',
    description: 'Противовоспалительный гель с ибупрофеном',
    price: 218,
    image: 'https://images.pexels.com/photos/3683095/pexels-photo-3683095.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    category: 'гели'
  },
  {
    id: 6,
    name: 'Аспирин кардио таблетки 100мг №28',
    description: 'Кардиопротективное средство',
    price: 167,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    category: 'таблетки'
  },
  {
    id: 7,
    name: 'Називин спрей назальный 0.05% 10мл',
    description: 'Сосудосуживающий назальный спрей',
    price: 156,
    image: 'https://images.pexels.com/photos/3683099/pexels-photo-3683099.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    category: 'спреи'
  },
  {
    id: 8,
    name: 'Фестал таблетки №20',
    description: 'Ферментный препарат для улучшения пищеварения',
    price: 134,
    image: 'https://images.pexels.com/photos/3683040/pexels-photo-3683040.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    category: 'таблетки'
  }
];

// Simulate database query with delay
export const searchProducts = async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300); // Simulate API delay
  });
};