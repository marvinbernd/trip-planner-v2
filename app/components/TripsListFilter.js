import React from "react";
import { View, Text } from "react-native";
import { TripsContext } from "../contexts/TripsContext";
import ListNavigation from "./ListNavigation";

const TripsListFilter = () => {
  return (
    <TripsContext.Consumer>
      {({ filter }) => <ListNavigation items={filter} />}
    </TripsContext.Consumer>
  );
};

export default TripsListFilter;
