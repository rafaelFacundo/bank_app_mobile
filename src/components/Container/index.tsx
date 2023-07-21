import React from "react";
import { View } from "react-native";

interface Props {
  children?: React.ReactNode;
  background?: string;
}

const Container: React.FC<Props> = ({ children, background }) => {
  return (
    <View
      style={{ width: "100%", height: "100%", backgroundColor: background }}
    >
      {children}
    </View>
  );
};

export default Container;
