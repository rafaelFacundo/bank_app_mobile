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
  const [country, setCountry] = useState<string>("br");
  const [addresState, setAddressState] = useState<string>("");

  useEffect(() => {
    async function takeZipInformations() {
      console.log("ENTREI NA FUNÇÂO DO TAKE ZIP");
      console.log(zip);
      if (zip.length === 8) {
        try {
          const response = (
            await axios.get(
              `https://api.zipcodestack.com/v1/search?codes=${zip}&country=${country}`,
              {
                headers: {
                  apikey: "",
                  Accept: "application/json",
                },
              }
            )
          ).data;

          console.log("PASSEO PELA REQUISIÇÂO");

          console.log(response.results);

          /* setNeighbourhood(response.bairro);
          setCity(response.localidade); */
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
              params: {
                ...params,
                neighbourhood,
                city,
                street,
                houseNumber,
                addresState,
                country,
              },
            })
          }
        />
      </View>
    </Container>
  );
};

export default AddressScreen;
