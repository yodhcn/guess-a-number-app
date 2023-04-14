import React from "react";
import { Text, StyleSheet } from "react-native";

export default function BodyText(props) {
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});
