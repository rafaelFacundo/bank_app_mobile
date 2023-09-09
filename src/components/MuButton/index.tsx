import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Props {
  text: string;
  onPress: any;
}

const MuButton: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.MuButton} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MuButton;
