import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ProductLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: true,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color={"#000"} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
};

export default ProductLayout;
