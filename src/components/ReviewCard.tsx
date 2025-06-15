import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import Rating from './Rating';
import { Review } from '../context/ReviewContext';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <BlurView intensity={20} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>{review.userName}</Text>
        <Text style={styles.date}>{formatDate(review.date)}</Text>
      </View>
      <Rating rating={review.rating} size={16} readonly />
      <Text style={styles.comment}>{review.comment}</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  date: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.7,
  },
  comment: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
    lineHeight: 20,
  },
}); 