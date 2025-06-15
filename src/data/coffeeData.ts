import { Coffee } from '../types/coffee';

export const coffeeData: Coffee[] = [
  {
    id: '1',
    name: 'Espresso',
    type: 'Hot',
    price: 25000,
    image: require('../assets/images/Espresso.png'),
    description: 'Kopi espresso klasik dengan rasa yang kuat dan kaya.',
    rating: 4.8,
    reviews: 150,
    sizes: {
      small: 20000,
      medium: 25000,
      large: 30000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Caramel', price: 3000 },
      { name: 'Vanilla', price: 3000 }
    ]
  },
  {
    id: '2',
    name: 'Cappuccino',
    type: 'Hot',
    price: 30000,
    image: require('../assets/images/Cappucino.png'),
    description: 'Espresso dengan susu steamed dan busa susu yang lembut.',
    rating: 4.7,
    reviews: 230,
    sizes: {
      small: 25000,
      medium: 30000,
      large: 35000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Caramel', price: 3000 },
      { name: 'Vanilla', price: 3000 }
    ]
  },
  {
    id: '3',
    name: 'Iced Latte',
    type: 'Cold',
    price: 35000,
    image: require('../assets/images/Iced-latte.png'),
    description: 'Espresso dengan susu dingin dan es batu.',
    rating: 4.6,
    reviews: 180,
    sizes: {
      small: 30000,
      medium: 35000,
      large: 40000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Caramel', price: 3000 },
      { name: 'Vanilla', price: 3000 }
    ]
  },
  {
    id: '4',
    name: 'Mocha',
    type: 'Hot',
    price: 40000,
    image: require('../assets/images/Mocha.png'),
    description: 'Espresso dengan cokelat dan susu steamed.',
    rating: 4.9,
    reviews: 190,
    sizes: {
      small: 35000,
      medium: 40000,
      large: 45000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Caramel', price: 3000 },
      { name: 'Vanilla', price: 3000 }
    ]
  },
  {
    id: '5',
    name: 'Americano',
    type: 'Hot',
    price: 28000,
    image: require('../assets/images/Americano.png'),
    description: 'Espresso dengan air panas, memberikan rasa kopi yang ringan.',
    rating: 4.5,
    reviews: 120,
    sizes: {
      small: 23000,
      medium: 28000,
      large: 33000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Honey', price: 3000 },
      { name: 'Brown Sugar', price: 2000 }
    ]
  },
  {
    id: '6',
    name: 'Caramel Macchiato',
    type: 'Hot',
    price: 42000,
    image: require('../assets/images/Caramel-macchiato.png'),
    description: 'Espresso dengan susu steamed dan caramel yang manis.',
    rating: 4.8,
    reviews: 210,
    sizes: {
      small: 37000,
      medium: 42000,
      large: 47000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Extra Caramel', price: 3000 },
      { name: 'Whipped Cream', price: 3000 }
    ]
  },
  {
    id: '7',
    name: 'Iced Americano',
    type: 'Cold',
    price: 30000,
    image: require('../assets/images/Iced-Americano.png'),
    description: 'Espresso dengan air dingin dan es batu.',
    rating: 4.4,
    reviews: 95,
    sizes: {
      small: 25000,
      medium: 30000,
      large: 35000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Honey', price: 3000 },
      { name: 'Brown Sugar', price: 2000 }
    ]
  },
  {
    id: '8',
    name: 'Flat White',
    type: 'Hot',
    price: 35000,
    image: require('../assets/images/Flat-white.png'),
    description: 'Espresso dengan susu steamed yang halus dan busa tipis.',
    rating: 4.7,
    reviews: 160,
    sizes: {
      small: 30000,
      medium: 35000,
      large: 40000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Vanilla', price: 3000 },
      { name: 'Caramel', price: 3000 }
    ]
  },
  {
    id: '9',
    name: 'Cold Brew',
    type: 'Cold',
    price: 45000,
    image: require('../assets/images/Cold-brew.png'),
    description: 'Kopi yang diseduh dingin selama 24 jam untuk rasa yang halus.',
    rating: 4.9,
    reviews: 175,
    sizes: {
      small: 40000,
      medium: 45000,
      large: 50000
    },
    extras: [
      { name: 'Milk', price: 3000 },
      { name: 'Vanilla', price: 3000 },
      { name: 'Caramel', price: 3000 }
    ]
  },
  {
    id: '10',
    name: 'Affogato',
    type: 'Hot',
    price: 38000,
    image: require('../assets/images/Affogato.png'),
    description: 'Es krim vanilla yang disiram dengan espresso panas.',
    rating: 4.8,
    reviews: 140,
    sizes: {
      small: 33000,
      medium: 38000,
      large: 43000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Chocolate Sauce', price: 3000 },
      { name: 'Whipped Cream', price: 3000 }
    ]
  },
  {
    id: '11',
    name: 'Double Espresso',
    type: 'Hot',
    price: 35000,
    image: require('../assets/images/Double-espresso.png'),
    description: 'Dua shot espresso untuk rasa yang lebih kuat dan intens.',
    rating: 4.7,
    reviews: 130,
    sizes: {
      small: 30000,
      medium: 35000,
      large: 40000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Brown Sugar', price: 2000 },
      { name: 'Honey', price: 3000 }
    ]
  },
  {
    id: '12',
    name: 'Ristretto',
    type: 'Hot',
    price: 30000,
    image: require('../assets/images/Ristretto.png'),
    description: 'Espresso yang lebih pendek dan lebih pekat dari espresso biasa.',
    rating: 4.6,
    reviews: 95,
    sizes: {
      small: 25000,
      medium: 30000,
      large: 35000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Brown Sugar', price: 2000 },
      { name: 'Honey', price: 3000 }
    ]
  },
  {
    id: '13',
    name: 'Lungo',
    type: 'Hot',
    price: 32000,
    image: require('../assets/images/Lungo.png'),
    description: 'Espresso yang lebih panjang dengan ekstraksi yang lebih lama.',
    rating: 4.5,
    reviews: 85,
    sizes: {
      small: 27000,
      medium: 32000,
      large: 37000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Brown Sugar', price: 2000 },
      { name: 'Honey', price: 3000 }
    ]
  },
  {
    id: '14',
    name: 'Vanilla Latte',
    type: 'Hot',
    price: 38000,
    image: require('../assets/images/Vanilla-latte.png'),
    description: 'Espresso dengan susu steamed dan sirup vanilla yang manis.',
    rating: 4.8,
    reviews: 220,
    sizes: {
      small: 33000,
      medium: 38000,
      large: 43000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Extra Vanilla', price: 3000 },
      { name: 'Whipped Cream', price: 3000 }
    ]
  },
  {
    id: '15',
    name: 'Hazelnut Latte',
    type: 'Hot',
    price: 40000,
    image: require('../assets/images/Hazelnut-latte.png'),
    description: 'Espresso dengan susu steamed dan sirup hazelnut yang gurih.',
    rating: 4.7,
    reviews: 180,
    sizes: {
      small: 35000,
      medium: 40000,
      large: 45000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Extra Hazelnut', price: 3000 },
      { name: 'Whipped Cream', price: 3000 }
    ]
  },
  {
    id: '16',
    name: 'Iced Vanilla Latte',
    type: 'Cold',
    price: 40000,
    image: require('../assets/images/Iced-vanilla-latte.png'),
    description: 'Espresso dengan susu dingin, sirup vanilla, dan es batu.',
    rating: 4.8,
    reviews: 195,
    sizes: {
      small: 35000,
      medium: 40000,
      large: 45000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Extra Vanilla', price: 3000 },
      { name: 'Whipped Cream', price: 3000 }
    ]
  },
  {
    id: '17',
    name: 'Cinnamon Latte',
    type: 'Hot',
    price: 42000,
    image: require('../assets/images/Cinamon-latte.png'),
    description: 'Espresso dengan susu steamed dan bubuk kayu manis yang hangat.',
    rating: 4.6,
    reviews: 150,
    sizes: {
      small: 37000,
      medium: 42000,
      large: 47000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Extra Cinnamon', price: 3000 },
      { name: 'Whipped Cream', price: 3000 }
    ]
  },
  {
    id: '18',
    name: 'Pumpkin Spice Latte',
    type: 'Hot',
    price: 45000,
    image: require('../assets/images/Pumpkin-spice-latte.png'),
    description: 'Espresso dengan susu steamed dan bumbu labu yang khas.',
    rating: 4.9,
    reviews: 240,
    sizes: {
      small: 40000,
      medium: 45000,
      large: 50000
    },
    extras: [
      { name: 'Extra Shot', price: 5000 },
      { name: 'Extra Pumpkin Spice', price: 3000 },
      { name: 'Whipped Cream', price: 3000 }
    ]
  }
]; 