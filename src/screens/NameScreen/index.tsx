import React from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";

const NameScreen: React.FC = () => {
  return (
    <Container>
      <ArrowBackButton />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText fontSize={30} question={"Qual o seu nome ?"} />
          </View>
          <View style={styles.inputView}>
            <MuInput />
          </View>
        </View>

        <MuButton text={"Avançar"} />
      </View>
    </Container>
  );
};

export default NameScreen;
