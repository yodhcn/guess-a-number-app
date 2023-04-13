import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

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
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  haderTitle: {
    color: "black",
    fontSize: 18,
  },
});
