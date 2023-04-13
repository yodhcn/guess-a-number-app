import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputConatiner}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonConatiner}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputConatiner: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
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
  buttonConatiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
