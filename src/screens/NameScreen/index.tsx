import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { NativeEventEmitter, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";

interface Props {
  navigation: any;
  route: any;
}

const NameScreen: React.FC<Props> = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const { type } =
    route.params; /* Receiving the type of action the user is doing - creating account or make login */

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText fontSize={30} question={"Qual o seu nome ?"} />
          </View>
          <View style={styles.inputView}>
            <MuInput setState={setName} state={name} />
          </View>
        </View>
        <MuButton
          text={"Avançar"}
          onPress={() =>
            name &&
            navigation.navigate("CreateAccountStack", {
              screen: "EmailScreenCreate",
              params: { type: type, name: name },
            })
          }
        />
      </View>
    </Container>
  );
};

export default NameScreen;
