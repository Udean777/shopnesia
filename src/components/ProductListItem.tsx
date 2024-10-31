import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "@/assets/types/product";
import { Link } from "expo-router";

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={`/products/${product.slug}`}>
      <Pressable style={styles.item}>
        <View style={styles.itemImgContainer}>
          <Image source={product.heroImage} style={styles.itemImg} />
        </View>

        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{product.title}</Text>
          <Text style={styles.itemPrice}>{product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "48%",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemImgContainer: {
    borderRadius: 10,
    width: "100%",
    height: 150,
  },
  itemImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  itemTextContainer: {
    padding: 8,
    alignItems: "flex-start",
    gap: 4,
  },
  itemTitle: {
    fontSize: 18,
    color: "#888",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
