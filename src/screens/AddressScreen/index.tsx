import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    async function takeZipInformations() {
      if (zip.length === 8) {
        try {
          const response = (
            await axios.get(`https://viacep.com.br/ws/${zip}/json/`)
          ).data;

          setNeighbourhood(response.bairro);
          setCity(response.localidade);
        } catch (error) {
          console.log(error);
        }
      }
    }
    takeZipInformations();
  }, [zip]);

  return (
    <Container>
      <ArrowBackButton />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <QuestionText fontSize={30} question={"Qual o seu CEP ?"} />
          <MuInput setState={setZip} state={zip} />
          <QuestionText fontSize={30} question={"Qual o seu bairro ?"} />
          <MuInput setState={setNeighbourhood} state={neighbourhood} />
          <QuestionText fontSize={30} question={"Qual a sua cidade ?"} />
          <MuInput setState={setCity} state={city} />
        </View>
        <MuButton text={"Avançar"} />
      </View>
    </Container>
  );
};

export default AddressScreen;
