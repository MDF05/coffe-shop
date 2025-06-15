import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';

export function OrderScreen() {
  const { orders } = useOrders();
  const { user } = useAuth();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please login to view your orders</Text>
      </View>
    );
  }

  if (orders.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No orders yet</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {orders.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <Text style={styles.orderTitle}>Order #{order.id}</Text>
          <Text style={styles.orderDate}>{new Date(order.date).toLocaleDateString()}</Text>
          <Text style={styles.orderStatus}>Status: {order.status}</Text>
          <Text style={styles.orderTotal}>Total: ${order.total.toFixed(2)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  orderCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  orderTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderDate: {
    color: '#fff',
    opacity: 0.7,
    marginBottom: 4,
  },
  orderStatus: {
    color: '#fff',
    marginBottom: 4,
  },
  orderTotal: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 