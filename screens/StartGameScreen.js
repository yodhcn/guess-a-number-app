import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

export default function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputConatiner}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.buttonConatiner}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.primary} onPress={() => {}} />
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
  input: {
    width: 50,
    textAlign: "center",
  },
});
