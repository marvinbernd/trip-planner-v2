import React from "react";
import { StyleSheet } from "react-native";
import { TripsProvider } from "./app/contexts/TripsContext";
import TripsScreen from "./app/screens/TripsScreen";

export default function App() {
  return (
    <TripsProvider>
      <TripsScreen />
    </TripsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
