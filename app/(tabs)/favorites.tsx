import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import CoffeeCard from '@/src/components/CoffeeCard';
import { useFavorites } from '@/src/context/FavoriteContext';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <BlurView intensity={20} style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
      </BlurView>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {favorites.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="heart-outline" size={64} color="#fff" />
            <Text style={styles.emptyText}>No favorites yet</Text>
            <Text style={styles.emptySubtext}>
              Add your favorite coffees by tapping the heart icon
            </Text>
          </View>
        ) : (
          favorites.map((coffee) => (
            <Link
              key={coffee.id}
              href={`/detail?id=${coffee.id}`}
              asChild
            >
              <Pressable>
                <CoffeeCard coffee={coffee} />
              </Pressable>
            </Link>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.7,
    textAlign: 'center',
  },
}); 