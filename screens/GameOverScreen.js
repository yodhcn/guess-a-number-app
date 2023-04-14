import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
