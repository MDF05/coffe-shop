import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Linking } from 'react-native';
import { useAuth } from '@/src/context/AuthContext';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Profile() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const openGithub = () => {
    Linking.openURL('https://github.com/yourusername');
  };

  const openLinkedIn = () => {
    Linking.openURL('https://linkedin.com/in/yourusername');
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>
        
        <ScrollView style={styles.scrollView}>
          <BlurView intensity={20} style={styles.notLoggedInCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d' }}
              style={styles.notLoggedInImage}
            />
            <Text style={styles.notLoggedInTitle}>Welcome to Coffee Shop</Text>
            <Text style={styles.notLoggedInText}>
              Sign in to access your profile, track orders, and save your favorite coffees.
            </Text>
            <Pressable 
              style={styles.loginButton}
              onPress={() => router.push('/(auth)/login')}
            >
              <Text style={styles.loginButtonText}>Sign In</Text>
            </Pressable>
            <Pressable 
              style={styles.registerButton}
              onPress={() => router.push('/(auth)/register')}
            >
              <Text style={styles.registerButtonText}>Create Account</Text>
            </Pressable>
          </BlurView>

          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>Features you'll get:</Text>
            <View style={styles.featureItem}>
              <Ionicons name="heart-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Save your favorite coffees</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="time-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Track your order history</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="star-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Rate and review coffees</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="card-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Faster checkout process</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <BlurView intensity={20} style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {user.name.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          
          {/* About Me Section */}
          <View style={styles.aboutMeContainer}>
            <Text style={styles.aboutMeTitle}>About Me</Text>
            <View style={styles.aboutMeContent}>
              <View style={styles.aboutMeItem}>
                <Ionicons name="location-outline" size={20} color="#fff" />
                <Text style={styles.aboutMeText}>Jakarta, Indonesia</Text>
              </View>
              <View style={styles.aboutMeItem}>
                <Ionicons name="calendar-outline" size={20} color="#fff" />
                <Text style={styles.aboutMeText}>Joined March 2024</Text>
              </View>
              <View style={styles.aboutMeItem}>
                <Ionicons name="cafe-outline" size={20} color="#fff" />
                <Text style={styles.aboutMeText}>Coffee Enthusiast</Text>
              </View>
            </View>
          </View>

          {/* Social Links */}
          <View style={styles.socialLinksContainer}>
            <Pressable style={styles.socialButton} onPress={openGithub}>
              <Ionicons name="logo-github" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.socialButton} onPress={openLinkedIn}>
              <Ionicons name="logo-linkedin" size={24} color="#fff" />
            </Pressable>
          </View>
        </BlurView>

        <View style={styles.menuContainer}>
          <Pressable style={styles.menuItem}>
            <Ionicons name="person-outline" size={24} color="#fff" />
            <Text style={styles.menuText}>Edit Profile</Text>
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </Pressable>

          <Pressable style={styles.menuItem}>
            <Ionicons name="time-outline" size={24} color="#fff" />
            <Text style={styles.menuText}>Order History</Text>
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </Pressable>

          <Pressable style={styles.menuItem}>
            <Ionicons name="heart-outline" size={24} color="#fff" />
            <Text style={styles.menuText}>Favorites</Text>
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </Pressable>

          <Pressable style={styles.menuItem}>
            <Ionicons name="settings-outline" size={24} color="#fff" />
            <Text style={styles.menuText}>Settings</Text>
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </Pressable>
        </View>

        <Pressable style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
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
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  notLoggedInCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  notLoggedInImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  notLoggedInTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  notLoggedInText: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: '#4a90e2',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4a90e2',
  },
  registerButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 12,
  },
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#25292e',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.7,
    marginBottom: 20,
  },
  aboutMeContainer: {
    width: '100%',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  aboutMeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  aboutMeContent: {
    width: '100%',
  },
  aboutMeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  aboutMeText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 12,
  },
  socialLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 16,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
  },
  signOutButton: {
    backgroundColor: '#ff6b6b',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 