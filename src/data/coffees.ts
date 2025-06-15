import { Coffee } from '../types/cofee';

export const coffees: Coffee[] = [
  {
    id: '1',
    name: 'Cappuccino',
    type: 'Hot',
    price: 4.50,
    rating: 4.8,
    reviews: 230,
    description: 'Espresso with steamed milk and foam',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60',
    sizes: {
      small: 3.50,
      medium: 4.50,
      large: 5.50
    },
    extras: [
      { name: 'Extra Shot', price: 1.00 },
      { name: 'Caramel Syrup', price: 0.50 },
      { name: 'Vanilla Syrup', price: 0.50 }
    ]
  },
  {
    id: '2',
    name: 'Iced Latte',
    type: 'Cold',
    price: 4.00,
    rating: 4.6,
    reviews: 180,
    description: 'Espresso with cold milk and ice',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60',
    sizes: {
      small: 3.00,
      medium: 4.00,
      large: 5.00
    },
    extras: [
      { name: 'Extra Shot', price: 1.00 },
      { name: 'Caramel Syrup', price: 0.50 },
      { name: 'Vanilla Syrup', price: 0.50 }
    ]
  },
  {
    id: '3',
    name: 'Espresso',
    type: 'Espresso',
    price: 3.00,
    rating: 4.9,
    reviews: 150,
    description: 'Strong coffee served in a small cup',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60',
    sizes: {
      small: 3.00,
      medium: 4.00,
      large: 5.00
    },
    extras: [
      { name: 'Extra Shot', price: 1.00 },
      { name: 'Caramel Syrup', price: 0.50 },
      { name: 'Vanilla Syrup', price: 0.50 }
    ]
  },
  {
    id: '4',
    name: 'Caramel Latte',
    type: 'Latte',
    price: 5.00,
    rating: 4.7,
    reviews: 200,
    description: 'Espresso with steamed milk and caramel syrup',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60',
    sizes: {
      small: 4.00,
      medium: 5.00,
      large: 6.00
    },
    extras: [
      { name: 'Extra Shot', price: 1.00 },
      { name: 'Caramel Syrup', price: 0.50 },
      { name: 'Vanilla Syrup', price: 0.50 }
    ]
  },
  {
    id: '5',
    name: 'Mocha',
    type: 'Hot',
    price: 5.50,
    rating: 4.7,
    reviews: 190,
    description: 'Espresso with chocolate and steamed milk',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60',
    sizes: {
      small: 4.50,
      medium: 5.50,
      large: 6.50
    },
    extras: [
      { name: 'Extra Shot', price: 1.00 },
      { name: 'Whipped Cream', price: 0.50 },
      { name: 'Chocolate Drizzle', price: 0.50 }
    ]
  },
  {
    id: '6',
    name: 'Cold Brew',
    type: 'Cold',
    price: 4.50,
    rating: 4.8,
    reviews: 160,
    description: 'Slow-steeped coffee served cold',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60',
    sizes: {
      small: 3.50,
      medium: 4.50,
      large: 5.50
    },
    extras: [
      { name: 'Extra Shot', price: 1.00 },
      { name: 'Milk', price: 0.50 },
      { name: 'Simple Syrup', price: 0.50 }
    ]
  },
  {
    id: '7',
    name: 'Flat White',
    type: 'Hot',
    price: 4.75,
    rating: 4.9,
    reviews: 210,
    description: 'Espresso with velvety steamed milk',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60',
    sizes: {
      small: 3.75,
      medium: 4.75,
      large: 5.75
    },
    extras: [
      { name: 'Extra Shot', price: 1.00 },
      { name: 'Caramel Syrup', price: 0.50 },
      { name: 'Vanilla Syrup', price: 0.50 }
    ]
  },
  {
    id: '8',
    name: 'Frappuccino',
    type: 'Cold',
    price: 5.50,
    rating: 4.6,
    reviews: 180,
    description: 'Blended coffee drink with ice and toppings',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60',
    sizes: {
      small: 4.50,
      medium: 5.50,
      large: 6.50
    },
    extras: [
      { name: 'Whipped Cream', price: 0.50 },
      { name: 'Caramel Drizzle', price: 0.50 },
      { name: 'Chocolate Drizzle', price: 0.50 }
    ]
  }
]; 