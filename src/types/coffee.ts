import { ImageSourcePropType } from 'react-native';

export interface Coffee {
  id: string;
  name: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  image: ImageSourcePropType;
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
  extras: {
    name: string;
    price: number;
  }[];
} 