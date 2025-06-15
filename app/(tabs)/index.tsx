import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import CoffeeCard from '@/src/components/CoffeeCard';
import SearchBar from '@/src/components/SearchBar';
import FilterChips from '@/src/components/FilterChips';
import { coffeeData } from '@/src/data/coffeeData';
import { Coffee } from '@/src/types/coffee';

const filters = ['All', 'Hot', 'Cold', 'Espresso', 'Latte'];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredCoffees = useMemo(() => {
    return coffeeData.filter((coffee: Coffee) => {
      const matchesSearch = coffee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (coffee.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());
      
      let matchesFilter = true;
      if (selectedFilter === 'Hot' || selectedFilter === 'Cold') {
        matchesFilter = coffee.type === selectedFilter;
      } else if (selectedFilter === 'Espresso') {
        matchesFilter = coffee.name.toLowerCase().includes('espresso') || 
                       coffee.name.toLowerCase().includes('ristretto') ||
                       coffee.name.toLowerCase().includes('lungo');
      } else if (selectedFilter === 'Latte') {
        matchesFilter = coffee.name.toLowerCase().includes('latte');
      }

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <BlurView intensity={20} style={styles.header}>
        <Text style={styles.title}>Find your coffee</Text>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search coffee..."
        />
        <FilterChips
          filters={filters}
          selectedFilter={selectedFilter}
          onSelectFilter={setSelectedFilter}
        />
      </BlurView>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {filteredCoffees.map((coffee: Coffee) => (
          <Link
            key={coffee.id}
            href={`/detail?id=${coffee.id}`}
            asChild
          >
            <Pressable>
              <CoffeeCard coffee={coffee} />
            </Pressable>
          </Link>
        ))}
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
});
