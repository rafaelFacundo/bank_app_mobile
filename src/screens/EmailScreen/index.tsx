import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { View } from "react-native";
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
  const params = route.params;

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText fontSize={30} question={"Qual o seu email ?"} />
          </View>
          <View style={styles.inputView}>
            <MuInput setState={setEmail} state={email} />
          </View>
        </View>

        <MuButton
          text={"Avançar"}
          onPress={() =>
            email &&
            navigation.navigate("CreateAccountStack", {
              screen: "DocumentScreenCreate",
              params: { ...params, email: email },
            })
          }
        />
      </View>
    </Container>
  );
};

export default EmailScreen;
