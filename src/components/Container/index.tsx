import React from "react";
import { View } from "react-native";
import styles from "./styles";

interface Props {
  children?: React.ReactNode;
  background?: string;
  height?: string | number;
  width?: string | number;
  justifyContent?: string
}

const Container: React.FC<Props> = ({ children, background, height, width, justifyContent }) => {
  const stylesWithProps = styles(background, height, width, justifyContent);

  return (
    <View
      style={stylesWithProps.containerView}
    >
      {children}
    </View>
  );
};

export default Container;
