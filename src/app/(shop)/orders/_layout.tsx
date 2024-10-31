import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[slug]"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default OrdersLayout;
