import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import styles from "./styles";
import MuButton from "../../components/MuButton";

interface Props {
  navigation: any;
}

const TransferScreen: React.FC<Props> = ({ navigation }) => {
  const [amountToTransfer, setAmountToTransfer] = useState("");

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText
              fontSize={30}
              question={"Quanto você deseja transferir?"}
            />
          </View>
          <View style={styles.inputView}>
            <MuInput
              setState={setAmountToTransfer}
              state={amountToTransfer}
              amountMode={true}
            />
          </View>
        </View>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText
              fontSize={30}
              question={"Digite a chave do destinatário:"}
            />
          </View>
          <View style={styles.inputView}>
            <MuInput setState={setAmountToTransfer} state={amountToTransfer} />
          </View>

          <MuButton text={"transferir"} onPress={() => {}} />
        </View>
      </View>
    </Container>
  );
};

export default TransferScreen;
