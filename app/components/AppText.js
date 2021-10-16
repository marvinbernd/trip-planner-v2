import React from "react";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";

import defaultStyles from "../config/styles";

const AppText = ({ children, style, weight = "normal", ...otherProps }) => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_800ExtraBold,
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
          fontFamily:
            weight === "bold" ? "Nunito_800ExtraBold" : "Nunito_400Regular",
        },
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
