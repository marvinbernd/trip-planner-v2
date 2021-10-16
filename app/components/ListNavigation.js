import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";

import defaultStyles from "../config/styles";

function ListNavigation({ items, style, handlePress }) {
  return (
    <View style={[style, styles.navigation]}>
      {items.map((item, index) => (
        <View style={[styles.navItem]} key={index}>
          <TouchableHighlight
            style={[styles.button, item.active && styles.buttonActive]}
          >
            <AppText style={[styles.label]}>{item.label}</AppText>
          </TouchableHighlight>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    paddingVertical: 10,
    marginLeft: -10,
  },
  navItem: {
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: defaultStyles.colors.primaryTransparent,
    borderColor: "transparent",
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonActive: {
    backgroundColor: defaultStyles.colors.primary,
  },
  label: {
    color: defaultStyles.colors.white,
  },
  itemWrapper: {
    paddingVertical: 8,
  },
});

export default ListNavigation;
