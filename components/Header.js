import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.hader}>
      <Text style={styles.haderTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hader: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
  },
  haderTitle: {
    color: "black",
    fontSize: 18,
  },
});
