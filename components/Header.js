import React from "react";
import { View, StyleSheet } from "react-native";

import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

export default function Header(props) {
  return (
    <View style={styles.hader}>
      <TitleText>{props.title}</TitleText>
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
});
