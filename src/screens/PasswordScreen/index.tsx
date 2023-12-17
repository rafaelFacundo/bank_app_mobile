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
}

const PasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [password, setPassword] = useState("");
  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText fontSize={30} question={"Qual a sua senha ?"} />
          </View>
          <View style={styles.inputView}>
            <MuInput setState={setPassword} state={password} passwordMode={true}/>
          </View>
        </View>
        <MuButton text={"Avançar"} onPress={() => navigation.goBack()} />
      </View>
    </Container>
  );
};

export default PasswordScreen;
