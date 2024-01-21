import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Alert, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";

interface Props {
  navigation: any;
  route: any;
}

const EmailScreen: React.FC<Props> = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const params = route.params;

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText fontSize={30} question={t("Enter your email:")} />
          </View>
          <View style={styles.inputView}>
            <MuInput setState={setEmail} state={email} />
          </View>
        </View>

        <MuButton
          text={t("Next")}
          onPress={() => {
            if (email) {
              navigation.navigate("CreateAccountStack", {
                screen: "DocumentScreenCreate",
                params: { ...params, email: email },
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

export default EmailScreen;
