import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';

interface FilterChipsProps {
  filters: string[];
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
}

export default function FilterChips({
  filters,
  selectedFilter,
  onSelectFilter,
}: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {filters.map((filter) => (
        <Pressable
          key={filter}
          onPress={() => onSelectFilter(filter)}
          style={[
            styles.chip,
            selectedFilter === filter && styles.selectedChip,
          ]}
        >
          <Text
            style={[
              styles.chipText,
              selectedFilter === filter && styles.selectedChipText,
            ]}
          >
            {filter}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  selectedChip: {
    backgroundColor: '#fff',
  },
  chipText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedChipText: {
    color: '#25292e',
  },
}); 