import React from "react";
import { FlatList, View } from "react-native";
import { TripsContext } from "../contexts/TripsContext";
import TripItem from "./TripItem";

const TripsList = () => {
  return (
    <TripsContext.Consumer>
      {({ trips }) => (
        <FlatList
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <TripItem item={item} />}
          data={trips}
        />
      )}
    </TripsContext.Consumer>
  );
};

export default TripsList;
