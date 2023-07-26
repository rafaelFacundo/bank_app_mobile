import React, { useState } from "react";
import axios from "axios";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import styles from "./styles";
import MuButton from "../../components/MuButton";

const AddressScreen: React.FC = () => {
  const [zip, setZip] = useState<string>("");
  const [neighbourhood, setNeighbourhood] = useState<string>("");
  const [city, setCity] = useState<string>("");

  return (
    <Container>
      <ArrowBackButton />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <QuestionText fontSize={30} question={"Qual o seu CEP ?"} />
          <MuInput setState={setZip} />
          <QuestionText fontSize={30} question={"Qual o seu bairro ?"} />
          <MuInput setState={setNeighbourhood} />
          <QuestionText fontSize={30} question={"Qual a sua cidade ?"} />
          <MuInput setState={setCity} />
        </View>
        <MuButton text={"Avançar"} />
      </View>
    </Container>
  );
};

export default AddressScreen;
