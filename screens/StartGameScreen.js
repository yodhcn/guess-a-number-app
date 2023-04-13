import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

export default function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState("");

  function unmberInputHandler(inputText) {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputConatiner}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={unmberInputHandler}
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
    </TouchableWithoutFeedback>
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
