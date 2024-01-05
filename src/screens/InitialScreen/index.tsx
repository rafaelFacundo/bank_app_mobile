import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import { Picker } from "@react-native-picker/picker";
import MuIcon from "../../../assets/muIcon.png";
import WomanInitialScreenImage from "../../../assets/initialScrImage.png";
import ArrowDown from "../../../assets/arrowDown.png";
import BrazilFlag from "../../../assets/countries/brazil.png";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MuButton from "../../components/MuButton";
import styles from "./styles";

interface Props {
  navigation: any;
}

const InitialScreen: React.FC<Props> = ({ navigation }) => {
  const countries = [
    "Brasil",
    "México",
    "Cuba",
    "Venezuela",
    "Vietnam",
    "Coreia do Norte",
    "Rússia",
    "Sérvia",
  ];
  const [selectedCountry, setselectedCountry] = useState(countries[0]);
  const pickerRef = useRef();

  const temporaryFunction = () => {};

  return (
    <Container background="#C9EFFF">
      <View style={styles.iconAndCountryButtonDiv}>
        <Image source={MuIcon} style={styles.muIcon} />
        <View style={styles.pickerView}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(intemValue: string, _: number): void => {
              setselectedCountry(intemValue);
            }}
          >
            {countries.map((country) => (
              <Picker.Item label={country} value={country} key={country} />
            ))}
          </Picker>
        </View>
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
        <MuButton
          text={"Começar"}
          onPress={() =>
            navigation.navigate("CreateAccountStack", {
              screen: "NameScreenCreate",
              params: { type: 0 },
            })
          }
        />
      </View>

      <TouchableOpacity
        style={styles.goToLoginButton}
        onPress={() =>
          navigation.navigate("CreateAccountStack", {
            screen: "NameScreenCreate",
            params: { type: 1 },
          })
        }
      >
        <Text style={styles.goToLoginText}>Entrar na minha conta</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default InitialScreen;
