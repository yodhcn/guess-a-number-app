import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "black",
    // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.6,
    // Android
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});
