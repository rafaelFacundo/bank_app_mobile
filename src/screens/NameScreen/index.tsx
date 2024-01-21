import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Alert, NativeEventEmitter, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";

interface Props {
  navigation: any;
  route: any;
}

const NameScreen: React.FC<Props> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const { type } =
    route.params; /* Receiving the type of action the user is doing - creating account or make login */

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText fontSize={30} question={t("What is your name?")} />
          </View>
          <View style={styles.inputView}>
            <MuInput setState={setName} state={name} />
          </View>
        </View>
        <MuButton
          text={t("Next")}
          onPress={() => {
            if (name) {
              navigation.navigate("CreateAccountStack", {
                screen: "EmailScreenCreate",
                params: { type: type, name: name },
              });
            } else {
              Alert.alert("O preenchimento de todos os campos é obrigatório");
            }
          }}
        />
      </View>
    </Container>
  );
};

export default NameScreen;
