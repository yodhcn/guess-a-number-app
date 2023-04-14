import React from "react";
import { Text, StyleSheet } from "react-native";

export default function TitleText(props) {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
