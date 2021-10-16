import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Container from "../components/Container";
import Screen from "../components/Screen";
import TripsList from "../components/TripsList";
import TripsListFilter from "../components/TripsListFilter";

const TripsScreen = () => {
  return (
    <Screen>
      <Container style={styles.navigation}>
        <View style={styles.header}>
          <Text>Hello, Marvin!</Text>
          <Button title="Add" onPress={() => {}}></Button>
        </View>
        <Text>Let's start your vacation!</Text>
        <TripsListFilter />
      </Container>
      <Container>
        <TripsList />
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
  navigation: {
    borderBottomStartRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#ccc",
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});

export default TripsScreen;
