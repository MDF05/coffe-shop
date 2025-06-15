import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { Coffee } from '../types/coffee';
import { useFavorites } from '../context/FavoriteContext';

interface CoffeeCardProps {
  coffee: Coffee;
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const favorite = isFavorite(coffee.id);

  const handleFavoritePress = () => {
    if (favorite) {
      removeFromFavorites(coffee.id);
    } else {
      addToFavorites(coffee);
    }
  };

  return (
    <BlurView intensity={20} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={coffee.image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{coffee.name}</Text>
          <Pressable onPress={handleFavoritePress} style={styles.favoriteButton}>
            <Ionicons
              name={favorite ? 'heart' : 'heart-outline'}
              size={24}
              color={favorite ? '#ff6b6b' : '#fff'}
            />
          </Pressable>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {coffee.description}
        </Text>
        <Text style={styles.price}>${coffee.price.toFixed(2)}</Text>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  favoriteButton: {
    padding: 4,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.7,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
}); 