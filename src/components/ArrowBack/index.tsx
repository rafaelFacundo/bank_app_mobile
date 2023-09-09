import React from "react";
import { TouchableOpacity, Image } from "react-native";
import ArrowBack from "../../../assets/arrowBack.png";
import styles from "./styles";

interface Props {
  onPress: any;
}

const ArrowBackButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.arrowBackButton} onPress={onPress}>
      <Image source={ArrowBack} style={styles.arrowBackImage} />
    </TouchableOpacity>
  );
};

export default ArrowBackButton;
