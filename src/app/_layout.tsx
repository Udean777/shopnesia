import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

const RootLayout = () => {
  return (
    <ToastProvider>
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
          options={{ headerShown: true, headerTitle: "Auth" }}
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
    </ToastProvider>
  );
};

export default RootLayout;
