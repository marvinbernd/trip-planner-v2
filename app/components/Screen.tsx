import React from "react";
import { SafeAreaView, View } from "react-native";

type Props = {
  children: JSX.Element[];
};

const Screen = ({ children }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
