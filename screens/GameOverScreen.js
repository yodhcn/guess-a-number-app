import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

export default function StartGameScreen(props) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            // source={require("../assets/images/success.png")}
            source={{
              uri: "https://images.anime-pictures.net/d2b/d2bc272bf077af6ab4a554d8b5b767bc.jpg",
            }}
          />
        </View>
        <View style={styles.resultTextContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highLight}>{props.roundNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highLight}>{props.userNumber}</Text>.
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultTextContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  highLight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});
