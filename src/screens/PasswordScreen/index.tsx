import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";

const PasswordScreen: React.FC = () => {
  const [password, setPassword] = useState("");
  return (
    <Container>
      <ArrowBackButton />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText fontSize={30} question={"Qual a sua senha ?"} />
          </View>
          <View style={styles.inputView}>
            <MuInput setState={setPassword} state={password} />
          </View>
        </View>
        <MuButton text={"Avançar"} />
      </View>
    </Container>
  );
};

export default PasswordScreen;
