import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

export default function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <Image source={require("../assets/images/success.png")} />
      <BodyText>Number of rounds: {props.roundNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
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
