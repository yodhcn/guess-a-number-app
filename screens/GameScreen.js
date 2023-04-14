import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

function generateBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateBetween(min, max, exclude);
  }
  return rndNum;
}

export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonConatiner}>
        <Button title="Lower" />
        <Button title="Greater" />
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
  buttonConatiner: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
