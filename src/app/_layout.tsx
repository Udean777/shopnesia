import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(shop)" options={{ headerShown: false }} />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, headerTitle: "Categories" }}
      />
      <Stack.Screen
        name="products"
        options={{ headerShown: true, headerTitle: "Products" }}
      />
      <Stack.Screen
        name="auth"
        options={{ headerShown: true, headerTitle: "Auth" }}
      />
      <Stack.Screen
        name="cart"
        options={{ headerShown: true, headerTitle: "Cart" }}
      />
    </Stack>
  );
};

export default RootLayout;
