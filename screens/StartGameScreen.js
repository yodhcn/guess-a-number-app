import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

export default function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputConatiner}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonConatiner}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.primary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.accent} />
          </View>
        </View>
      </Card>
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
  },
  buttonConatiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});
