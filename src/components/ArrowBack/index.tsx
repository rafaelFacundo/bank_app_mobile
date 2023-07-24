import React from "react";
import { TouchableOpacity, Image } from "react-native";
import ArrowBack from "../../../assets/arrowBack.png";
import styles from "./styles";

const ArrowBackButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.arrowBackButton}>
      <Image source={ArrowBack} style={styles.arrowBackImage} />
    </TouchableOpacity>
  );
};

export default ArrowBackButton;
