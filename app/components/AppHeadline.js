import React from "react";
import {
  useFonts,
  DMSerifDisplay_400Regular,
} from "@expo-google-fonts/dm-serif-display";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";

import defaultStyles from "../config/styles";

const AppHeadline = ({ children, style, ...otherProps }) => {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text
      style={[
        defaultStyles.text,
        style,
        {
          fontFamily: "DMSerifDisplay_400Regular",
        },
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppHeadline;
