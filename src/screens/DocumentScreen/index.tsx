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

const DocumentScreen: React.FC<Props> = ({ navigation, route }) => {
  const { type } = route.params;
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

  const handleNextPage = (operationType: number) => {
    if (operationType === 0) {
      navigation.navigate("CreateAccountStack", {
        screen: "DateScreenCreate",
        params: { type },
      });
    } else {
      navigation.navigate("LoginStack", {
        screen: "PasswordScreen",
        params: { type },
      });
    }
  };
  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
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

        <MuButton
          text={"Avançar"}
          onPress={() => documentNumber && handleNextPage(type)}
        />
      </View>
    </Container>
  );
};

export default DocumentScreen;
