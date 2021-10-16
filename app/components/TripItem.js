import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AppHeadline from "./AppHeadline";
import AppText from "./AppText";

import defaultStyles from "../config/styles";

const TripItem = ({ item: { title, image, startString, endString } }) => {
  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.overlay}>
        <AppHeadline weight="bold" style={styles.title}>
          {title}
        </AppHeadline>
        <AppText style={styles.subtitle}>
          {startString} - {endString}
        </AppText>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 140,
    borderRadius: 25,
    overflow: "hidden",
    marginVertical: 10,
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    color: defaultStyles.colors.white,
    fontSize: 24,
  },
  subtitle: {
    color: defaultStyles.colors.white,
    opacity: 0.8,
  },
});

export default TripItem;
