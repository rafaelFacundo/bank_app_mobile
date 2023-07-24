import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Platform, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";
import DateInput from "../../components/DateInput";

const DateScreen: React.FC = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [dateToShow, setDateToShow] = useState(new Date(Date.now()));

  //functions releated to dateTimeInput
  const onChangeDate = (event, value) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    setDateToShow(value);
  };

  return (
    <Container>
      <ArrowBackButton />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText
              fontSize={30}
              question={"Qual a sua data de nascimento ?"}
            />
          </View>
          <View style={styles.inputView}>
            <DateInput
              dateToShow={dateToShow}
              setDate={onChangeDate}
              setShow={setShowPicker}
              showPicker={showPicker}
            />
          </View>
        </View>

        <MuButton text={"Avançar"} />
      </View>
    </Container>
  );
};

export default DateScreen;
