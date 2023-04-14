import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
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
