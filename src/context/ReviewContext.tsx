import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Coffee } from '../data/coffees';

export interface Review {
  id: string;
  coffeeId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
  getCoffeeReviews: (coffeeId: string) => Review[];
  getAverageRating: (coffeeId: string) => number;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const storedReviews = await AsyncStorage.getItem('reviews');
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
    }
  };

  const saveReviews = async (newReviews: Review[]) => {
    try {
      await AsyncStorage.setItem('reviews', JSON.stringify(newReviews));
    } catch (error) {
      console.error('Error saving reviews:', error);
    }
  };

  const addReview = (review: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    const newReviews = [...reviews, newReview];
    setReviews(newReviews);
    saveReviews(newReviews);
  };

  const getCoffeeReviews = (coffeeId: string) => {
    return reviews.filter((review) => review.coffeeId === coffeeId);
  };

  const getAverageRating = (coffeeId: string) => {
    const coffeeReviews = getCoffeeReviews(coffeeId);
    if (coffeeReviews.length === 0) return 0;
    const sum = coffeeReviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / coffeeReviews.length;
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        addReview,
        getCoffeeReviews,
        getAverageRating,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewProvider');
  }
  return context;
} 