import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Container from "../components/Container";
import Screen from "../components/Screen";

const TripsScreen = () => {
  return (
    <Screen>
      <Container style={styles.header}>
        <Text>Hello, Marvin!</Text>
        <Button title="Add" onPress={() => {}}></Button>
      </Container>
      <Container>
        <Text>Let's start your vacation!</Text>
      </Container>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TripsScreen;
