import React, { useState } from "react";
import dayjs from "dayjs";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Alert, Platform, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";
import DateInput from "../../components/DateInput";
import { useTranslation } from "react-i18next";

interface Props {
  navigation: any;
  route: any;
}

const DateScreen: React.FC<Props> = ({ navigation, route }) => {
  const params = route.params;
  const [showPicker, setShowPicker] = useState(false);
  const [dateToShow, setDateToShow] = useState(new Date(Date.now()));
  const { t } = useTranslation();
  const dateOfToday = new Date();

  //functions releated to dateTimeInput
  const onChangeDate = (event: any, value: any) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    setDateToShow(value);
  };

  const isTheUserOlderThanEighteen = (
    todayDate: string,
    userBirthDate: string
  ): boolean => {
    const today = dayjs(todayDate);
    const birth = dayjs(userBirthDate);
    const years = birth.diff(today, "year");
    return years >= 18;
  };

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText
              fontSize={30}
              question={t("What is your date of birth?")}
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
          text={t("Next")}
          onPress={() => {
            const todayDateInSting = `${dateToShow.getFullYear()}-${
              dateToShow.getMonth() + 1
            }-${dateToShow.getDate()}`;
            const userBirthDate = `${dateOfToday.getFullYear()}-${
              dateOfToday.getMonth() + 1
            }-${dateOfToday.getDate()}`;
            const isThisAgeAllowed = isTheUserOlderThanEighteen(
              todayDateInSting,
              userBirthDate
            );
            //----
            if (dateToShow && isThisAgeAllowed) {
              navigation.navigate("CreateAccountStack", {
                screen: "AddressScreenCreate",
                params: { ...params, birth_date: dateToShow.toDateString() },
              });
            } else if (dateToShow && !isThisAgeAllowed) {
              Alert.alert(t("You must be of legal age to register"));
            } else {
              Alert.alert(t("Completing all fields is mandatory"));
            }
          }}
        />
      </View>
    </Container>
  );
};

export default DateScreen;
