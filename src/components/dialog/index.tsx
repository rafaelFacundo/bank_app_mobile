import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  children?: React.ReactNode;
}

const Dialog: React.FC<Props> = ({ children }) => {
  return (
    <View>
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Dialog;
