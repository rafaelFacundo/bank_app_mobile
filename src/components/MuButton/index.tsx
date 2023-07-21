import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Props {
  text: string;
}

const MuButton: React.FC<Props> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.MuButton}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MuButton;
