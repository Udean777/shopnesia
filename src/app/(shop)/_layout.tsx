import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import color from "@/constants/color";
import { useAuth } from "@/src/providers/auth_provider";

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => {
  return <FontAwesome size={24} {...props} style={{ color: color.PRIMARY }} />;
};

const TabsLayout = () => {
  const { session, mounting } = useAuth();

  if (mounting) return <ActivityIndicator size={"large"} />;
  if (!session) return <Redirect href={"/auth"} />;

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: color.PRIMARY,
          tabBarInactiveTintColor: "#333",
          tabBarLabelStyle: {
            fontSize: 16,
          },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Shop",
            tabBarIcon: (props) => (
              <TabBarIcon {...props} name="shopping-cart" />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            tabBarIcon: (props) => <TabBarIcon {...props} name="book" />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
