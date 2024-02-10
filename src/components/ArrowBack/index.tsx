import React from "react";
import { TouchableOpacity, Image } from "react-native";
import ArrowBackBlue from "../../../assets/arrowBack.png";
import ArrowBackWhite from "../../../assets/arrow_back_white.png";
import styles from "./styles";

interface Props {
  onPress: any;
  arrowColor?: string;
}

const ArrowBackButton: React.FC<Props> = ({ onPress, arrowColor }) => {
  return (
    <TouchableOpacity style={styles.arrowBackButton} onPress={onPress}>
      <Image
        source={arrowColor === "white" ? ArrowBackWhite : ArrowBackBlue}
        style={styles.arrowBackImage}
      />
    </TouchableOpacity>
  );
};

export default ArrowBackButton;
