import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Platform, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";
import DateInput from "../../components/DateInput";

interface Props {
  navigation: any;
}

const DateScreen: React.FC<Props> = ({ navigation }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [dateToShow, setDateToShow] = useState(new Date(Date.now()));

  //functions releated to dateTimeInput
  const onChangeDate = (event: any, value: any) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    setDateToShow(value);
  };

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
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

        <MuButton
          text={"Avançar"}
          onPress={() =>
            dateToShow &&
            navigation.navigate("CreateAccountStack", {
              screen: "AddressScreenCreate",
            })
          }
        />
      </View>
    </Container>
  );
};

export default DateScreen;
