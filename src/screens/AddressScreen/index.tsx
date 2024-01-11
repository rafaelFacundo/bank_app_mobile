import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import styles from "./styles";
import MuButton from "../../components/MuButton";

interface Props {
  navigation: any;
  route: any;
}

const AddressScreen: React.FC<Props> = ({ navigation, route }) => {
  const params = route.params;
  const [zip, setZip] = useState<string>("");
  const [neighbourhood, setNeighbourhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [addresState, setAddressState] = useState<string>("");

  useEffect(() => {
    async function takeZipInformations() {
      if (zip.length === 8) {
        try {
          const response = (
            await axios.get(
              `"https://api.zipcodestack.com/v1/search?codes=${zip}&country=${country}"`,
              {
                headers: {
                  apikey: "AINDA FALTA COLOCAR AQUI",
                  Accept: "application/json",
                },
              }
            )
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
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <QuestionText fontSize={30} question={"Qual o seu CEP ?"} />
          <MuInput setState={setZip} state={zip} />
          <QuestionText fontSize={30} question={"Qual a sua rua ?"} />
          <MuInput setState={setStreet} state={street} />
          <QuestionText
            fontSize={30}
            question={"Qual o numero da sua casa ?"}
          />
          <MuInput setState={setHouseNumber} state={houseNumber} />
          <QuestionText fontSize={30} question={"Qual o seu bairro ?"} />
          <MuInput setState={setNeighbourhood} state={neighbourhood} />
          <QuestionText fontSize={30} question={"Qual a sua cidade ?"} />
          <MuInput setState={setCity} state={city} />
          <QuestionText fontSize={30} question={"Qual o seu estado ?"} />
          <MuInput setState={setAddressState} state={addresState} />
          <QuestionText fontSize={30} question={"Qual o seu país ?"} />
          <MuInput setState={setCountry} state={country} />
        </View>
        <MuButton
          text={"Avançar"}
          onPress={() =>
            navigation.navigate("CreateAccountStack", {
              screen: "PasswordScreenCreate",
              params: { ...params, zip, neighbourhood, city },
            })
          }
        />
      </View>
    </Container>
  );
};

export default AddressScreen;
