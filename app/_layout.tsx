import { Stack } from 'expo-router';
import { AuthProvider } from '@/src/context/AuthContext';
import { CartProvider } from '@/src/context/CartContext';
import { FavoriteProvider } from '@/src/context/FavoriteContext';
import { OrderProvider } from '@/src/context/OrderContext';
import { ReviewProvider } from '@/src/context/ReviewContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoriteProvider>
          <OrderProvider>
            <ReviewProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen
                  name="(tabs)"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="(auth)"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="detail"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen name="+not-found" />
              </Stack>
            </ReviewProvider>
          </OrderProvider>
        </FavoriteProvider>
      </CartProvider>
    </AuthProvider>
  );
}
