import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from 'expo-router';
import { coffeeData } from '../src/data/coffeeData';
import { useCart } from '../src/context/CartContext';
import { useAuth } from '../src/context/AuthContext';
import { useReviews } from '../src/context/ReviewContext';
import Rating from '../src/components/Rating';
import ReviewCard from '../src/components/ReviewCard';
import Toast from '../src/components/Toast';

export default function Detail() {
  const { id } = useLocalSearchParams();
  const coffee = coffeeData.find((c) => c.id === id);
  const { addItem } = useCart();
  const { user } = useAuth();
  const { reviews, addReview, getCoffeeReviews, getAverageRating } = useReviews();
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [selectedExtras, setSelectedExtras] = useState<{ name: string; price: number }[]>([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  if (!coffee) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Coffee not found</Text>
      </View>
    );
  }

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const handleAddToCart = () => {
    if (!user) {
      router.push('/login' as any);
      return;
    }

    if (!selectedSize) {
      showToast('Please select a size');
      return;
    }

    addItem({
      coffee,
      quantity: 1,
      size: selectedSize,
      extras: selectedExtras,
      price: coffee.sizes[selectedSize],
    });

    showToast('Added to cart');
    router.back();
  };

  const handleAddReview = () => {
    if (!user) {
      router.push('/login' as any);
      return;
    }

    if (rating === 0) {
      showToast('Please select a rating');
      return;
    }

    if (!comment.trim()) {
      showToast('Please write a comment');
      return;
    }

    addReview({
      coffeeId: coffee.id,
      userId: user.id,
      userName: user.name,
      rating,
      comment: comment.trim(),
    });

    setRating(0);
    setComment('');
    showToast('Review added successfully');
  };

  const coffeeReviews = getCoffeeReviews(coffee.id);
  const averageRating = getAverageRating(coffee.id);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image 
            source={coffee.image} 
            style={styles.image} 
            resizeMode="contain"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{coffee.name}</Text>
          <Text style={styles.description}>{coffee.description}</Text>

          <View style={styles.ratingContainer}>
            <Rating rating={averageRating} size={24} readonly />
            <Text style={styles.ratingText}>
              {averageRating.toFixed(1)} ({coffeeReviews.length} reviews)
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.sizeContainer}>
              {Object.entries(coffee.sizes).map(([size, price]) => (
                <Pressable
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.selectedSizeButton,
                  ]}
                  onPress={() => setSelectedSize(size as 'small' | 'medium' | 'large')}
                >
                  <Text
                    style={[
                      styles.sizeButtonText,
                      selectedSize === size && styles.selectedSizeButtonText,
                    ]}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </Text>
                  <Text
                    style={[
                      styles.sizePrice,
                      selectedSize === size && styles.selectedSizeButtonText,
                    ]}
                  >
                    ${price.toFixed(2)}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Extras</Text>
            <View style={styles.extrasContainer}>
              {coffee.extras.map((extra) => (
                <Pressable
                  key={extra.name}
                  style={[
                    styles.extraButton,
                    selectedExtras.some((e) => e.name === extra.name) &&
                      styles.selectedExtraButton,
                  ]}
                  onPress={() => {
                    setSelectedExtras((current) =>
                      current.some((e) => e.name === extra.name)
                        ? current.filter((e) => e.name !== extra.name)
                        : [...current, extra]
                    );
                  }}
                >
                  <Text
                    style={[
                      styles.extraButtonText,
                      selectedExtras.some((e) => e.name === extra.name) &&
                        styles.selectedExtraButtonText,
                    ]}
                  >
                    {extra.name}
                  </Text>
                  <Text
                    style={[
                      styles.extraPrice,
                      selectedExtras.some((e) => e.name === extra.name) &&
                        styles.selectedExtraButtonText,
                    ]}
                  >
                    +${extra.price.toFixed(2)}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            {user && (
              <View style={styles.addReviewContainer}>
                <Rating rating={rating} onRatingChange={setRating} />
                <TextInput
                  style={styles.commentInput}
                  placeholder="Write your review..."
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  value={comment}
                  onChangeText={setComment}
                  multiline
                />
                <Pressable
                  style={styles.addReviewButton}
                  onPress={handleAddReview}
                >
                  <Text style={styles.addReviewButtonText}>Add Review</Text>
                </Pressable>
              </View>
            )}
            {coffeeReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </View>
        </View>
      </ScrollView>

      <BlurView intensity={20} style={styles.footer}>
        <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </Pressable>
      </BlurView>

      <Toast
        visible={toastVisible}
        message={toastMessage}
        onHide={() => setToastVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.7,
    marginBottom: 16,
    lineHeight: 24,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  ratingText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  sizeButton: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
  selectedSizeButton: {
    backgroundColor: '#fff',
  },
  sizeButtonText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  selectedSizeButtonText: {
    color: '#25292e',
  },
  sizePrice: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.7,
  },
  extrasContainer: {
    gap: 8,
  },
  extraButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
  },
  selectedExtraButton: {
    backgroundColor: '#fff',
  },
  extraButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  selectedExtraButtonText: {
    color: '#25292e',
  },
  extraPrice: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.7,
  },
  addReviewContainer: {
    marginBottom: 16,
  },
  commentInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 12,
    color: '#fff',
    marginTop: 12,
    marginBottom: 12,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  addReviewButton: {
    backgroundColor: '#4caf50',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  addReviewButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  addToCartButton: {
    backgroundColor: '#4caf50',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  addToCartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 32,
  },
});
