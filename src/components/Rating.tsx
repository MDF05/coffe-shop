import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RatingProps {
  rating: number;
  size?: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export default function Rating({
  rating,
  size = 20,
  onRatingChange,
  readonly = false,
}: RatingProps) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      {stars.map((star) => (
        <Pressable
          key={star}
          onPress={() => !readonly && onRatingChange?.(star)}
          disabled={readonly}
        >
          <Ionicons
            name={star <= rating ? 'star' : 'star-outline'}
            size={size}
            color={star <= rating ? '#ffd700' : '#fff'}
            style={styles.star}
          />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 4,
  },
}); 