import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Alert, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import styles from "./styles";
import MuButton from "../../components/MuButton";
import { useTranslation } from "react-i18next";

interface Props {
  navigation: any;
  route: any;
}

const AddressScreen: React.FC<Props> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const params = route.params;

  const [neighbourhood, setNeighbourhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [addresState, setAddressState] = useState<string>("");

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <QuestionText
            fontSize={30}
            question={t("What is the name of your street?")}
          />
          <MuInput setState={setStreet} state={street} />
          <QuestionText
            fontSize={30}
            question={t("What is your house number?")}
          />
          <MuInput setState={setHouseNumber} state={houseNumber} />
          <QuestionText
            fontSize={30}
            question={t("What is the name of your neighbourhood?")}
          />
          <MuInput setState={setNeighbourhood} state={neighbourhood} />
          <QuestionText
            fontSize={30}
            question={t("What is the name of your city?")}
          />
          <MuInput setState={setCity} state={city} />
          <QuestionText
            fontSize={30}
            question={t("What is the name of your state?")}
          />
          <MuInput setState={setAddressState} state={addresState} />
          <QuestionText
            fontSize={30}
            question={t("What is the name of your country?")}
          />
          <MuInput setState={setCountry} state={country} />
        </View>
        <MuButton
          text={t("Next")}
          onPress={() => {
            if (
              city &&
              neighbourhood &&
              country &&
              addresState &&
              houseNumber &&
              street
            ) {
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
              });
            } else {
              Alert.alert(t("Completing all fields is mandatory"));
            }
          }}
        />
      </View>
    </Container>
  );
};

export default AddressScreen;
