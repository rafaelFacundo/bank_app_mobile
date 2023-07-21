import React from "react";
import Container from "../../components/Container";
import MuIcon from "../../../assets/muIcon.png";
import WomanInitialScreenImage from "../../../assets/initialScrImage.png";
import ArrowDown from "../../../assets/arrowDown.png";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MuButton from "../../components/MuButton";
import styles from "./styles";

const InitialScreen: React.FC = () => {
  return (
    <Container background="#C9EFFF">
      <View style={styles.iconAndCountryButtonDiv}>
        <Image source={MuIcon} style={styles.muIcon} />
        <TouchableOpacity style={styles.selectCountryButton}>
          <Text style={styles.countryName}>Brazil</Text>
          <Image style={styles.arrowDown} source={ArrowDown} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sloganText}>
        Um mundo financeiro sem complexidades
      </Text>
      <Image
        resizeMode="stretch"
        style={styles.womanImage}
        source={WomanInitialScreenImage}
      />
      <View style={styles.beggingButtonDiv}>
        <MuButton text={"Começar"} />
      </View>

      <TouchableOpacity style={styles.goToLoginButton}>
        <Text style={styles.goToLoginText}>Entrar na minha conta</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default InitialScreen;
