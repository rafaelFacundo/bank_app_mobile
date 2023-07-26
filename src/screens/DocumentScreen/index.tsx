import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";

const DocumentScreen: React.FC = () => {
  const [documentNumber, setDocumentNumber] = useState("");
  const documentMask = (cpfString: string): string => {
    if (cpfString.length === 11) {
      const newString = `${cpfString.slice(0, 3)}.${cpfString.slice(
        3,
        6
      )}.${cpfString.slice(6, 9)}-${cpfString.slice(9)}`;
      return newString;
    }
    return cpfString;
  };
  return (
    <Container>
      <ArrowBackButton />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText
              fontSize={30}
              question={"Digite o número do seu CPF: "}
            />
          </View>
          <View style={styles.inputView}>
            <MuInput
              setState={setDocumentNumber}
              state={documentNumber}
              maskFunction={documentMask}
            />
          </View>
        </View>

        <MuButton text={"Avançar"} />
      </View>
    </Container>
  );
};

export default DocumentScreen;
