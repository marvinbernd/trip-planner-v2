import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: object;
};

const Container = ({ children, style }: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default Container;
