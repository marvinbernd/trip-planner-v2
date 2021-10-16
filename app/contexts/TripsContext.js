import React, { useEffect, useState } from "react";
import { defaultTrips } from "../services/defaultTrips";

export const TripsContext = React.createContext();

export const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [filter, setFilter] = useState([
    {
      label: "Upcoming",
      active: true,
    },
    {
      label: "Past",
    },
    {
      label: "Drafts",
    },
  ]);

  useEffect(() => {
    setTrips(defaultTrips);
  }, []);

  return (
    <TripsContext.Provider value={{ trips, filter }}>
      {children}
    </TripsContext.Provider>
  );
};
