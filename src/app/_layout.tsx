import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth_provider";

const RootLayout = () => {
  return (
    <ToastProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(shop)" options={{ headerShown: false }} />
          <Stack.Screen
            name="categories"
            options={{ headerShown: false, headerTitle: "Categories" }}
          />
          <Stack.Screen
            name="products"
            options={{ headerShown: false, headerTitle: "Products" }}
          />
          <Stack.Screen
            name="auth"
            options={{ headerShown: false, headerTitle: "Auth" }}
          />
          <Stack.Screen
            name="cart"
            options={{
              headerShown: true,
              headerTitle: "Your Cart",
              headerTitleAlign: "center",
              presentation: "modal",
            }}
          />
        </Stack>
      </AuthProvider>
    </ToastProvider>
  );
};

export default RootLayout;
