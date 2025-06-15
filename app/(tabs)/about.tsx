import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Linking } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function About() {
  const openWebsite = () => {
    Linking.openURL('https://coffeeshop.com');
  };

  const openInstagram = () => {
    Linking.openURL('https://instagram.com/coffeeshop');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085' }}
            style={styles.heroImage}
          />
          <BlurView intensity={20} style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Our Story</Text>
            <Text style={styles.heroSubtitle}>Brewing happiness since 2020</Text>
          </BlurView>
        </View>

        {/* Project Overview Section */}
        <BlurView intensity={20} style={styles.section}>
          <Text style={styles.sectionTitle}>About This App</Text>
          <Text style={styles.sectionText}>
            Welcome to our Coffee Shop Mobile App! This app is built using React Native and Expo, designed to provide a seamless coffee ordering experience. Here's what you can do with our app:
          </Text>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Ionicons name="cafe-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Browse our extensive coffee menu</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="cart-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Easy ordering and checkout process</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="heart-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Save your favorite drinks</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="star-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Rate and review your orders</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="time-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Track your order history</Text>
            </View>
          </View>
        </BlurView>

        {/* Mission Section */}
        <BlurView intensity={20} style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            To provide the perfect cup of coffee while creating a warm and welcoming environment for our community. We believe in sustainable practices and supporting local coffee farmers.
          </Text>
        </BlurView>

        {/* Values Section */}
        <View style={styles.valuesContainer}>
          <Text style={styles.sectionTitle}>Our Values</Text>
          <View style={styles.valuesGrid}>
            <View style={styles.valueItem}>
              <Ionicons name="leaf-outline" size={32} color="#fff" />
              <Text style={styles.valueTitle}>Sustainability</Text>
              <Text style={styles.valueText}>Eco-friendly practices and sustainable sourcing</Text>
            </View>
            <View style={styles.valueItem}>
              <Ionicons name="heart-outline" size={32} color="#fff" />
              <Text style={styles.valueTitle}>Quality</Text>
              <Text style={styles.valueText}>Premium beans and expert brewing</Text>
            </View>
            <View style={styles.valueItem}>
              <Ionicons name="people-outline" size={32} color="#fff" />
              <Text style={styles.valueTitle}>Community</Text>
              <Text style={styles.valueText}>Building lasting relationships</Text>
            </View>
            <View style={styles.valueItem}>
              <Ionicons name="star-outline" size={32} color="#fff" />
              <Text style={styles.valueTitle}>Excellence</Text>
              <Text style={styles.valueText}>Commitment to the perfect cup</Text>
            </View>
          </View>
        </View>

        {/* Team Section */}
        <BlurView intensity={20} style={styles.section}>
          <Text style={styles.sectionTitle}>Our Team</Text>
          <View style={styles.teamContainer}>
            <View style={styles.teamMember}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' }}
                style={styles.teamMemberImage}
              />
              <Text style={styles.teamMemberName}>John Doe</Text>
              <Text style={styles.teamMemberRole}>Founder & CEO</Text>
            </View>
            <View style={styles.teamMember}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
                style={styles.teamMemberImage}
              />
              <Text style={styles.teamMemberName}>Jane Smith</Text>
              <Text style={styles.teamMemberRole}>Head Barista</Text>
            </View>
          </View>
        </BlurView>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Ionicons name="location-outline" size={24} color="#fff" />
              <Text style={styles.contactText}>123 Coffee Street, Jakarta</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="mail-outline" size={24} color="#fff" />
              <Text style={styles.contactText}>hello@coffeeshop.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="call-outline" size={24} color="#fff" />
              <Text style={styles.contactText}>+62 123 4567 890</Text>
            </View>
          </View>
          
          <View style={styles.socialLinks}>
            <Pressable style={styles.socialButton} onPress={openWebsite}>
              <Ionicons name="globe-outline" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.socialButton} onPress={openInstagram}>
              <Ionicons name="logo-instagram" size={24} color="#fff" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    margin: 16,
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  featureList: {
    marginTop: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 12,
  },
  valuesContainer: {
    padding: 16,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  valueItem: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
    marginBottom: 8,
  },
  valueText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    textAlign: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  teamMember: {
    alignItems: 'center',
    width: '45%',
  },
  teamMemberImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  teamMemberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  teamMemberRole: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  contactSection: {
    padding: 16,
    marginBottom: 32,
  },
  contactInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 12,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    gap: 16,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 