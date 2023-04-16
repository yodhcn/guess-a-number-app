import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

export default function Header(props) {
  return (
    <View
      style={{
        ...styles.haderBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  haderBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Platform.OS == "android" ? Colors.primary : "white",
  },
  title: {
    color: Colors.primary,
  },
});
